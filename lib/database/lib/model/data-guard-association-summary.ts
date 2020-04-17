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
* The properties that define a Data Guard association.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an
* administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about endpoints and signing API requests, see
* [About the API](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm). For information about available SDKs and tools, see
* [SDKS and Other Tools](https://docs.cloud.oracle.com/Content/API/Concepts/sdks.htm).
* 
*/
export interface DataGuardAssociationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Data Guard association.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the reporting database.
   */
  "databaseId": string;
  /**
   * The role of the reporting database in this Data Guard association.
   */
  "role": DataGuardAssociationSummary.Role;
  /**
   * The current state of the Data Guard association.
   */
  "lifecycleState": DataGuardAssociationSummary.LifecycleState;
  /**
   * Additional information about the current lifecycleState, if available.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system containing the associated
   * peer database.
   *
   */
  "peerDbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home containing the associated peer database.
   *
   */
  "peerDbHomeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated peer database.
   */
  "peerDatabaseId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the peer database's Data Guard association.
   */
  "peerDataGuardAssociationId"?: string;
  /**
   * The role of the peer database in this Data Guard association.
   */
  "peerRole": DataGuardAssociationSummary.PeerRole;
  /**
    * The lag time between updates to the primary database and application of the redo data on the standby database,
* as computed by the reporting database.
* <p>
Example: `9 seconds`
* 
    */
  "applyLag"?: string;
  /**
    * The rate at which redo logs are synced between the associated databases.
* <p>
Example: `180 Mb per second`
* 
    */
  "applyRate"?: string;
  /**
   * The protection mode of this Data Guard association. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   *
   */
  "protectionMode": DataGuardAssociationSummary.ProtectionMode;
  /**
   * The redo transport type used by this Data Guard association.  For more information, see
   * [Redo Transport Services](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400)
   * in the Oracle Data Guard documentation.
   *
   */
  "transportType"?: DataGuardAssociationSummary.TransportType;
  /**
   * The date and time the Data Guard association was created.
   */
  "timeCreated"?: Date;
}

export namespace DataGuardAssociationSummary {
  export enum Role {
    PRIMARY = "PRIMARY",
    STANDBY = "STANDBY",
    DISABLEDSTANDBY = "DISABLED_STANDBY",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    PROVISIONING = "PROVISIONING",
    AVAILABLE = "AVAILABLE",
    UPDATING = "UPDATING",
    TERMINATING = "TERMINATING",
    TERMINATED = "TERMINATED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum PeerRole {
    PRIMARY = "PRIMARY",
    STANDBY = "STANDBY",
    DISABLEDSTANDBY = "DISABLED_STANDBY",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum ProtectionMode {
    AVAILABILITY = "MAXIMUM_AVAILABILITY",
    PERFORMANCE = "MAXIMUM_PERFORMANCE",
    PROTECTION = "MAXIMUM_PROTECTION",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum TransportType {
    SYNC = "SYNC",
    ASYNC = "ASYNC",
    FASTSYNC = "FASTSYNC",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataGuardAssociationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
