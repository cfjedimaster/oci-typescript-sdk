/*
  coding: utf-8
  Copyright (c) 2016, 2020, Oracle and/or its affiliates. All rights reserved.

   This script retrieves all audit logs across an Oracle Cloud Infrastructure Tenancy.
   for a timespan defined by startTime and endTime.
   This sample script retrieves Audit events for last 5 days.
   This script will work at a tenancy level only.
*/

const identity = require("oci-identity");
const ConfigFileReader = require("../../target/lib/common/lib/config-file-reader.js");

const audit = require("oci-audit");
const common = require("oci-common");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const config = ConfigFileReader.ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");
const compartmentId = profile.get("tenancy") || "";

let identityClient;
let auditClient;

async function getSubscriptionRegions(tenancyId) {
  // To retrieve the list of all available regions.
  const listRegionSubscriptionsRequest = {
    tenancyId: tenancyId
  };

  const regions = await identityClient.listRegionSubscriptions(listRegionSubscriptionsRequest);

  return regions.items.map(region => {
    return region.regionName;
  });
}

async function getCompartments(tenancyId) {
  // Retrieve the list of compartments under the tenancy.
  const compartmentOcids = [tenancyId];
  const listCompartmentsRequest = {
    compartmentId: tenancyId
  };
  const compartments = await identityClient.listCompartments(listCompartmentsRequest);
  for (let i = 0; i < compartments.items.length; i++) {
    compartmentOcids.push(compartments.items[i].id);
  }
  return compartmentOcids;
}

async function getAuditEvents(audit, compartmentOcids, startTime, endTime) {
  /*
    Get events iteratively for each compartment defined in 'compartmentsOcids'
    for the region defined in 'audit'.
    This method eagerly loads all audit records in the time range and it does
    have performance implications of lot of audit records.
    Ideally, the generator method in oci.pagination should be used to lazily
    load results.

      startTime: ("2020-01-15T11:30:00Z" as unknown) as Date,
      endTime: ("2020-01-20T11:30:00Z" as unknown) as Date
  */
  const listOfAuditEvents = [];
  for (let i = 0; i < compartmentOcids.length; i++) {
    const listEventsRequest = {
      compartmentId: compartmentOcids[i],
      startTime: startTime,
      endTime: endTime
    };
    try {
      const response = await audit.listEvents(listEventsRequest);
      listOfAuditEvents.push(response.items);
    } catch (err) {
      // console.log("what is err: ", err);
    }
  }
  return listOfAuditEvents;
}

(async () => {
  identityClient = await new identity.IdentityClient({
    authenticationDetailsProvider: provider
  });
  auditClient = await new audit.AuditClient({
    authenticationDetailsProvider: provider
  });

  const endTime = new Date();
  const offset = new Date().setDate(new Date().getDate() - 5);
  const startTime = new Date(offset);

  const regions = await getSubscriptionRegions(compartmentId);

  const compartments = await getCompartments(compartmentId);

  for (let region of regions) {
    const x = common.Region.fromRegionId(region);
    auditClient.region = x;
    const auditEvents = await getAuditEvents(auditClient, compartments, startTime, endTime);
    console.log("auditEvent: ", auditEvents);
  }
})();
