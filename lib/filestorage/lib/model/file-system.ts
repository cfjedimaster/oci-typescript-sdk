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
import common = require("oci-common");

/**
* An NFS file system. To allow access to a file system, add it
* to an export set and associate the export set with a mount
* target. The same file system can be in multiple export sets and
* associated with multiple mount targets.
* <p>
To use any of the API operations, you must be authorized in an
* IAM policy. If you're not authorized, talk to an
* administrator. If you're an administrator who needs to write
* policies to give users access, see [Getting Started with
* Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface FileSystem {
  /**
    * The availability domain the file system is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The number of bytes consumed by the file system, including
   * any snapshots. This number reflects the metered size of the file
   * system and is updated asynchronously with respect to
   * updates to the file system.
   *
   */
  "meteredBytes": number;
  /**
   * The OCID of the compartment that contains the file system.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My file system`
* 
    */
  "displayName": string;
  /**
   * The OCID of the file system.
   */
  "id": string;
  /**
   * The current state of the file system.
   */
  "lifecycleState": FileSystem.LifecycleState;
  /**
    * The date and time the file system was created, expressed in
* [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the KMS key which is the master encryption key for the file system.
   *
   */
  "kmsKeyId"?: string;
}

export namespace FileSystem {
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

  export function getJsonObj(obj: FileSystem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
