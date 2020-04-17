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
 * **Deprecated.** See {@link #autonomousDatabaseConsoleTokenDetails(AutonomousDatabaseConsoleTokenDetailsRequest) autonomousDatabaseConsoleTokenDetails} for reference information about the token that allows the OCI Console to access the Autonomous Data Warehouse Service Console.
 *
 */
export interface AutonomousDataWarehouseConsoleTokenDetails {
  /**
   * The token that allows the OCI Console to access the Autonomous Data Warehouse Service Console.
   */
  "token"?: string;
  /**
   * The login URL that allows the OCI Console to access the Autonomous Data Warehouse Service Console.
   */
  "loginUrl"?: string;
}

export namespace AutonomousDataWarehouseConsoleTokenDetails {
  export function getJsonObj(obj: AutonomousDataWarehouseConsoleTokenDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}