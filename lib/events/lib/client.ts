/**
 * Events API
 * API for the Events Service. Use this API to manage rules and actions that create automation 
in your tenancy. For more information, see [Overview of Events](/iaas/Content/Events/Concepts/eventsoverview.htm).

 * OpenAPI spec version: 20181201
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
import { EventsWaiter } from "./events-waiter";
import { composeResponse, composeRequest } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum EventsApiKeys {}

export class EventsClient {
  protected static serviceEndpointTemplate = "https://events.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": EventsWaiter;

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
    this._endpoint = this._endpoint + "/20181201";
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      EventsClient.serviceEndpointTemplate,
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
      EventsClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new EventsWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): EventsWaiter {
    this._waiters = new EventsWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): EventsWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves a rule into a different compartment within the same tenancy. For information about moving
   * resources between compartments, see [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
   *
   * @param ChangeRuleCompartmentRequest
   * @return ChangeRuleCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeRuleCompartment(
    changeRuleCompartmentRequest: requests.ChangeRuleCompartmentRequest
  ): Promise<responses.ChangeRuleCompartmentResponse> {
    const pathParams = {
      "{ruleId}": changeRuleCompartmentRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": changeRuleCompartmentRequest.ifMatch,
      "opc-request-id": changeRuleCompartmentRequest.opcRequestId,
      "opc-retry-token": changeRuleCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeRuleCompartmentRequest.changeRuleCompartmentDetails,
        "ChangeRuleCompartmentDetails",
        models.ChangeRuleCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeRuleCompartmentResponse>{},
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new rule.
   *
   * @param CreateRuleRequest
   * @return CreateRuleResponse
   * @throws OciError when an error occurs
   */
  public async createRule(
    createRuleRequest: requests.CreateRuleRequest
  ): Promise<responses.CreateRuleResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-retry-token": createRuleRequest.opcRetryToken,
      "opc-request-id": createRuleRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createRuleRequest.createRuleDetails,
        "CreateRuleDetails",
        models.CreateRuleDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: "model.Rule",
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Deletes a rule.
   * @param DeleteRuleRequest
   * @return DeleteRuleResponse
   * @throws OciError when an error occurs
   */
  public async deleteRule(
    deleteRuleRequest: requests.DeleteRuleRequest
  ): Promise<responses.DeleteRuleResponse> {
    const pathParams = {
      "{ruleId}": deleteRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": deleteRuleRequest.ifMatch,
      "opc-request-id": deleteRuleRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteRuleResponse>{},
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Retrieves a rule.
   * @param GetRuleRequest
   * @return GetRuleResponse
   * @throws OciError when an error occurs
   */
  public async getRule(
    getRuleRequest: requests.GetRuleRequest
  ): Promise<responses.GetRuleResponse> {
    const pathParams = {
      "{ruleId}": getRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getRuleRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: "model.Rule",
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Lists rules for this compartment.
   *
   * @param ListRulesRequest
   * @return ListRulesResponse
   * @throws OciError when an error occurs
   */
  public async listRules(
    listRulesRequest: requests.ListRulesRequest
  ): Promise<responses.ListRulesResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listRulesRequest.compartmentId,
      "limit": listRulesRequest.limit,
      "page": listRulesRequest.page,
      "lifecycleState": listRulesRequest.lifecycleState,
      "displayName": listRulesRequest.displayName,
      "sortBy": listRulesRequest.sortBy,
      "sortOrder": listRulesRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listRulesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListRulesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "RuleSummary[]",
        responseHeaders: [
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.RuleSummary objects
   * contained in responses from the listRules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRules(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<models.RuleSummary> {
    return paginateRecords(request, req => this.listRules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listRules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRulesResponses(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<responses.ListRulesResponse> {
    return paginateResponses(request, req => this.listRules(req));
  }

  /**
   * Updates a rule.
   *
   * @param UpdateRuleRequest
   * @return UpdateRuleResponse
   * @throws OciError when an error occurs
   */
  public async updateRule(
    updateRuleRequest: requests.UpdateRuleRequest
  ): Promise<responses.UpdateRuleResponse> {
    const pathParams = {
      "{ruleId}": updateRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": updateRuleRequest.ifMatch,
      "opc-request-id": updateRuleRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateRuleRequest.updateRuleDetails,
        "UpdateRuleDetails",
        models.UpdateRuleDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);

    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: "model.Rule",
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
      let errBody = null;
      if (response.json) {
        errBody = await response.json();
      }
      throw common.handleErrorResponse(response, errBody);
    }
  }
}
