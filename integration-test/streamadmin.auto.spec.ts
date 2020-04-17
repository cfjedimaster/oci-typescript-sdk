/**
 * Auto generated test cases for "Streaming Service API"
 *
 * NOTE: This class is auto generated by OracleSDKTestGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import streaming = require("../lib/streaming/");
import TestingServiceClient = require("./testing-service-client");

import { expect } from "chai";
import common = require("oci-common");

describe("Test StreamAdmin Api", () => {
  let tsclient: TestingServiceClient.TestingServiceClient;

  before(() => {
    tsclient = new TestingServiceClient.TestingServiceClient();
    return tsclient.startSession();
  });

  after(() => {
    return tsclient.endSession();
  });

  it("Test changeConnectHarnessCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ChangeConnectHarnessCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "ChangeConnectHarnessCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests(
      "streaming",
      "ChangeConnectHarnessCompartment"
    );

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.changeConnectHarnessCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ChangeConnectHarnessCompartmentRequest",
          data.request,
          "ChangeConnectHarnessCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ChangeConnectHarnessCompartmentRequest",
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

  it("Test changeStreamCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ChangeStreamCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "ChangeStreamCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "ChangeStreamCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.changeStreamCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ChangeStreamCompartmentRequest",
          data.request,
          "ChangeStreamCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ChangeStreamCompartmentRequest",
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

  it("Test changeStreamPoolCompartment method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ChangeStreamPoolCompartment"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "ChangeStreamPoolCompartment"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "ChangeStreamPoolCompartment");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.changeStreamPoolCompartment(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ChangeStreamPoolCompartmentRequest",
          data.request,
          "ChangeStreamPoolCompartmentResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ChangeStreamPoolCompartmentRequest",
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

  it("Test createConnectHarness method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "CreateConnectHarness"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "CreateConnectHarness"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "CreateConnectHarness");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.createConnectHarness(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "CreateConnectHarnessRequest",
          data.request,
          "CreateConnectHarnessResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "CreateConnectHarnessRequest",
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

  it("Test createStream method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "CreateStream"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("streaming", "StreamAdmin", "CreateStream");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "CreateStream");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.createStream(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "CreateStreamRequest",
          data.request,
          "CreateStreamResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "CreateStreamRequest",
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

  it("Test createStreamPool method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "CreateStreamPool"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "CreateStreamPool"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "CreateStreamPool");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.createStreamPool(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "CreateStreamPoolRequest",
          data.request,
          "CreateStreamPoolResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "CreateStreamPoolRequest",
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

  it("Test deleteConnectHarness method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "DeleteConnectHarness"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "DeleteConnectHarness"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "DeleteConnectHarness");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.deleteConnectHarness(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "DeleteConnectHarnessRequest",
          data.request,
          "DeleteConnectHarnessResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "DeleteConnectHarnessRequest",
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

  it("Test deleteStream method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "DeleteStream"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("streaming", "StreamAdmin", "DeleteStream");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "DeleteStream");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.deleteStream(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "DeleteStreamRequest",
          data.request,
          "DeleteStreamResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "DeleteStreamRequest",
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

  it("Test deleteStreamPool method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "DeleteStreamPool"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "DeleteStreamPool"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "DeleteStreamPool");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.deleteStreamPool(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "DeleteStreamPoolRequest",
          data.request,
          "DeleteStreamPoolResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "DeleteStreamPoolRequest",
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

  it("Test getConnectHarness method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "GetConnectHarness"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "GetConnectHarness"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "GetConnectHarness");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.getConnectHarness(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "GetConnectHarnessRequest",
          data.request,
          "GetConnectHarnessResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "GetConnectHarnessRequest",
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

  it("Test getStream method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "GetStream"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("streaming", "StreamAdmin", "GetStream");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "GetStream");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.getStream(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "GetStreamRequest",
          data.request,
          "GetStreamResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "GetStreamRequest",
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

  it("Test getStreamPool method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "GetStreamPool"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "GetStreamPool"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "GetStreamPool");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.getStreamPool(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "GetStreamPoolRequest",
          data.request,
          "GetStreamPoolResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "GetStreamPoolRequest",
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

  it("Test listConnectHarnesses method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ListConnectHarnesses"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "ListConnectHarnesses"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "ListConnectHarnesses");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.listConnectHarnesses(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ListConnectHarnessesRequest",
          data.request,
          "ListConnectHarnessesResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ListConnectHarnessesRequest",
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

  it("Test listStreamPools method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ListStreamPools"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "ListStreamPools"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "ListStreamPools");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.listStreamPools(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ListStreamPoolsRequest",
          data.request,
          "ListStreamPoolsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ListStreamPoolsRequest",
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

  it("Test listStreams method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "ListStreams"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("streaming", "StreamAdmin", "ListStreams");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "ListStreams");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.listStreams(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "ListStreamsRequest",
          data.request,
          "ListStreamsResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "ListStreamsRequest",
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

  it("Test updateConnectHarness method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "UpdateConnectHarness"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "UpdateConnectHarness"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "UpdateConnectHarness");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.updateConnectHarness(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "UpdateConnectHarnessRequest",
          data.request,
          "UpdateConnectHarnessResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "UpdateConnectHarnessRequest",
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

  it("Test updateStream method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "UpdateStream"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig("streaming", "StreamAdmin", "UpdateStream");

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "UpdateStream");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.updateStream(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "UpdateStreamRequest",
          data.request,
          "UpdateStreamResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "UpdateStreamRequest",
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

  it("Test updateStreamPool method", async function() {
    if (!(await tsclient.isApiEnabled("streaming", "UpdateStreamPool"))) {
      this.skip();
    }

    const config: any = await tsclient.getTestingConfig(
      "streaming",
      "StreamAdmin",
      "UpdateStreamPool"
    );

    const authenticationDetailProvider: common.AuthenticationDetailsProvider = new common.SimpleAuthenticationDetailsProvider(
      config.tenantId,
      config.userId,
      config.fingerprint,
      config.keyFileContent,
      config.passPhrase
    );

    const streamingClient = new streaming.StreamAdminClient({
      authenticationDetailsProvider: authenticationDetailProvider
    });
    if (config.endpoint) {
      streamingClient.endpoint = config.endpoint;
    } else {
      streamingClient.regionId = config.region;
    }
    const requests: any[] = await tsclient.getRequests("streaming", "UpdateStreamPool");

    for (const data of requests) {
      try {
        console.debug("Request to OCI:", data.request);
        const response = await streamingClient.updateStreamPool(data.request);
        console.debug("Response from OCI:", response);

        const message: string = await tsclient.validateResponse(
          data.containerId,
          "streaming",
          "UpdateStreamPoolRequest",
          data.request,
          "UpdateStreamPoolResponse",
          response
        );
        expect(message).to.equal("");
      } catch (err) {
        if (err instanceof common.OciError) {
          const message: string = await tsclient.validateError(
            data.containerId,
            "streaming",
            "UpdateStreamPoolRequest",
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