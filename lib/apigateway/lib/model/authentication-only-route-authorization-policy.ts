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
 * Only authentication is performed for the request and authorization is skipped.
 *
 */
export interface AuthenticationOnlyRouteAuthorizationPolicy extends model.RouteAuthorizationPolicy {
  "type": string;
}

export namespace AuthenticationOnlyRouteAuthorizationPolicy {
  export function getJsonObj(
    obj: AuthenticationOnlyRouteAuthorizationPolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RouteAuthorizationPolicy.getJsonObj(
            obj
          ) as AuthenticationOnlyRouteAuthorizationPolicy)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "AUTHENTICATION_ONLY";
}
