/**
 * Auto generated test cases for "Email Delivery API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import email = require("../lib/email/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test Email Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeSenderCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("email", "ChangeSenderCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "email",
      "Email",
      "ChangeSenderCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "ChangeSenderCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.changeSenderCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "ChangeSenderCompartmentRequest",
          data.request,
          "ChangeSenderCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "ChangeSenderCompartmentRequest",
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

  it("Test createSender method", async function() {
    if (!(await tsclient.isApiEnabled("email", "CreateSender"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "CreateSender");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "CreateSender");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.createSender(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "CreateSenderRequest",
          data.request,
          "CreateSenderResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "CreateSenderRequest",
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

  it("Test createSuppression method", async function() {
    if (!(await tsclient.isApiEnabled("email", "CreateSuppression"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "CreateSuppression");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "CreateSuppression");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.createSuppression(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "CreateSuppressionRequest",
          data.request,
          "CreateSuppressionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "CreateSuppressionRequest",
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

  it("Test deleteSender method", async function() {
    if (!(await tsclient.isApiEnabled("email", "DeleteSender"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "DeleteSender");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "DeleteSender");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.deleteSender(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "DeleteSenderRequest",
          data.request,
          "DeleteSenderResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "DeleteSenderRequest",
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

  it("Test deleteSuppression method", async function() {
    if (!(await tsclient.isApiEnabled("email", "DeleteSuppression"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "DeleteSuppression");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "DeleteSuppression");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.deleteSuppression(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "DeleteSuppressionRequest",
          data.request,
          "DeleteSuppressionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "DeleteSuppressionRequest",
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

  it("Test getSender method", async function() {
    if (!(await tsclient.isApiEnabled("email", "GetSender"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "GetSender");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "GetSender");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.getSender(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "GetSenderRequest",
          data.request,
          "GetSenderResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "GetSenderRequest",
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

  it("Test getSuppression method", async function() {
    if (!(await tsclient.isApiEnabled("email", "GetSuppression"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "GetSuppression");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "GetSuppression");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.getSuppression(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "GetSuppressionRequest",
          data.request,
          "GetSuppressionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "GetSuppressionRequest",
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

  it("Test listSenders method", async function() {
    if (!(await tsclient.isApiEnabled("email", "ListSenders"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "ListSenders");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "ListSenders");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.listSenders(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "ListSendersRequest",
          data.request,
          "ListSendersResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "ListSendersRequest",
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

  it("Test listSuppressions method", async function() {
    if (!(await tsclient.isApiEnabled("email", "ListSuppressions"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "ListSuppressions");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "ListSuppressions");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.listSuppressions(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "ListSuppressionsRequest",
          data.request,
          "ListSuppressionsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "ListSuppressionsRequest",
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

  it("Test updateSender method", async function() {
    if (!(await tsclient.isApiEnabled("email", "UpdateSender"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("email", "Email", "UpdateSender");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const emailClient = new email.EmailClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      emailClient.endpoint = config.endpoint;
    } else {
      emailClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("email", "UpdateSender");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await emailClient.updateSender(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "email",
          "UpdateSenderRequest",
          data.request,
          "UpdateSenderResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "email",
            "UpdateSenderRequest",
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
