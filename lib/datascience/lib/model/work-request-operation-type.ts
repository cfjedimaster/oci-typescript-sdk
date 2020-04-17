/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 **/
export enum WorkRequestOperationType {
  NOTEBOOK_SESSION_CREATE = "NOTEBOOK_SESSION_CREATE",
  NOTEBOOK_SESSION_DELETE = "NOTEBOOK_SESSION_DELETE",
  NOTEBOOK_SESSION_ACTIVATE = "NOTEBOOK_SESSION_ACTIVATE",
  NOTEBOOK_SESSION_DEACTIVATE = "NOTEBOOK_SESSION_DEACTIVATE",
  PROJECT_DELETE = "PROJECT_DELETE",
  WORKREQUEST_CANCEL = "WORKREQUEST_CANCEL",

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
