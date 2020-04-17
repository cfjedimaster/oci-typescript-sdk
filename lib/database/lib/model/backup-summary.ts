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
 * A database backup.
 * To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface BackupSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId"?: string;
  /**
   * The user-friendly name for the backup. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The type of backup.
   */
  "type"?: BackupSummary.Type;
  /**
   * The date and time the backup started.
   */
  "timeStarted"?: Date;
  /**
   * The date and time the backup was completed.
   */
  "timeEnded"?: Date;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * The name of the availability domain where the database backup is stored.
   */
  "availabilityDomain"?: string;
  /**
   * The current state of the backup.
   */
  "lifecycleState"?: BackupSummary.LifecycleState;
  /**
   * The Oracle Database edition of the DB system from which the database backup was taken.
   *
   */
  "databaseEdition"?: BackupSummary.DatabaseEdition;
  /**
   * The size of the database in gigabytes at the time the backup was taken.
   *
   */
  "databaseSizeInGBs"?: number;
}

export namespace BackupSummary {
  export enum Type {
    INCREMENTAL = "INCREMENTAL",
    FULL = "FULL",
    VIRTUALFULL = "VIRTUAL_FULL",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",
    RESTORING = "RESTORING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum DatabaseEdition {
    STANDARDEDITION = "STANDARD_EDITION",
    ENTERPRISEEDITION = "ENTERPRISE_EDITION",
    ENTERPRISEEDITIONHIGHPERFORMANCE = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    ENTERPRISEEDITIONEXTREMEPERFORMANCE = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}