/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Summary information for an export.
 *
 */
export interface ExportSummary {
  /**
   * The OCID of this export's export set.
   */
  "exportSetId": string;
  /**
   * The OCID of this export's file system.
   */
  "fileSystemId": string;
  /**
   * The OCID of this export.
   */
  "id": string;
  /**
   * The current state of this export.
   */
  "lifecycleState": ExportSummary.LifecycleState;
  /**
    * Path used to access the associated file system.
* <p>
Avoid entering confidential information.
* <p>
Example: `/mediafiles`
* 
    */
  "path": string;
  /**
    * The date and time the export was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace ExportSummary {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExportSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}