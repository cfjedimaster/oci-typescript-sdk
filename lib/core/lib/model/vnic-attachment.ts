/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * Represents an attachment between a VNIC and an instance. For more information, see
 * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/Content/Network/Tasks/managingVNICs.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface VnicAttachment {
  /**
    * The availability domain of the instance.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment the VNIC attachment is in, which is the same
   * compartment the instance is in.
   *
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the VNIC attachment.
   */
  "id": string;
  /**
   * The OCID of the instance.
   */
  "instanceId": string;
  /**
   * The current state of the VNIC attachment.
   */
  "lifecycleState": VnicAttachment.LifecycleState;
  /**
   * Which physical network interface card (NIC) the VNIC uses.
   * Certain bare metal instance shapes have two active physical NICs (0 and 1). If
   * you add a secondary VNIC to one of these instances, you can specify which NIC
   * the VNIC will use. For more information, see
   * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/Content/Network/Tasks/managingVNICs.htm).
   *
   */
  "nicIndex"?: number;
  /**
   * The OCID of the subnet to create the VNIC in.
   */
  "subnetId": string;
  /**
    * The date and time the VNIC attachment was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The Oracle-assigned VLAN tag of the attached VNIC. Available after the
* attachment process is complete.
* <p>
Example: `0`
* 
    */
  "vlanTag"?: number;
  /**
   * The OCID of the VNIC. Available after the attachment process is complete.
   */
  "vnicId"?: string;
}

export namespace VnicAttachment {
  export enum LifecycleState {
    ATTACHING = "ATTACHING",
    ATTACHED = "ATTACHED",
    DETACHING = "DETACHING",
    DETACHED = "DETACHED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VnicAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
