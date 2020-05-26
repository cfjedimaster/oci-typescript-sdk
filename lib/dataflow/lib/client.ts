/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { DataFlowWaiter } from "./dataflow-waiter";
import { composeResponse, composeRequest } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DataFlowApiKeys {}

export class DataFlowClient {
  protected static serviceEndpointTemplate = "https://dataflow.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": DataFlowWaiter;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20200129";
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      DataFlowClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      DataFlowClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new DataFlowWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): DataFlowWaiter {
    this._waiters = new DataFlowWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): DataFlowWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves an application into a different compartment. When provided, If-Match is checked against ETag values of the resource.
   * Associated resources, like runs, will not be automatically moved.
   *
   * @param ChangeApplicationCompartmentRequest
   * @return ChangeApplicationCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeApplicationCompartment(
    changeApplicationCompartmentRequest: requests.ChangeApplicationCompartmentRequest
  ): Promise<responses.ChangeApplicationCompartmentResponse> {
    const pathParams = {
      "{applicationId}": changeApplicationCompartmentRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": changeApplicationCompartmentRequest.opcRequestId,
      "if-match": changeApplicationCompartmentRequest.ifMatch,
      "opc-retry-token": changeApplicationCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeApplicationCompartmentRequest.changeApplicationCompartmentDetails,
        "ChangeApplicationCompartmentDetails",
        models.ChangeApplicationCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeApplicationCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Moves a run into a different compartment. When provided, If-Match is checked against ETag
   * values of the resource. Associated resources, like historical metrics, will not be
   * automatically moved. The run must be in a terminal state (CANCELED, FAILED, SUCCEEDED) in
   * order for it to be moved to a different compartment
   *
   * @param ChangeRunCompartmentRequest
   * @return ChangeRunCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeRunCompartment(
    changeRunCompartmentRequest: requests.ChangeRunCompartmentRequest
  ): Promise<responses.ChangeRunCompartmentResponse> {
    const pathParams = {
      "{runId}": changeRunCompartmentRequest.runId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": changeRunCompartmentRequest.opcRequestId,
      "if-match": changeRunCompartmentRequest.ifMatch,
      "opc-retry-token": changeRunCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeRunCompartmentRequest.changeRunCompartmentDetails,
        "ChangeRunCompartmentDetails",
        models.ChangeRunCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeRunCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates an application.
   *
   * @param CreateApplicationRequest
   * @return CreateApplicationResponse
   * @throws OciError when an error occurs
   */
  public async createApplication(
    createApplicationRequest: requests.CreateApplicationRequest
  ): Promise<responses.CreateApplicationResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-retry-token": createApplicationRequest.opcRetryToken,
      "opc-request-id": createApplicationRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createApplicationRequest.createApplicationDetails,
        "CreateApplicationDetails",
        models.CreateApplicationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a run for an application.
   *
   * @param CreateRunRequest
   * @return CreateRunResponse
   * @throws OciError when an error occurs
   */
  public async createRun(
    createRunRequest: requests.CreateRunRequest
  ): Promise<responses.CreateRunResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-retry-token": createRunRequest.opcRetryToken,
      "opc-request-id": createRunRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createRunRequest.createRunDetails,
        "CreateRunDetails",
        models.CreateRunDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateRunResponse>{},
        body: await response.json(),
        bodyKey: "run",
        bodyModel: "model.Run",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Deletes an application using an `applicationId`.
   *
   * @param DeleteApplicationRequest
   * @return DeleteApplicationResponse
   * @throws OciError when an error occurs
   */
  public async deleteApplication(
    deleteApplicationRequest: requests.DeleteApplicationRequest
  ): Promise<responses.DeleteApplicationResponse> {
    const pathParams = {
      "{applicationId}": deleteApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": deleteApplicationRequest.opcRequestId,
      "if-match": deleteApplicationRequest.ifMatch
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteApplicationResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Cancels the specified run if it has not already completed or was previously cancelled.
   * If a run is in progress, the executing job will be killed.
   *
   * @param DeleteRunRequest
   * @return DeleteRunResponse
   * @throws OciError when an error occurs
   */
  public async deleteRun(
    deleteRunRequest: requests.DeleteRunRequest
  ): Promise<responses.DeleteRunResponse> {
    const pathParams = {
      "{runId}": deleteRunRequest.runId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": deleteRunRequest.opcRequestId,
      "if-match": deleteRunRequest.ifMatch
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteRunResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Retrieves an application using an `applicationId`.
   *
   * @param GetApplicationRequest
   * @return GetApplicationResponse
   * @throws OciError when an error occurs
   */
  public async getApplication(
    getApplicationRequest: requests.GetApplicationRequest
  ): Promise<responses.GetApplicationResponse> {
    const pathParams = {
      "{applicationId}": getApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getApplicationRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Retrieves the run for the specified `runId`.
   *
   * @param GetRunRequest
   * @return GetRunResponse
   * @throws OciError when an error occurs
   */
  public async getRun(getRunRequest: requests.GetRunRequest): Promise<responses.GetRunResponse> {
    const pathParams = {
      "{runId}": getRunRequest.runId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getRunRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetRunResponse>{},
        body: await response.json(),
        bodyKey: "run",
        bodyModel: "model.Run",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Retrieves the content of an run log.
   *
   * @param GetRunLogRequest
   * @return GetRunLogResponse
   * @throws OciError when an error occurs
   */
  public async getRunLog(
    getRunLogRequest: requests.GetRunLogRequest
  ): Promise<responses.GetRunLogResponse> {
    const pathParams = {
      "{runId}": getRunLogRequest.runId,
      "{name}": getRunLogRequest.name
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getRunLogRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}/logs/{name}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetRunLogResponse>{},

        body: response.body!,
        bodyKey: "value",
        bodyModel: "string",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("content-length"),
            key: "contentLength",
            dataType: "number"
          },
          {
            value: response.headers.get("content-type"),
            key: "contentType",
            dataType: "string"
          },
          {
            value: response.headers.get("content-encoding"),
            key: "contentEncoding",
            dataType: "string"
          }
        ]
      });
      const opcMeta = {};
      const pattern: string = "opc-meta-";
      response.headers.forEach((k, v) => {
        if (k.startsWith(pattern)) {
          Object.assign(opcMeta, { k: v });
        }
      });
      sdkResponse.opcMeta = opcMeta;

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Lists all applications in the specified compartment.
   *
   * @param ListApplicationsRequest
   * @return ListApplicationsResponse
   * @throws OciError when an error occurs
   */
  public async listApplications(
    listApplicationsRequest: requests.ListApplicationsRequest
  ): Promise<responses.ListApplicationsResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listApplicationsRequest.compartmentId,
      "limit": listApplicationsRequest.limit,
      "page": listApplicationsRequest.page,
      "sortBy": listApplicationsRequest.sortBy,
      "sortOrder": listApplicationsRequest.sortOrder,
      "displayName": listApplicationsRequest.displayName,
      "ownerPrincipalId": listApplicationsRequest.ownerPrincipalId,
      "displayNameStartsWith": listApplicationsRequest.displayNameStartsWith
    };

    let headerParams = {
      "opc-request-id": listApplicationsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListApplicationsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "ApplicationSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.ApplicationSummary objects
   * contained in responses from the listApplications operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllApplications(
    request: requests.ListApplicationsRequest
  ): AsyncIterableIterator<models.ApplicationSummary> {
    return paginateRecords(request, req => this.listApplications(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listApplications operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllApplicationsResponses(
    request: requests.ListApplicationsRequest
  ): AsyncIterableIterator<responses.ListApplicationsResponse> {
    return paginateResponses(request, req => this.listApplications(req));
  }

  /**
   * Retrieves summaries of the run's logs.
   *
   * @param ListRunLogsRequest
   * @return ListRunLogsResponse
   * @throws OciError when an error occurs
   */
  public async listRunLogs(
    listRunLogsRequest: requests.ListRunLogsRequest
  ): Promise<responses.ListRunLogsResponse> {
    const pathParams = {
      "{runId}": listRunLogsRequest.runId
    };

    const queryParams = {
      "limit": listRunLogsRequest.limit,
      "page": listRunLogsRequest.page
    };

    let headerParams = {
      "opc-request-id": listRunLogsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListRunLogsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "RunLogSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.RunLogSummary objects
   * contained in responses from the listRunLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRunLogs(
    request: requests.ListRunLogsRequest
  ): AsyncIterableIterator<models.RunLogSummary> {
    return paginateRecords(request, req => this.listRunLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listRunLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRunLogsResponses(
    request: requests.ListRunLogsRequest
  ): AsyncIterableIterator<responses.ListRunLogsResponse> {
    return paginateResponses(request, req => this.listRunLogs(req));
  }

  /**
   * Lists all runs of an application in the specified compartment.
   *
   * @param ListRunsRequest
   * @return ListRunsResponse
   * @throws OciError when an error occurs
   */
  public async listRuns(
    listRunsRequest: requests.ListRunsRequest
  ): Promise<responses.ListRunsResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listRunsRequest.compartmentId,
      "applicationId": listRunsRequest.applicationId,
      "ownerPrincipalId": listRunsRequest.ownerPrincipalId,
      "displayNameStartsWith": listRunsRequest.displayNameStartsWith,
      "lifecycleState": listRunsRequest.lifecycleState,
      "timeCreatedGreaterThan": listRunsRequest.timeCreatedGreaterThan,
      "limit": listRunsRequest.limit,
      "page": listRunsRequest.page,
      "sortBy": listRunsRequest.sortBy,
      "sortOrder": listRunsRequest.sortOrder,
      "displayName": listRunsRequest.displayName
    };

    let headerParams = {
      "opc-request-id": listRunsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListRunsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "RunSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.RunSummary objects
   * contained in responses from the listRuns operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRuns(request: requests.ListRunsRequest): AsyncIterableIterator<models.RunSummary> {
    return paginateRecords(request, req => this.listRuns(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listRuns operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRunsResponses(
    request: requests.ListRunsRequest
  ): AsyncIterableIterator<responses.ListRunsResponse> {
    return paginateResponses(request, req => this.listRuns(req));
  }

  /**
   * Updates an application using an `applicationId`.
   *
   * @param UpdateApplicationRequest
   * @return UpdateApplicationResponse
   * @throws OciError when an error occurs
   */
  public async updateApplication(
    updateApplicationRequest: requests.UpdateApplicationRequest
  ): Promise<responses.UpdateApplicationResponse> {
    const pathParams = {
      "{applicationId}": updateApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": updateApplicationRequest.opcRequestId,
      "if-match": updateApplicationRequest.ifMatch
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateApplicationRequest.updateApplicationDetails,
        "UpdateApplicationDetails",
        models.UpdateApplicationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Updates a run using a `runId`.
   *
   * @param UpdateRunRequest
   * @return UpdateRunResponse
   * @throws OciError when an error occurs
   */
  public async updateRun(
    updateRunRequest: requests.UpdateRunRequest
  ): Promise<responses.UpdateRunResponse> {
    const pathParams = {
      "{runId}": updateRunRequest.runId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": updateRunRequest.opcRequestId,
      "if-match": updateRunRequest.ifMatch
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/runs/{runId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateRunRequest.updateRunDetails,
        "UpdateRunDetails",
        models.UpdateRunDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateRunResponse>{},
        body: await response.json(),
        bodyKey: "run",
        bodyModel: "model.Run",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }
}
