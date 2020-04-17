/**
 * ndcs-control-plane API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * An error encountered while executing a work request.
 */
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occured. Error
   * codes are listed on
   * (https://docs.us-phoenix-1.oraclecloud.com/Content/API/References/apierrors.htm)
   *
   */
  "code": string;
  /**
   * A human readable description of the issue encountered.
   */
  "message": string;
  /**
   * The time the error occured. An RFC3339 formatted datetime string.
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
