/**
 * Auto generated test cases for "API Gateway API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import apigateway = require("../lib/apigateway/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test WorkRequests Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test cancelWorkRequest method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "CancelWorkRequest"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "WorkRequests",
      "CancelWorkRequest"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.WorkRequestsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "CancelWorkRequest");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.cancelWorkRequest(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "CancelWorkRequestRequest",
          data.request,
          "CancelWorkRequestResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "CancelWorkRequestRequest",
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
    if (!(await tsclient.isApiEnabled("apigateway", "GetWorkRequest"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "WorkRequests",
      "GetWorkRequest"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.WorkRequestsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "GetWorkRequest");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.getWorkRequest(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
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
            "apigateway",
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

  it("Test listWorkRequestErrors method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "ListWorkRequestErrors"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "WorkRequests",
      "ListWorkRequestErrors"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.WorkRequestsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "ListWorkRequestErrors");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.listWorkRequestErrors(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
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
            "apigateway",
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
    if (!(await tsclient.isApiEnabled("apigateway", "ListWorkRequestLogs"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "WorkRequests",
      "ListWorkRequestLogs"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.WorkRequestsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "ListWorkRequestLogs");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.listWorkRequestLogs(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
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
            "apigateway",
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
    if (!(await tsclient.isApiEnabled("apigateway", "ListWorkRequests"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "WorkRequests",
      "ListWorkRequests"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.WorkRequestsClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "ListWorkRequests");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.listWorkRequests(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
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
            "apigateway",
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
});