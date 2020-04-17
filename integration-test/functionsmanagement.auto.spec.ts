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

describe("Test FunctionsManagement Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeApplicationCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "ChangeApplicationCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "ChangeApplicationCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "ChangeApplicationCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.changeApplicationCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "ChangeApplicationCompartmentRequest",
          data.request,
          "ChangeApplicationCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "ChangeApplicationCompartmentRequest",
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

  it("Test createApplication method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "CreateApplication"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "CreateApplication"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "CreateApplication");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.createApplication(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "CreateApplicationRequest",
          data.request,
          "CreateApplicationResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "CreateApplicationRequest",
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

  it("Test createFunction method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "CreateFunction"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "CreateFunction"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "CreateFunction");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.createFunction(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "CreateFunctionRequest",
          data.request,
          "CreateFunctionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "CreateFunctionRequest",
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

  it("Test deleteApplication method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "DeleteApplication"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "DeleteApplication"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "DeleteApplication");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.deleteApplication(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "DeleteApplicationRequest",
          data.request,
          "DeleteApplicationResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "DeleteApplicationRequest",
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

  it("Test deleteFunction method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "DeleteFunction"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "DeleteFunction"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "DeleteFunction");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.deleteFunction(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "DeleteFunctionRequest",
          data.request,
          "DeleteFunctionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "DeleteFunctionRequest",
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

  it("Test getApplication method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "GetApplication"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "GetApplication"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "GetApplication");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.getApplication(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "GetApplicationRequest",
          data.request,
          "GetApplicationResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "GetApplicationRequest",
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

  it("Test getFunction method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "GetFunction"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "GetFunction"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "GetFunction");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.getFunction(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "GetFunctionRequest",
          data.request,
          "GetFunctionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "GetFunctionRequest",
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

  it("Test listApplications method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "ListApplications"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "ListApplications"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "ListApplications");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.listApplications(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "ListApplicationsRequest",
          data.request,
          "ListApplicationsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "ListApplicationsRequest",
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

  it("Test listFunctions method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "ListFunctions"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "ListFunctions"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "ListFunctions");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.listFunctions(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "ListFunctionsRequest",
          data.request,
          "ListFunctionsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "ListFunctionsRequest",
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

  it("Test updateApplication method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "UpdateApplication"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "UpdateApplication"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "UpdateApplication");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.updateApplication(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "UpdateApplicationRequest",
          data.request,
          "UpdateApplicationResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "UpdateApplicationRequest",
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

  it("Test updateFunction method", async function() {
    if (!(await tsclient.isApiEnabled("functions", "UpdateFunction"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "functions",
      "FunctionsManagement",
      "UpdateFunction"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const functionsClient = new functions.FunctionsManagementClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      functionsClient.endpoint = config.endpoint;
    } else {
      functionsClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("functions", "UpdateFunction");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await functionsClient.updateFunction(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "functions",
          "UpdateFunctionRequest",
          data.request,
          "UpdateFunctionResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "functions",
            "UpdateFunctionRequest",
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