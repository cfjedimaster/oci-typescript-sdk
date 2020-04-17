/**
 *
 *
 * OpenAPI spec version: 20190506
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

export interface ChangeOdaInstanceCompartmentResponse {
  /**
   * Unique Oracle-assigned identifier for the asynchronous request. You can use this to query status of
   * the operation.
   *
   */
  "opcWorkRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. The request id consists of 3 components.
   * The first is the request ID provided by the client in the request headers and the remaining 2 are
   * generated for tracing requests.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
}
