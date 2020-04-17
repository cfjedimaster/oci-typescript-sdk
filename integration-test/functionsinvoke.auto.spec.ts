/**
 * Auto generated test cases for "Functions Service API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import functions = require("../lib/functions/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test FunctionsInvoke Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test invokeFunction method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "InvokeFunction"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsInvoke",
      "InvokeFunction"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsInvokeClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    functionsClient.endpoint = await tsclient.getEndPoint(
      "functions",
      "FunctionsInvokeClient",
      "InvokeFunction"
    );
    const requests: any[] = await tsclient.getRequests("functions", "InvokeFunction");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.invokeFunction(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "InvokeFunctionRequest",
          data.request,
          "InvokeFunctionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "InvokeFunctionRequest",
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