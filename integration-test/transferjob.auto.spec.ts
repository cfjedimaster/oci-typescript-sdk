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

describe("Test TransferJob Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeTransferJobCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "ChangeTransferJobCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "dts",
      "TransferJob",
      "ChangeTransferJobCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "ChangeTransferJobCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.changeTransferJobCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "ChangeTransferJobCompartmentRequest",
          data.request,
          "ChangeTransferJobCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "ChangeTransferJobCompartmentRequest",
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

  it("Test createTransferJob method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "CreateTransferJob"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("dts", "TransferJob", "CreateTransferJob");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "CreateTransferJob");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.createTransferJob(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "CreateTransferJobRequest",
          data.request,
          "CreateTransferJobResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "CreateTransferJobRequest",
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

  it("Test deleteTransferJob method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "DeleteTransferJob"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("dts", "TransferJob", "DeleteTransferJob");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "DeleteTransferJob");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.deleteTransferJob(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "DeleteTransferJobRequest",
          data.request,
          "DeleteTransferJobResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "DeleteTransferJobRequest",
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

  it("Test getTransferJob method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "GetTransferJob"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("dts", "TransferJob", "GetTransferJob");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "GetTransferJob");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.getTransferJob(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "GetTransferJobRequest",
          data.request,
          "GetTransferJobResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "GetTransferJobRequest",
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

  it("Test listTransferJobs method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "ListTransferJobs"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("dts", "TransferJob", "ListTransferJobs");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "ListTransferJobs");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.listTransferJobs(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "ListTransferJobsRequest",
          data.request,
          "ListTransferJobsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "ListTransferJobsRequest",
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

  it("Test updateTransferJob method", async function() {
    if (!(await tsclient.isApiEnabled("dts", "UpdateTransferJob"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("dts", "TransferJob", "UpdateTransferJob");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const dtsClient = new dts.TransferJobClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      dtsClient.endpoint = config.endpoint;
    } else {
      dtsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("dts", "UpdateTransferJob");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await dtsClient.updateTransferJob(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "dts",
          "UpdateTransferJobRequest",
          data.request,
          "UpdateTransferJobResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "dts",
            "UpdateTransferJobRequest",
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
