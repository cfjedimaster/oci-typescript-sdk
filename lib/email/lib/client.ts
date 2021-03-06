/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API. If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
import { EmailWaiter } from "./email-waiter";
import { composeResponse, composeRequest } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum EmailApiKeys {}

export class EmailClient {
  protected static serviceEndpointTemplate = "https://email.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": EmailWaiter;

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
    this._endpoint = this._endpoint + "/20170907";
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      EmailClient.serviceEndpointTemplate,
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
      EmailClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new EmailWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): EmailWaiter {
    this._waiters = new EmailWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): EmailWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves a sender into a different compartment. When provided, If-Match is checked against ETag values of the resource.
   * @param ChangeSenderCompartmentRequest
   * @return ChangeSenderCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeSenderCompartment(
    changeSenderCompartmentRequest: requests.ChangeSenderCompartmentRequest
  ): Promise<responses.ChangeSenderCompartmentResponse> {
    const pathParams = {
      "{senderId}": changeSenderCompartmentRequest.senderId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": changeSenderCompartmentRequest.ifMatch,
      "opc-request-id": changeSenderCompartmentRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders/{senderId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeSenderCompartmentRequest.changeSenderCompartmentDetails,
        "ChangeSenderCompartmentDetails",
        models.ChangeSenderCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeSenderCompartmentResponse>{},
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
   * Creates a sender for a tenancy in a given compartment.
   * @param CreateSenderRequest
   * @return CreateSenderResponse
   * @throws OciError when an error occurs
   */
  public async createSender(
    createSenderRequest: requests.CreateSenderRequest
  ): Promise<responses.CreateSenderResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-request-id": createSenderRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createSenderRequest.createSenderDetails,
        "CreateSenderDetails",
        models.CreateSenderDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateSenderResponse>{},
        body: await response.json(),
        bodyKey: "sender",
        bodyModel: "model.Sender",
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
   * Adds recipient email addresses to the suppression list for a tenancy.
   * Addresses added to the suppression list via the API are denoted as
   * \"MANUAL\" in the `reason` field. *Note:* All email addresses added to the
   * suppression list are normalized to include only lowercase letters.
   *
   * @param CreateSuppressionRequest
   * @return CreateSuppressionResponse
   * @throws OciError when an error occurs
   */
  public async createSuppression(
    createSuppressionRequest: requests.CreateSuppressionRequest
  ): Promise<responses.CreateSuppressionResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-request-id": createSuppressionRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/suppressions",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createSuppressionRequest.createSuppressionDetails,
        "CreateSuppressionDetails",
        models.CreateSuppressionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateSuppressionResponse>{},
        body: await response.json(),
        bodyKey: "suppression",
        bodyModel: "model.Suppression",
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
   * Deletes an approved sender for a tenancy in a given compartment for a
   * provided `senderId`.
   *
   * @param DeleteSenderRequest
   * @return DeleteSenderResponse
   * @throws OciError when an error occurs
   */
  public async deleteSender(
    deleteSenderRequest: requests.DeleteSenderRequest
  ): Promise<responses.DeleteSenderResponse> {
    const pathParams = {
      "{senderId}": deleteSenderRequest.senderId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": deleteSenderRequest.ifMatch,
      "opc-request-id": deleteSenderRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders/{senderId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteSenderResponse>{},
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
   * Removes a suppressed recipient email address from the suppression list
   * for a tenancy in a given compartment for a provided `suppressionId`.
   *
   * @param DeleteSuppressionRequest
   * @return DeleteSuppressionResponse
   * @throws OciError when an error occurs
   */
  public async deleteSuppression(
    deleteSuppressionRequest: requests.DeleteSuppressionRequest
  ): Promise<responses.DeleteSuppressionResponse> {
    const pathParams = {
      "{suppressionId}": deleteSuppressionRequest.suppressionId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": deleteSuppressionRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/suppressions/{suppressionId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteSuppressionResponse>{},
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
   * Gets an approved sender for a given `senderId`.
   * @param GetSenderRequest
   * @return GetSenderResponse
   * @throws OciError when an error occurs
   */
  public async getSender(
    getSenderRequest: requests.GetSenderRequest
  ): Promise<responses.GetSenderResponse> {
    const pathParams = {
      "{senderId}": getSenderRequest.senderId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getSenderRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders/{senderId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSenderResponse>{},
        body: await response.json(),
        bodyKey: "sender",
        bodyModel: "model.Sender",
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
   * Gets the details of a suppressed recipient email address for a given
   * `suppressionId`. Each suppression is given a unique OCID.
   *
   * @param GetSuppressionRequest
   * @return GetSuppressionResponse
   * @throws OciError when an error occurs
   */
  public async getSuppression(
    getSuppressionRequest: requests.GetSuppressionRequest
  ): Promise<responses.GetSuppressionResponse> {
    const pathParams = {
      "{suppressionId}": getSuppressionRequest.suppressionId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getSuppressionRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/suppressions/{suppressionId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSuppressionResponse>{},
        body: await response.json(),
        bodyKey: "suppression",
        bodyModel: "model.Suppression",
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
   * Gets a collection of approved sender email addresses and sender IDs.
   *
   * @param ListSendersRequest
   * @return ListSendersResponse
   * @throws OciError when an error occurs
   */
  public async listSenders(
    listSendersRequest: requests.ListSendersRequest
  ): Promise<responses.ListSendersResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listSendersRequest.compartmentId,
      "lifecycleState": listSendersRequest.lifecycleState,
      "emailAddress": listSendersRequest.emailAddress,
      "page": listSendersRequest.page,
      "limit": listSendersRequest.limit,
      "sortBy": listSendersRequest.sortBy,
      "sortOrder": listSendersRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listSendersRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSendersResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "SenderSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
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
   * Creates a new async iterator which will iterate over the models.SenderSummary objects
   * contained in responses from the listSenders operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSenders(
    request: requests.ListSendersRequest
  ): AsyncIterableIterator<models.SenderSummary> {
    return paginateRecords(request, req => this.listSenders(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSenders operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSendersResponses(
    request: requests.ListSendersRequest
  ): AsyncIterableIterator<responses.ListSendersResponse> {
    return paginateResponses(request, req => this.listSenders(req));
  }

  /**
   * Gets a list of suppressed recipient email addresses for a user. The
   * `compartmentId` for suppressions must be a tenancy OCID. The returned list
   * is sorted by creation time in descending order.
   *
   * @param ListSuppressionsRequest
   * @return ListSuppressionsResponse
   * @throws OciError when an error occurs
   */
  public async listSuppressions(
    listSuppressionsRequest: requests.ListSuppressionsRequest
  ): Promise<responses.ListSuppressionsResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listSuppressionsRequest.compartmentId,
      "emailAddress": listSuppressionsRequest.emailAddress,
      "timeCreatedGreaterThanOrEqualTo": listSuppressionsRequest.timeCreatedGreaterThanOrEqualTo,
      "timeCreatedLessThan": listSuppressionsRequest.timeCreatedLessThan,
      "page": listSuppressionsRequest.page,
      "limit": listSuppressionsRequest.limit,
      "sortBy": listSuppressionsRequest.sortBy,
      "sortOrder": listSuppressionsRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listSuppressionsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/suppressions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSuppressionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "SuppressionSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
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
   * Creates a new async iterator which will iterate over the models.SuppressionSummary objects
   * contained in responses from the listSuppressions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSuppressions(
    request: requests.ListSuppressionsRequest
  ): AsyncIterableIterator<models.SuppressionSummary> {
    return paginateRecords(request, req => this.listSuppressions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSuppressions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSuppressionsResponses(
    request: requests.ListSuppressionsRequest
  ): AsyncIterableIterator<responses.ListSuppressionsResponse> {
    return paginateResponses(request, req => this.listSuppressions(req));
  }

  /**
   * Replaces the set of tags for a sender with the tags provided. If either freeform
   * or defined tags are omitted, the tags for that set remain the same. Each set must
   * include the full set of tags for the sender, partial updates are not permitted.
   * For more information about tagging, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   * @param UpdateSenderRequest
   * @return UpdateSenderResponse
   * @throws OciError when an error occurs
   */
  public async updateSender(
    updateSenderRequest: requests.UpdateSenderRequest
  ): Promise<responses.UpdateSenderResponse> {
    const pathParams = {
      "{senderId}": updateSenderRequest.senderId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": updateSenderRequest.ifMatch,
      "opc-request-id": updateSenderRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/senders/{senderId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateSenderRequest.updateSenderDetails,
        "UpdateSenderDetails",
        models.UpdateSenderDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateSenderResponse>{},
        body: await response.json(),
        bodyKey: "sender",
        bodyModel: "model.Sender",
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
