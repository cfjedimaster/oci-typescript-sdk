/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* A container object for response attributes.
* <p>
Example:
* <p>
  -----
*     {
*       \"status\": \"200\",
*       \"responseTime\": \"2019-09-18T00:10:59.278Z\",
*       \"headers\": {
*         \"ETag\": [
*           \"<unique_ID>\"
*         ],
*         \"Connection\": [
*           \"close\"
*         ],
*         \"Content-Length\": [
*           \"1828\"
*         ],
*         \"opc-request-id\": [
*           \"<unique_ID>\"
*         ],
*         \"Date\": [
*           \"Wed, 18 Sep 2019 00:10:59 GMT\"
*         ],
*         \"Content-Type\": [
*           \"application/json\"
*         ]
*       },
*       \"payload\": {
*         \"resourceName\": \"my_instance\",
*         \"id\": \"ocid1.instance.oc1.phx.<unique_ID>\"
*       },
*       \"message\": null
*     }
*   -----
* 
*/
export interface Response {
  /**
    * The status code of the response.
* <p>
Example: `200`
* 
    */
  "status"?: string;
  /**
    * The time of the response to the audited request, expressed in
* [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: `2019-09-18T00:10:59.278Z`
* 
    */
  "responseTime"?: Date;
  /**
    * The headers of the response.
* <p>
Example:
* <p>
  -----
*     {
*       \"ETag\": [
*         \"<unique_ID>\"
*       ],
*       \"Connection\": [
*         \"close\"
*       ],
*       \"Content-Length\": [
*         \"1828\"
*       ],
*       \"opc-request-id\": [
*         \"<unique_ID>\"
*       ],
*       \"Date\": [
*         \"Wed, 18 Sep 2019 00:10:59 GMT\"
*       ],
*       \"Content-Type\": [
*         \"application/json\"
*       ]
*     }
*   -----
* 
    */
  "headers"?: { [key: string]: Array<string> };
  /**
    * This value is included for backward compatibility with the Audit version 1 schema, where 
* it contained metadata of interest from the response payload.
* <p>
Example: 
* <p>
  -----
*     {
*       \"resourceName\": \"my_instance\",
*       \"id\": \"ocid1.instance.oc1.phx.<unique_ID>\"
*     }
*   -----
* 
    */
  "payload"?: { [key: string]: any };
  /**
   * A friendly description of what happened during the operation. Use this for troubleshooting.
   *
   */
  "message"?: string;
}

export namespace Response {
  export function getJsonObj(obj: Response): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
