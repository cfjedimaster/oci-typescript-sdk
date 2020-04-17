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

export interface CompleteExternalBackupJobDetails {
  /**
   * If the database being backed up is TDE enabled, this will be the path to the associated TDE wallet in Object Storage.
   */
  "tdeWalletPath"?: string;
  /**
   * The handle of the control file backup.
   */
  "cfBackupHandle"?: string;
  /**
   * The handle of the spfile backup.
   */
  "spfBackupHandle"?: string;
  /**
   * The list of SQL patches that need to be applied to the backup during the restore.
   */
  "sqlPatches"?: Array<string>;
  /**
   * The size of the data in the database, in megabytes.
   */
  "dataSize"?: number;
  /**
   * The size of the redo in the database, in megabytes.
   */
  "redoSize"?: number;
}

export namespace CompleteExternalBackupJobDetails {
  export function getJsonObj(obj: CompleteExternalBackupJobDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
