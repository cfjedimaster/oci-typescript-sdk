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
 * Enable CORS (Cross-Origin-Resource-Sharing) request handling.
 *
 */
export interface CorsPolicy {
  /**
   * The list of allowed origins that the CORS handler will use to respond to CORS requests. The gateway will
   * send the Access-Control-Allow-Origin header with the best origin match for the circumstances. '*' will match
   * any origins, and 'null' will match queries from 'file:' origins. All other origins must be qualified with the
   * scheme, full hostname, and port if necessary.
   *
   */
  "allowedOrigins": Array<string>;
  /**
   * The list of allowed HTTP methods that will be returned for the preflight OPTIONS request in the
   * Access-Control-Allow-Methods header. '*' will allow all methods.
   *
   */
  "allowedMethods"?: Array<string>;
  /**
   * The list of headers that will be allowed from the client via the Access-Control-Allow-Headers header.
   * '*' will allow all headers.
   *
   */
  "allowedHeaders"?: Array<string>;
  /**
   * The list of headers that the client will be allowed to see from the response as indicated by the
   * Access-Control-Expose-Headers header. '*' will expose all headers.
   *
   */
  "exposedHeaders"?: Array<string>;
  /**
   * Whether to send the Access-Control-Allow-Credentials header to allow CORS requests with cookies.
   *
   */
  "isAllowCredentialsEnabled"?: boolean;
  /**
   * The time in seconds for the client to cache preflight responses. This is sent as the Access-Control-Max-Age
   * if greater than 0.
   *
   */
  "maxAgeInSeconds"?: number;
}

export namespace CorsPolicy {
  export function getJsonObj(obj: CorsPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
