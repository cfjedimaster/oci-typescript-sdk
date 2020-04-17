/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * An error encountered while executing an operation that is tracked by a work request.
 */
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occured. Error codes are listed on
   * (https://docs.us-phoenix-1.oraclecloud.com/Content/API/References/apierrors.htm)
   *
   */
  "code": string;
  /**
   * A human-readable error string.
   */
  "message": string;
  /**
   * The date and time the error occurred, in the format defined by RFC3339.
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}