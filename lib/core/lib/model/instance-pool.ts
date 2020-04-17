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
 * An instance pool is a group of instances within the same region that are created based off of the same
 * instance configuration. For more information about instance pools and instance configurations, see
 * [Managing Compute Instances](https://docs.cloud.oracle.com/Content/Compute/Concepts/instancemanagement.htm).
 *
 */
export interface InstancePool {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the instance pool.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the instance
   * pool.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The user-friendly name. Does not have to be unique.
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the instance configuration associated
   * with the instance pool.
   *
   */
  "instanceConfigurationId": string;
  /**
   * The current state of the instance pool.
   */
  "lifecycleState": InstancePool.LifecycleState;
  /**
   * The placement configurations for the instance pool.
   */
  "placementConfigurations": Array<model.InstancePoolPlacementConfiguration>;
  /**
   * The number of instances that should be in the instance pool.
   */
  "size": number;
  /**
   * The date and time the instance pool was created, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The load balancers attached to the instance pool.
   *
   */
  "loadBalancers"?: Array<model.InstancePoolLoadBalancerAttachment>;
}

export namespace InstancePool {
  export enum LifecycleState {
    PROVISIONING = "PROVISIONING",
    SCALING = "SCALING",
    STARTING = "STARTING",
    STOPPING = "STOPPING",
    TERMINATING = "TERMINATING",
    STOPPED = "STOPPED",
    TERMINATED = "TERMINATED",
    RUNNING = "RUNNING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstancePool): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigurations": obj.placementConfigurations
          ? obj.placementConfigurations.map(item => {
              return model.InstancePoolPlacementConfiguration.getJsonObj(item);
            })
          : undefined,

        "loadBalancers": obj.loadBalancers
          ? obj.loadBalancers.map(item => {
              return model.InstancePoolLoadBalancerAttachment.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
