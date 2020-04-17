/**
 * Application Migration Service API
 * API for the Application Migration service. Use this API to migrate applications from Oracle Cloud Infrastructure - Classic to Oracle Cloud Infrastructure.

 * OpenAPI spec version: 20191031
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
 * Possible operation types.
 **/
export enum OperationTypes {
  CREATE_SOURCE = "CREATE_SOURCE",
  UPDATE_SOURCE = "UPDATE_SOURCE",
  DELETE_SOURCE = "DELETE_SOURCE",
  CREATE_MIGRATION = "CREATE_MIGRATION",
  UPDATE_MIGRATION = "UPDATE_MIGRATION",
  DELETE_MIGRATION = "DELETE_MIGRATION",
  AUTHORIZE_SOURCE = "AUTHORIZE_SOURCE",
  DISCOVER_APPLICATION = "DISCOVER_APPLICATION",
  MIGRATE_APPLICATION = "MIGRATE_APPLICATION",
  CHANGE_SOURCE_COMPARTMENT = "CHANGE_SOURCE_COMPARTMENT",
  CHANGE_MIGRATION_COMPARTMENT = "CHANGE_MIGRATION_COMPARTMENT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UNKNOWN_VALUE = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): object {
    return { obj };
  }
}