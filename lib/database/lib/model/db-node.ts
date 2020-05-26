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

export interface DbNode {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database node.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VNIC.
   */
  "vnicId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup VNIC.
   */
  "backupVnicId"?: string;
  /**
   * The current state of the database node.
   */
  "lifecycleState": DbNode.LifecycleState;
  /**
   * The host name for the database node.
   */
  "hostname"?: string;
  /**
   * The name of the Fault Domain the instance is contained in.
   */
  "faultDomain"?: string;
  /**
   * The date and time that the database node was created.
   */
  "timeCreated": Date;
  /**
   * The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems.
   *
   */
  "softwareStorageSizeInGB"?: number;
  /**
   * The type of maintenance of dbNode.
   */
  "maintenanceType"?: DbNode.MaintenanceType;
  /**
   * Start date and time of maintenance window.
   */
  "timeMaintenanceWindowStart"?: Date;
  /**
   * End date and time of maintenance window.
   */
  "timeMaintenanceWindowEnd"?: Date;
  /**
   * Additional information like a message to customer about the maintenance.
   */
  "additionalDetails"?: string;
}

export namespace DbNode {
  export enum LifecycleState {
    PROVISIONING = "PROVISIONING",
    AVAILABLE = "AVAILABLE",
    UPDATING = "UPDATING",
    STOPPING = "STOPPING",
    STOPPED = "STOPPED",
    STARTING = "STARTING",
    TERMINATING = "TERMINATING",
    TERMINATED = "TERMINATED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum MaintenanceType {
    MIGRATION = "VMDB_REBOOT_MIGRATION",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbNode): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
