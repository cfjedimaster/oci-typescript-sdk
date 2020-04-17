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
 * An object returned in the event of a work request error.
 */
export interface WorkRequestError {
  "errorCode": WorkRequestError.ErrorCode;
  /**
   * A human-readable error string.
   */
  "message": string;
}

export namespace WorkRequestError {
  export enum ErrorCode {
    BADINPUT = "BAD_INPUT",
    INTERNALERROR = "INTERNAL_ERROR",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
