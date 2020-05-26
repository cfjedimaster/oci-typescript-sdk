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
import common = require("oci-common");

/**
 * Backup options for the Autonomous Container Database.
 *
 */
export interface AutonomousContainerDatabaseBackupConfig {
  /**
   * Number of days between the current and the earliest point of recoverability covered by automatic backups.
   * This value applies to automatic backups. After a new automatic backup has been created, Oracle removes old automatic backups that are created before the window.
   * When the value is updated, it is applied to all existing automatic backups.
   *
   */
  "recoveryWindowInDays"?: number;
}

export namespace AutonomousContainerDatabaseBackupConfig {
  export function getJsonObj(obj: AutonomousContainerDatabaseBackupConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
