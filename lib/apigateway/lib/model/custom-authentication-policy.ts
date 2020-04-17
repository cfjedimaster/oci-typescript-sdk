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
 * Use a function to validate a custom header or query parameter sent with the request authentication.
 * A valid policy must specify either tokenHeader or tokenQueryParam.
 *
 */
export interface CustomAuthenticationPolicy extends model.AuthenticationPolicy {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Functions function resource.
   *
   */
  "functionId": string;
  /**
   * The name of the header containing the authentication token.
   */
  "tokenHeader"?: string;
  /**
   * The name of the query parameter containing the authentication token.
   */
  "tokenQueryParam"?: string;

  "type": string;
}

export namespace CustomAuthenticationPolicy {
  export function getJsonObj(obj: CustomAuthenticationPolicy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AuthenticationPolicy.getJsonObj(obj) as CustomAuthenticationPolicy)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CUSTOM_AUTHENTICATION";
}
