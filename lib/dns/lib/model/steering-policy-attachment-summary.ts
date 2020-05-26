/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * An attachment between a steering policy and a domain.
 */
export interface SteeringPolicyAttachmentSummary {
  /**
   * The OCID of the attached steering policy.
   */
  "steeringPolicyId"?: string;
  /**
   * The OCID of the attached zone.
   */
  "zoneId"?: string;
  /**
   * The attached domain within the attached zone.
   */
  "domainName"?: string;
  /**
   * A user-friendly name for the steering policy attachment.
   * Does not have to be unique and can be changed.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The record types covered by the attachment at the domain. The set of record types is
   * determined by aggregating the record types from the answers defined in the steering
   * policy.
   *
   */
  "rtypes"?: Array<string>;
  /**
   * The OCID of the compartment containing the steering policy attachment.
   */
  "compartmentId"?: string;
  /**
   * The canonical absolute URL of the resource.
   */
  "self"?: string;
  /**
   * The OCID of the resource.
   */
  "id"?: string;
  /**
   * The date and time the resource was created, expressed in RFC 3339 timestamp format.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The current state of the resource.
   */
  "lifecycleState"?: SteeringPolicyAttachmentSummary.LifecycleState;
}

export namespace SteeringPolicyAttachmentSummary {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SteeringPolicyAttachmentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
