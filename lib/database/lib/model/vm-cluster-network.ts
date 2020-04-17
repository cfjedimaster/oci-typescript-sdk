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
 * The VM cluster network.
 */
export interface VmClusterNetwork {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster network.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated VM Cluster.
   */
  "vmClusterId"?: string;
  /**
   * The user-friendly name for the VM cluster network. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The SCAN details.
   */
  "scans"?: Array<model.ScanDetails>;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dns"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntp"?: Array<string>;
  /**
   * Details of the client and backup networks.
   */
  "vmNetworks"?: Array<model.VmNetworkDetails>;
  /**
   * The current state of the VM cluster network.
   */
  "lifecycleState"?: VmClusterNetwork.LifecycleState;
  /**
   * The date and time when the VM cluster network was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace VmClusterNetwork {
  export enum LifecycleState {
    CREATING = "CREATING",
    REQUIRESVALIDATION = "REQUIRES_VALIDATION",
    VALIDATING = "VALIDATING",
    VALIDATED = "VALIDATED",
    VALIDATIONFAILED = "VALIDATION_FAILED",
    UPDATING = "UPDATING",
    ALLOCATED = "ALLOCATED",
    TERMINATING = "TERMINATING",
    TERMINATED = "TERMINATED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VmClusterNetwork): object {
    const jsonObj = {
      ...obj,
      ...{
        "scans": obj.scans
          ? obj.scans.map(item => {
              return model.ScanDetails.getJsonObj(item);
            })
          : undefined,

        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
