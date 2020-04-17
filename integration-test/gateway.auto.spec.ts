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

describe("Test Gateway Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeGatewayCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "ChangeGatewayCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "apigateway",
      "Gateway",
      "ChangeGatewayCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "ChangeGatewayCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.changeGatewayCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "ChangeGatewayCompartmentRequest",
          data.request,
          "ChangeGatewayCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "ChangeGatewayCompartmentRequest",
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

  it("Test createGateway method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "CreateGateway"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("apigateway", "Gateway", "CreateGateway");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "CreateGateway");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.createGateway(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "CreateGatewayRequest",
          data.request,
          "CreateGatewayResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "CreateGatewayRequest",
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

  it("Test deleteGateway method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "DeleteGateway"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("apigateway", "Gateway", "DeleteGateway");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "DeleteGateway");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.deleteGateway(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "DeleteGatewayRequest",
          data.request,
          "DeleteGatewayResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "DeleteGatewayRequest",
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

  it("Test getGateway method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "GetGateway"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("apigateway", "Gateway", "GetGateway");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "GetGateway");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.getGateway(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "GetGatewayRequest",
          data.request,
          "GetGatewayResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "GetGatewayRequest",
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

  it("Test listGateways method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "ListGateways"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("apigateway", "Gateway", "ListGateways");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "ListGateways");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.listGateways(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "ListGatewaysRequest",
          data.request,
          "ListGatewaysResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "ListGatewaysRequest",
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

  it("Test updateGateway method", async function() {
    if (!(await tsclient.isApiEnabled("apigateway", "UpdateGateway"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("apigateway", "Gateway", "UpdateGateway");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const apigatewayClient = new apigateway.GatewayClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      apigatewayClient.endpoint = config.endpoint;
    } else {
      apigatewayClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("apigateway", "UpdateGateway");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await apigatewayClient.updateGateway(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "apigateway",
          "UpdateGatewayRequest",
          data.request,
          "UpdateGatewayResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "apigateway",
            "UpdateGatewayRequest",
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