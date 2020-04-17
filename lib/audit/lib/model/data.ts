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

/**
* The payload of the event. Information within `data` comes from the resource emitting the event.
* <p>
Example:
* <p>
  -----
*     {
*       \"eventGroupingId\": null,
*       \"eventName\": \"GetInstance\",
*       \"compartmentId\": \"ocid1.tenancy.oc1..<unique_ID>\",
*       \"compartmentName\": \"compartmentA\",
*       \"resourceName\": \"my_instance\",
*       \"resourceId\": \"ocid1.instance.oc1.phx.<unique_ID>\",
*       \"availabilityDomain\": \"<availability_domain>\",
*       \"freeformTags\": null,
*       \"definedTags\": null,
*       \"identity\": {
*         \"principalName\": \"ExampleName\",
*         \"principalId\": \"ocid1.user.oc1..<unique_ID>\",
*         \"authType\": \"natv\",
*         \"callerName\": null,
*         \"callerId\": null,
*         \"tenantId\": \"ocid1.tenancy.oc1..<unique_ID>\",
*         \"ipAddress\": \"172.24.80.88\",
*         \"credentials\": null,
*         \"userAgent\": \"Jersey/2.23 (HttpUrlConnection 1.8.0_212)\",
*         \"consoleSessionId\": null
*       },
*       \"request\": {
*         \"id\": \"<unique_ID>\",
*         \"path\": \"/20160918/instances/ocid1.instance.oc1.phx.<unique_ID>\",
*         \"action\": \"GET\",
*         \"parameters\": {},
*         \"headers\": {
*           \"opc-principal\": [
*             \"{\\\"tenantId\\\":\\\"ocid1.tenancy.oc1..<unique_ID>\\\",\\\"subjectId\\\":\\\"ocid1.user.oc1..<unique_ID>\\\",\\\"claims\\\":[{\\\"key\\\":\\\"pstype\\\",\\\"value\\\":\\\"natv\\\",\\\"issuer\\\":\\\"authService.oracle.com\\\"},{\\\"key\\\":\\\"h_host\\\",\\\"value\\\":\\\"iaas.r2.oracleiaas.com\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_opc-request-id\\\",\\\"value\\\":\\\"<unique_ID>\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"ptype\\\",\\\"value\\\":\\\"user\\\",\\\"issuer\\\":\\\"authService.oracle.com\\\"},{\\\"key\\\":\\\"h_date\\\",\\\"value\\\":\\\"Wed, 18 Sep 2019 00:10:58 UTC\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_accept\\\",\\\"value\\\":\\\"application/json\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"authorization\\\",\\\"value\\\":\\\"Signature headers=\\\\\\\"date (request-target) host accept opc-request-id\\\\\\\",keyId=\\\\\\\"ocid1.tenancy.oc1..<unique_ID>/ocid1.user.oc1..<unique_ID>/8c:b4:5f:18:e7:ec:db:08:b8:fa:d2:2a:7d:11:76:ac\\\\\\\",algorithm=\\\\\\\"rsa-pss-sha256\\\\\\\",signature=\\\\\\\"<unique_ID>\\\\\\\",version=\\\\\\\"1\\\\\\\"\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_(request-target)\\\",\\\"value\\\":\\\"get /20160918/instances/ocid1.instance.oc1.phx.<unique_ID>\\\",\\\"issuer\\\":\\\"h\\\"}]}\"
*           ],
*           \"Accept\": [
*             \"application/json\"
*           ],
*           \"X-Oracle-Auth-Client-CN\": [
*             \"splat-proxy-se-02302.node.ad2.r2\"
*           ],
*           \"X-Forwarded-Host\": [
*             \"compute-api.svc.ad1.r2\"
*           ],
*           \"Connection\": [
*             \"close\"
*           ],
*           \"User-Agent\": [
*             \"Jersey/2.23 (HttpUrlConnection 1.8.0_212)\"
*           ],
*           \"X-Forwarded-For\": [
*             \"172.24.80.88\"
*           ],
*           \"X-Real-IP\": [
*             \"172.24.80.88\"
*           ],
*           \"oci-original-url\": [
*             \"https://iaas.r2.oracleiaas.com/20160918/instances/ocid1.instance.oc1.phx.<unique_ID>\"
*           ],
*           \"opc-request-id\": [
*             \"<unique_ID>\"
*           ],
*           \"Date\": [
*             \"Wed, 18 Sep 2019 00:10:58 UTC\"
*           ]
*         }
*       },
*       \"response\": {
*         \"status\": \"200\",
*         \"responseTime\": \"2019-09-18T00:10:59.278Z\",
*         \"headers\": {
*           \"ETag\": [
*             \"<unique_ID>\"
*           ],
*           \"Connection\": [
*             \"close\"
*           ],
*           \"Content-Length\": [
*             \"1828\"
*           ],
*           \"opc-request-id\": [
*             \"<unique_ID>\"
*           ],
*           \"Date\": [
*             \"Wed, 18 Sep 2019 00:10:59 GMT\"
*           ],
*           \"Content-Type\": [
*             \"application/json\"
*           ]
*         },
*         \"payload\": {
*           \"resourceName\": \"my_instance\",
*           \"id\": \"ocid1.instance.oc1.phx.<unique_ID>\"
*         },
*         \"message\": null
*       },
*       \"stateChange\": {
*         \"previous\": null,
*         \"current\": null
*       },
*       \"additionalDetails\": {
*         \"imageId\": \"ocid1.image.oc1.phx.<unique_ID>\",
*         \"shape\": \"VM.Standard1.1\",
*         \"type\": \"CustomerVmi\"
*       }
*     }
*   -----
* 
*/
export interface Data {
  /**
   * This value links multiple audit events that are part of the same API operation. For example,
   * a long running API operations that emit an event at the start and the end of an operation
   * would use the same value in this field for both events.
   *
   */
  "eventGroupingId"?: string;
  /**
    * Name of the API operation that generated this event.
* <p>
Example: `GetInstance`
* 
    */
  "eventName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment of the resource
   * emitting the event.
   *
   */
  "compartmentId"?: string;
  /**
    * The name of the compartment. This value is the friendly name associated with compartmentId.
* This value can change, but the service logs the value that appeared at the time of the audit
* event.
* <p>
Example: `CompartmentA`
* 
    */
  "compartmentName"?: string;
  /**
   * The name of the resource emitting the event.
   *
   */
  "resourceName"?: string;
  /**
   * An [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) or some other ID for the resource
   * emitting the event.
   *
   */
  "resourceId"?: string;
  /**
   * The availability domain where the resource resides.
   *
   */
  "availabilityDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, 
* type, or namespace. Exists for cross-compatibility only. For more information, 
* see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more
* information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "identity"?: model.Identity;
  "request"?: model.Request;
  "response"?: model.Response;
  "stateChange"?: model.StateChange;
  /**
    * A container object for attribues unique to the resource emitting the event.
* <p>
Example:
* <p>
  -----
*     {
*       \"imageId\": \"ocid1.image.oc1.phx.<unique_ID>\",
*       \"shape\": \"VM.Standard1.1\",
*       \"type\": \"CustomerVmi\"
*     }
*   -----
* 
    */
  "additionalDetails"?: { [key: string]: any };
}

export namespace Data {
  export function getJsonObj(obj: Data): object {
    const jsonObj = {
      ...obj,
      ...{
        "identity": obj.identity ? model.Identity.getJsonObj(obj.identity) : undefined,
        "request": obj.request ? model.Request.getJsonObj(obj.request) : undefined,
        "response": obj.response ? model.Response.getJsonObj(obj.response) : undefined,
        "stateChange": obj.stateChange ? model.StateChange.getJsonObj(obj.stateChange) : undefined
      }
    };

    return jsonObj;
  }
}
