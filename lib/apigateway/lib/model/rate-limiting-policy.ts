/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items. 
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm). 

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Limit the number of requests that should be handled for the specified window using a specfic key.
 */
export interface RateLimitingPolicy {
  /**
   * The maximum number of requests per second to allow.
   */
  "rateInRequestsPerSecond": number;
  /**
   * The key used to group requests together.
   */
  "rateKey": RateLimitingPolicy.RateKey;
}

export namespace RateLimitingPolicy {
  export enum RateKey {
    CLIENTIP = "CLIENT_IP",
    TOTAL = "TOTAL",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RateLimitingPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
