/**
 * Auto generated test cases for "Key Management Service API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import keymanagement = require("../lib/keymanagement/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test KmsVault Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test cancelVaultDeletion method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "CancelVaultDeletion"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "keymanagement",
      "KmsVault",
      "CancelVaultDeletion"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "CancelVaultDeletion");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.cancelVaultDeletion(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "CancelVaultDeletionRequest",
          data.request,
          "CancelVaultDeletionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "CancelVaultDeletionRequest",
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

  it("Test changeVaultCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "ChangeVaultCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "keymanagement",
      "KmsVault",
      "ChangeVaultCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "ChangeVaultCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.changeVaultCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "ChangeVaultCompartmentRequest",
          data.request,
          "ChangeVaultCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "ChangeVaultCompartmentRequest",
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

  it("Test createVault method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "CreateVault"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("keymanagement", "KmsVault", "CreateVault");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "CreateVault");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.createVault(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "CreateVaultRequest",
          data.request,
          "CreateVaultResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "CreateVaultRequest",
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

  it("Test getVault method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "GetVault"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("keymanagement", "KmsVault", "GetVault");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "GetVault");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.getVault(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "GetVaultRequest",
          data.request,
          "GetVaultResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "GetVaultRequest",
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

  it("Test listVaults method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "ListVaults"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("keymanagement", "KmsVault", "ListVaults");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "ListVaults");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.listVaults(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "ListVaultsRequest",
          data.request,
          "ListVaultsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "ListVaultsRequest",
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

  it("Test scheduleVaultDeletion method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "ScheduleVaultDeletion"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "keymanagement",
      "KmsVault",
      "ScheduleVaultDeletion"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "ScheduleVaultDeletion");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.scheduleVaultDeletion(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "ScheduleVaultDeletionRequest",
          data.request,
          "ScheduleVaultDeletionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "ScheduleVaultDeletionRequest",
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

  it("Test updateVault method", async function() {
    if (!(await tsclient.isApiEnabled("keymanagement", "UpdateVault"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("keymanagement", "KmsVault", "UpdateVault");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const keymanagementClient = new keymanagement.KmsVaultClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      keymanagementClient.endpoint = config.endpoint;
    } else {
      keymanagementClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("keymanagement", "UpdateVault");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await keymanagementClient.updateVault(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "keymanagement",
          "UpdateVaultRequest",
          data.request,
          "UpdateVaultResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "keymanagement",
            "UpdateVaultRequest",
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