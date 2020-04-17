/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
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
 * The details of a stream pool.
 */
export interface StreamPool {
  /**
   * The OCID of the stream pool.
   */
  "id": string;
  /**
   * Compartment OCID that the pool belongs to.
   */
  "compartmentId": string;
  /**
   * The name of the stream pool.
   */
  "name": string;
  /**
   * The current state of the stream pool.
   */
  "lifecycleState": StreamPool.LifecycleState;
  /**
   * Any additional details about the current state of the stream.
   */
  "lifecycleStateDetails"?: string;
  /**
    * The date and time the stream pool was created, expressed in in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2018-04-20T00:00:07.405Z`
* 
    */
  "timeCreated": Date;
  "kafkaSettings": model.KafkaSettings;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}'
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace StreamPool {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",
    UPDATING = "UPDATING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StreamPool): object {
    const jsonObj = {
      ...obj,
      ...{
        "kafkaSettings": obj.kafkaSettings
          ? model.KafkaSettings.getJsonObj(obj.kafkaSettings)
          : undefined
      }
    };

    return jsonObj;
  }
}
