/**
 * Auto generated test cases for "Analytics API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import analytics = require("../lib/analytics/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test Analytics Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeAnalyticsInstanceCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ChangeAnalyticsInstanceCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ChangeAnalyticsInstanceCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests(
      "analytics",
      "ChangeAnalyticsInstanceCompartment"
    );

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.changeAnalyticsInstanceCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ChangeAnalyticsInstanceCompartmentRequest",
          data.request,
          "ChangeAnalyticsInstanceCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ChangeAnalyticsInstanceCompartmentRequest",
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

  it("Test createAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "CreateAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "CreateAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "CreateAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.createAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "CreateAnalyticsInstanceRequest",
          data.request,
          "CreateAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "CreateAnalyticsInstanceRequest",
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

  it("Test deleteAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "DeleteAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "DeleteAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "DeleteAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.deleteAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "DeleteAnalyticsInstanceRequest",
          data.request,
          "DeleteAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "DeleteAnalyticsInstanceRequest",
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

  it("Test deleteWorkRequest method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "DeleteWorkRequest"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "DeleteWorkRequest"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "DeleteWorkRequest");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.deleteWorkRequest(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "DeleteWorkRequestRequest",
          data.request,
          "DeleteWorkRequestResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "DeleteWorkRequestRequest",
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

  it("Test getAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "GetAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "GetAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "GetAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.getAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "GetAnalyticsInstanceRequest",
          data.request,
          "GetAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "GetAnalyticsInstanceRequest",
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

  it("Test getWorkRequest method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "GetWorkRequest"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("analytics", "Analytics", "GetWorkRequest");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "GetWorkRequest");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.getWorkRequest(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "GetWorkRequestRequest",
          data.request,
          "GetWorkRequestResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "GetWorkRequestRequest",
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

  it("Test listAnalyticsInstances method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ListAnalyticsInstances"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ListAnalyticsInstances"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "ListAnalyticsInstances");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.listAnalyticsInstances(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ListAnalyticsInstancesRequest",
          data.request,
          "ListAnalyticsInstancesResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ListAnalyticsInstancesRequest",
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

  it("Test listWorkRequestErrors method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ListWorkRequestErrors"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ListWorkRequestErrors"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "ListWorkRequestErrors");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.listWorkRequestErrors(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ListWorkRequestErrorsRequest",
          data.request,
          "ListWorkRequestErrorsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ListWorkRequestErrorsRequest",
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

  it("Test listWorkRequestLogs method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ListWorkRequestLogs"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ListWorkRequestLogs"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "ListWorkRequestLogs");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.listWorkRequestLogs(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ListWorkRequestLogsRequest",
          data.request,
          "ListWorkRequestLogsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ListWorkRequestLogsRequest",
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

  it("Test listWorkRequests method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ListWorkRequests"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ListWorkRequests"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "ListWorkRequests");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.listWorkRequests(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ListWorkRequestsRequest",
          data.request,
          "ListWorkRequestsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ListWorkRequestsRequest",
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

  it("Test scaleAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "ScaleAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "ScaleAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "ScaleAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.scaleAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "ScaleAnalyticsInstanceRequest",
          data.request,
          "ScaleAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "ScaleAnalyticsInstanceRequest",
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

  it("Test startAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "StartAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "StartAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "StartAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.startAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "StartAnalyticsInstanceRequest",
          data.request,
          "StartAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "StartAnalyticsInstanceRequest",
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

  it("Test stopAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "StopAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "StopAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "StopAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.stopAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "StopAnalyticsInstanceRequest",
          data.request,
          "StopAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "StopAnalyticsInstanceRequest",
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

  it("Test updateAnalyticsInstance method", async function() {
    if (!(await tsclient.isApiEnabled("analytics", "UpdateAnalyticsInstance"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "analytics",
      "Analytics",
      "UpdateAnalyticsInstance"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const analyticsClient = new analytics.AnalyticsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      analyticsClient.endpoint = config.endpoint;
    } else {
      analyticsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("analytics", "UpdateAnalyticsInstance");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await analyticsClient.updateAnalyticsInstance(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "analytics",
          "UpdateAnalyticsInstanceRequest",
          data.request,
          "UpdateAnalyticsInstanceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "analytics",
            "UpdateAnalyticsInstanceRequest",
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