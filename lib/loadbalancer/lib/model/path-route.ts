/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
* A \"path route rule\" to evaluate an incoming URI path, and then route a matching request to the specified backend set.
* <p>
Path route rules apply only to HTTP and HTTPS requests. They have no effect on TCP requests.
* 
*/
export interface PathRoute {
  /**
    * The path string to match against the incoming URI path.
* <p>
*  Path strings are case-insensitive.
* <p>
*  Asterisk (*) wildcards are not supported.
* <p>
*  Regular expressions are not supported.
* <p>
Example: `/example/video/123`
* 
    */
  "path": string;
  /**
   * The type of matching to apply to incoming URIs.
   */
  "pathMatchType": model.PathMatchType;
  /**
    * The name of the target backend set for requests where the incoming URI matches the specified path.
* <p>
Example: `example_backend_set`
* 
    */
  "backendSetName": string;
}

export namespace PathRoute {
  export function getJsonObj(obj: PathRoute): object {
    const jsonObj = {
      ...obj,
      ...{
        "pathMatchType": obj.pathMatchType
          ? model.PathMatchType.getJsonObj(obj.pathMatchType)
          : undefined
      }
    };

    return jsonObj;
  }
}
