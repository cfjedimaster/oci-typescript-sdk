/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * The types of work request operations.
 *
 **/
export enum WorkRequestOperationType {
  CREATE_ANALYTICS_INSTANCE = "CREATE_ANALYTICS_INSTANCE",
  DELETE_ANALYTICS_INSTANCE = "DELETE_ANALYTICS_INSTANCE",
  START_ANALYTICS_INSTANCE = "START_ANALYTICS_INSTANCE",
  STOP_ANALYTICS_INSTANCE = "STOP_ANALYTICS_INSTANCE",
  SCALE_ANALYTICS_INSTANCE = "SCALE_ANALYTICS_INSTANCE",
  CHANGE_ANALYTICS_INSTANCE_COMPARTMENT = "CHANGE_ANALYTICS_INSTANCE_COMPARTMENT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UNKNOWN_VALUE = "UNKNOWN_VALUE"
}

export namespace WorkRequestOperationType {
  export function getJsonObj(obj: WorkRequestOperationType): object {
    return { obj };
  }
}