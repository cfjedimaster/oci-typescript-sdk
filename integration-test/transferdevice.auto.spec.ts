/**
 * Auto generated test cases for "Data Transfer Service API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import dts = require("../lib/dts/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test TransferDevice Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test createTransferDevice method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "CreateTransferDevice"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferDevice",
      "CreateTransferDevice"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferDeviceClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "CreateTransferDevice");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.createTransferDevice(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "CreateTransferDeviceRequest",
          data.request,
          "CreateTransferDeviceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "CreateTransferDeviceRequest",
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

  it("Test deleteTransferDevice method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "DeleteTransferDevice"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferDevice",
      "DeleteTransferDevice"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferDeviceClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "DeleteTransferDevice");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.deleteTransferDevice(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "DeleteTransferDeviceRequest",
          data.request,
          "DeleteTransferDeviceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "DeleteTransferDeviceRequest",
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

  it("Test getTransferDevice method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "GetTransferDevice"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferDevice",
      "GetTransferDevice"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferDeviceClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "GetTransferDevice");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.getTransferDevice(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "GetTransferDeviceRequest",
          data.request,
          "GetTransferDeviceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "GetTransferDeviceRequest",
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

  it("Test listTransferDevices method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "ListTransferDevices"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferDevice",
      "ListTransferDevices"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferDeviceClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "ListTransferDevices");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.listTransferDevices(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "ListTransferDevicesRequest",
          data.request,
          "ListTransferDevicesResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "ListTransferDevicesRequest",
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

  it("Test updateTransferDevice method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "UpdateTransferDevice"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferDevice",
      "UpdateTransferDevice"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferDeviceClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "UpdateTransferDevice");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.updateTransferDevice(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "UpdateTransferDeviceRequest",
          data.request,
          "UpdateTransferDeviceResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "UpdateTransferDeviceRequest",
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
