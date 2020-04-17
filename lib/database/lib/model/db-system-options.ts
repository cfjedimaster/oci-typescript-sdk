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
 * The DB system options.
 */
export interface DbSystemOptions {
  /**
   * The storage option used in DB system.
   * ASM - Automatic storage management
   * LVM - Logical Volume management
   *
   */
  "storageManagement"?: DbSystemOptions.StorageManagement;
}

export namespace DbSystemOptions {
  export enum StorageManagement {
    ASM = "ASM",
    LVM = "LVM",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbSystemOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
