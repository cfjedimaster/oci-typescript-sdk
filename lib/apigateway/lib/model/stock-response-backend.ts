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
 * Send the request to a mock backend.
 *
 */
export interface StockResponseBackend extends model.ApiSpecificationRouteBackend {
  /**
   * The body of the stock response from the mock backend.
   */
  "body"?: string;
  /**
   * The status code of the stock response from the mock backend.
   */
  "status": number;
  /**
   * The headers of the stock response from the mock backend.
   */
  "headers"?: Array<model.HeaderFieldSpecification>;

  "type": string;
}

export namespace StockResponseBackend {
  export function getJsonObj(obj: StockResponseBackend, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getJsonObj(obj) as StockResponseBackend)),
      ...{
        "headers": obj.headers
          ? obj.headers.map(item => {
              return model.HeaderFieldSpecification.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "STOCK_RESPONSE_BACKEND";
}
