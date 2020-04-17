/**
 * OSMS
 * OS Management as a Service API definition
 * OpenAPI spec version: 20190801
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
 * The purpose of an update.
 **/
export enum PackageUpdateTypes {
  SECURITY = "SECURITY",
  BUGFIX = "BUGFIX",
  ENHANCEMENT = "ENHANCEMENT",
  ALL = "ALL",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UNKNOWN_VALUE = "UNKNOWN_VALUE"
}

export namespace PackageUpdateTypes {
  export function getJsonObj(obj: PackageUpdateTypes): object {
    return { obj };
  }
}
