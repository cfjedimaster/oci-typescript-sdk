/**
 * Secrets Management API
 * API for managing secrets.
 * OpenAPI spec version: 20180608
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
 * The details of the secret. Secret details do not contain the contents of the secret itself.
 */
export interface Secret {
  /**
   * The OCID of the compartment where you want to create the secret.
   */
  "compartmentId": string;
  /**
   * The version number of the secret version that's currently in use.
   */
  "currentVersionNumber"?: number;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A brief description of the secret. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the secret.
   */
  "id": string;
  /**
   * The OCID of the master encryption key that is used to encrypt the secret.
   */
  "keyId"?: string;
  /**
   * Additional information about the current lifecycle state of the secret.
   */
  "lifecycleDetails"?: string;
  /**
   * The current lifecycle state of the secret.
   */
  "lifecycleState": Secret.LifecycleState;
  /**
   * Additional metadata that you can use to provide context about how to use the secret or during rotation or
   * other administrative tasks. For example, for a secret that you use to connect to a database, the additional
   * metadata might specify the connection endpoint and the connection string. Provide additional metadata as key-value pairs.
   *
   */
  "metadata"?: { [key: string]: any };
  /**
   * The user-friendly name of the secret. Avoid entering confidential information.
   */
  "secretName": string;
  /**
   * A list of rules that control how the secret is used and managed.
   */
  "secretRules"?: Array<model.SecretRule>;
  /**
   * A property indicating when the secret was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * An optional property indicating when the current secret version will expire, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfCurrentVersionExpiry"?: Date;
  /**
   * An optional property indicating when to delete the secret, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The OCID of the vault where the secret exists.
   */
  "vaultId": string;
}

export namespace Secret {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    UPDATING = "UPDATING",
    DELETING = "DELETING",
    DELETED = "DELETED",
    SCHEDULINGDELETION = "SCHEDULING_DELETION",
    PENDINGDELETION = "PENDING_DELETION",
    CANCELLINGDELETION = "CANCELLING_DELETION",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Secret): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretRules": obj.secretRules
          ? obj.secretRules.map(item => {
              return model.SecretRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
