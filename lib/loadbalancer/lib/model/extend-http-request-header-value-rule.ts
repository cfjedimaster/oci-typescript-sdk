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
* An object that represents the action of modifying a request header value. This rule applies only to HTTP listeners.
* <p>
This rule adds a prefix, a suffix, or both to the header value.
* <p>
**NOTES:**
* <p>
*  This rule requires a value for a prefix, suffix, or both.
* <p>
*  The system does not support this rule for headers with multiple values.
* <p>
*  The system does not distinquish between underscore and dash characters in headers. That is, it treats
*    `example_header_name` and `example-header-name` as identical.  If two such headers appear in a request, the system
*    applies the action to the first header it finds. The affected header cannot be determined in advance. Oracle
*    recommends that you do not rely on underscore or dash characters to uniquely distinguish header names.
* 
*/
export interface ExtendHttpRequestHeaderValueRule extends model.Rule {
  /**
    * A header name that conforms to RFC 7230.
* <p>
Example: `example_header_name`
* 
    */
  "header": string;
  /**
    * A string to prepend to the header value. The resulting header value must conform to RFC 7230.
* <p>
Example: `example_prefix_value`
* 
    */
  "prefix"?: string;
  /**
    * A string to append to the header value. The resulting header value must conform to RFC 7230.
* <p>
Example: `example_suffix_value`
* 
    */
  "suffix"?: string;

  "action": string;
}

export namespace ExtendHttpRequestHeaderValueRule {
  export function getJsonObj(
    obj: ExtendHttpRequestHeaderValueRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Rule.getJsonObj(obj) as ExtendHttpRequestHeaderValueRule)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "EXTEND_HTTP_REQUEST_HEADER_VALUE";
}
