/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * The supported Autonomous Database version.
 *
 */
export interface AutonomousDbVersionSummary {
  /**
   * A valid Oracle Database version for Autonomous Database.
   */
  "version": string;
  /**
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* 
    */
  "dbWorkload"?: AutonomousDbVersionSummary.DbWorkload;
  /**
   * True if the database uses [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm).
   *
   */
  "isDedicated"?: boolean;
  /**
   * A URL that points to a detailed description of the Autonomous Database version.
   */
  "details"?: string;
  /**
   * True if this version of the Oracle Database software can be used for Always-Free Autonomous Databases.
   */
  "isFreeTierEnabled"?: boolean;
}

export namespace AutonomousDbVersionSummary {
  export enum DbWorkload {
    OLTP = "OLTP",
    DW = "DW",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDbVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
