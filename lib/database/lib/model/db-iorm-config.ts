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
 * IORM Config setting response for this database
 *
 */
export interface DbIormConfig {
  /**
   * Database Name. For default DbPlan, the dbName will always be `default`
   *
   */
  "dbName"?: string;
  /**
   * Relative priority of a database
   *
   */
  "share"?: number;
  /**
   * Flash Cache limit, internally configured based on shares
   *
   */
  "flashCacheLimit"?: string;
}

export namespace DbIormConfig {
  export function getJsonObj(obj: DbIormConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
