/*
  This script provides an example on how to move a compartment to a different compartment
  This script will:
     * create cp_source_TSSDK under tenancy
     * create cp_target_TSSDK under tenancy
     * move cp_source_TSSDK under cp_target_TSSDK
*/

import * as identity from "oci-identity";
import { ConfigFileReader } from "oci-common/lib/config-file-reader";
import common = require("oci-common");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);
const config = ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");
let compartmentId = "";
if (profile) {
  compartmentId = profile.get("tenancy") as string;
} else {
  compartmentId = "";
}

(async () => {
  const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

  //  Create source compartment
  let createCompartmentDetails: identity.models.CreateCompartmentDetails = {
    compartmentId: compartmentId,
    name: "cp_source_TSSDK",
    "description": "compartment source"
  };

  let createCompartmentRequest: identity.requests.CreateCompartmentRequest = {
    createCompartmentDetails: createCompartmentDetails
  };

  let createCompartmentResponse = await identityClient.createCompartment(createCompartmentRequest);
  const sourceCompartmentId = createCompartmentResponse.compartment.id;
  console.log("Created source compartment: ", createCompartmentResponse.compartment);

  //  Create target compartment
  createCompartmentDetails = {
    compartmentId: compartmentId,
    name: "cp_target_TSSDK",
    "description": "compartment target"
  };
  createCompartmentRequest = {
    createCompartmentDetails: createCompartmentDetails
  };
  createCompartmentResponse = await identityClient.createCompartment(createCompartmentRequest);
  const targetCompartmentId = createCompartmentResponse.compartment.id;
  console.log("Created target compartment: ", createCompartmentResponse.compartment);

  // Move Compartment
  const moveCompartmentDetails: identity.models.MoveCompartmentDetails = {
    targetCompartmentId: targetCompartmentId
  };
  const moveCompartmentRequest: identity.requests.MoveCompartmentRequest = {
    compartmentId: sourceCompartmentId,
    moveCompartmentDetails: moveCompartmentDetails
  };

  const moveCompartmentResponse = await identityClient.moveCompartment(moveCompartmentRequest);

  console.log("Compartment moved successfully");
})();