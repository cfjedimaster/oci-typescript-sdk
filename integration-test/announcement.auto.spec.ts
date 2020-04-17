/**
 * Auto generated test cases for "Announcements Service API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import announcementsservice = require("../lib/announcementsservice/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test Announcement Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test getAnnouncement method", async function() {
    if (!(await tsclient.isApiEnabled("announcementsservice", "GetAnnouncement"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "announcementsservice",
      "Announcement",
      "GetAnnouncement"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const announcementsserviceClient = new announcementsservice.AnnouncementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      announcementsserviceClient.endpoint = config.endpoint;
    } else {
      announcementsserviceClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("announcementsservice", "GetAnnouncement");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await announcementsserviceClient.getAnnouncement(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "announcementsservice",
          "GetAnnouncementRequest",
          data.request,
          "GetAnnouncementResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "announcementsservice",
            "GetAnnouncementRequest",
            data.request,
            err
          );
          expect(message).to.equal("");
        } else {
          console.debug(err);
          throw err;
        }
      }
    }
  });

  it("Test getAnnouncementUserStatus method", async function() {
    if (!(await tsclient.isApiEnabled("announcementsservice", "GetAnnouncementUserStatus"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "announcementsservice",
      "Announcement",
      "GetAnnouncementUserStatus"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const announcementsserviceClient = new announcementsservice.AnnouncementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      announcementsserviceClient.endpoint = config.endpoint;
    } else {
      announcementsserviceClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests(
      "announcementsservice",
      "GetAnnouncementUserStatus"
    );

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await announcementsserviceClient.getAnnouncementUserStatus(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "announcementsservice",
          "GetAnnouncementUserStatusRequest",
          data.request,
          "GetAnnouncementUserStatusResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "announcementsservice",
            "GetAnnouncementUserStatusRequest",
            data.request,
            err
          );
          expect(message).to.equal("");
        } else {
          console.debug(err);
          throw err;
        }
      }
    }
  });

  it("Test listAnnouncements method", async function() {
    if (!(await tsclient.isApiEnabled("announcementsservice", "ListAnnouncements"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "announcementsservice",
      "Announcement",
      "ListAnnouncements"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const announcementsserviceClient = new announcementsservice.AnnouncementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      announcementsserviceClient.endpoint = config.endpoint;
    } else {
      announcementsserviceClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("announcementsservice", "ListAnnouncements");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await announcementsserviceClient.listAnnouncements(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "announcementsservice",
          "ListAnnouncementsRequest",
          data.request,
          "ListAnnouncementsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "announcementsservice",
            "ListAnnouncementsRequest",
            data.request,
            err
          );
          expect(message).to.equal("");
        } else {
          console.debug(err);
          throw err;
        }
      }
    }
  });

  it("Test updateAnnouncementUserStatus method", async function() {
    if (!(await tsclient.isApiEnabled("announcementsservice", "UpdateAnnouncementUserStatus"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "announcementsservice",
      "Announcement",
      "UpdateAnnouncementUserStatus"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const announcementsserviceClient = new announcementsservice.AnnouncementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      announcementsserviceClient.endpoint = config.endpoint;
    } else {
      announcementsserviceClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests(
      "announcementsservice",
      "UpdateAnnouncementUserStatus"
    );

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await announcementsserviceClient.updateAnnouncementUserStatus(
          data.request
        );
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "announcementsservice",
          "UpdateAnnouncementUserStatusRequest",
          data.request,
          "UpdateAnnouncementUserStatusResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "announcementsservice",
            "UpdateAnnouncementUserStatusRequest",
            data.request,
            err
          );
          expect(message).to.equal("");
        } else {
          console.debug(err);
          throw err;
        }
      }
    }
  });
});
