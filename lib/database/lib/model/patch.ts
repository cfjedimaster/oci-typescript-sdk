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

export interface Patch {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch.
   */
  "id": string;
  /**
   * The text describing this patch package.
   */
  "description": string;
  /**
   * Action that is currently being performed or was completed last.
   */
  "lastAction"?: Patch.LastAction;
  /**
   * Actions that can possibly be performed using this patch.
   */
  "availableActions"?: Array<Patch.AvailableActions>;
  /**
   * A descriptive text associated with the lifecycleState.
   * Typically can contain additional displayable text.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the patch as a result of lastAction.
   */
  "lifecycleState"?: Patch.LifecycleState;
  /**
   * The date and time that the patch was released.
   */
  "timeReleased": Date;
  /**
   * The version of this patch package.
   */
  "version": string;
}

export namespace Patch {
  export enum LastAction {
    APPLY = "APPLY",
    PRECHECK = "PRECHECK",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum AvailableActions {
    APPLY = "APPLY",
    PRECHECK = "PRECHECK",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    AVAILABLE = "AVAILABLE",
    SUCCESS = "SUCCESS",
    INPROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Patch): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
