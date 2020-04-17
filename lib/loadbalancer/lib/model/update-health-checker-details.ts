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
 * The health checker's configuration details.
 */
export interface UpdateHealthCheckerDetails {
  /**
    * The protocol the health check must use; either HTTP or TCP.
* <p>
Example: `HTTP`
* 
    */
  "protocol": string;
  /**
    * The path against which to run the health check.
* <p>
Example: `/healthcheck`
* 
    */
  "urlPath"?: string;
  /**
    * The backend server port against which to run the health check.
* <p>
Example: `8080`
* 
    */
  "port": number;
  /**
    * The status code a healthy backend server should return.
* <p>
Example: `200`
* 
    */
  "returnCode": number;
  /**
    * The number of retries to attempt before a backend server is considered \"unhealthy\". This number also applies
* when recovering a server to the \"healthy\" state.
* <p>
Example: `3`
* 
    */
  "retries": number;
  /**
    * The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply
* returns within this timeout period.
* <p>
Example: `3000`
* 
    */
  "timeoutInMillis": number;
  /**
    * The interval between health checks, in milliseconds.
* <p>
Example: `10000`
* 
    */
  "intervalInMillis": number;
  /**
    * A regular expression for parsing the response body from the backend server.
* <p>
Example: `^((?!false).|\\s)*$`
* 
    */
  "responseBodyRegex": string;
}

export namespace UpdateHealthCheckerDetails {
  export function getJsonObj(obj: UpdateHealthCheckerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
