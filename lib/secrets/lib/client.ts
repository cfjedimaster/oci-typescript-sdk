/**
 * Secrets
 * API for retrieving secrets from vaults.
 * OpenAPI spec version: 20190301
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
import { composeResponse, composeRequest } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SecretsApiKeys {}

export class SecretsClient {
  protected static serviceEndpointTemplate =
    "https://secrets.vaults.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};

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
    this._endpoint = this._endpoint + "/20190301";
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      SecretsClient.serviceEndpointTemplate,
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
      SecretsClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Gets a secret bundle that matches either the specified `stage`, `label`, or `versionNumber` parameter.
   * If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` will be returned.
   *
   * @param GetSecretBundleRequest
   * @return GetSecretBundleResponse
   * @throws OciError when an error occurs
   */
  public async getSecretBundle(
    getSecretBundleRequest: requests.GetSecretBundleRequest
  ): Promise<responses.GetSecretBundleResponse> {
    const pathParams = {
      "{secretId}": getSecretBundleRequest.secretId
    };

    const queryParams = {
      "versionNumber": getSecretBundleRequest.versionNumber,
      "secretVersionName": getSecretBundleRequest.secretVersionName,
      "stage": getSecretBundleRequest.stage
    };

    let headerParams = {
      "opc-request-id": getSecretBundleRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secretbundles/{secretId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSecretBundleResponse>{},
        body: await response.json(),
        bodyKey: "secretBundle",
        bodyModel: "model.SecretBundle",
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
   * Lists all secret bundle versions for the specified secret.
   * @param ListSecretBundleVersionsRequest
   * @return ListSecretBundleVersionsResponse
   * @throws OciError when an error occurs
   */
  public async listSecretBundleVersions(
    listSecretBundleVersionsRequest: requests.ListSecretBundleVersionsRequest
  ): Promise<responses.ListSecretBundleVersionsResponse> {
    const pathParams = {
      "{secretId}": listSecretBundleVersionsRequest.secretId
    };

    const queryParams = {
      "limit": listSecretBundleVersionsRequest.limit,
      "page": listSecretBundleVersionsRequest.page,
      "sortBy": listSecretBundleVersionsRequest.sortBy,
      "sortOrder": listSecretBundleVersionsRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listSecretBundleVersionsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/secretbundles/{secretId}/versions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSecretBundleVersionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "SecretBundleVersionSummary[]",
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
   * Creates a new async iterator which will iterate over the models.SecretBundleVersionSummary objects
   * contained in responses from the listSecretBundleVersions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretBundleVersions(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<models.SecretBundleVersionSummary> {
    return paginateRecords(request, req => this.listSecretBundleVersions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSecretBundleVersions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSecretBundleVersionsResponses(
    request: requests.ListSecretBundleVersionsRequest
  ): AsyncIterableIterator<responses.ListSecretBundleVersionsResponse> {
    return paginateResponses(request, req => this.listSecretBundleVersions(req));
  }
}
