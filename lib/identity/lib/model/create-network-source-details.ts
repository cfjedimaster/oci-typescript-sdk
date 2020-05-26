/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
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
import common = require("oci-common");

/**
 * Properties for creating a network source object.
 */
export interface CreateNetworkSourceDetails {
  /**
   * The OCID of the tenancy containing the network source object.
   */
  "compartmentId": string;
  /**
   * The name you assign to the network source during creation. The name must be unique across all groups
   * in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * A list of allowed public IPs and CIDR ranges
   *
   */
  "publicSourceList"?: Array<string>;
  /**
   * A list of allowed VCN ocid/IP range pairs
   *
   */
  "virtualSourceList"?: Array<model.NetworkSourcesVirtualSourceList>;
  /**
   * A list of OCIservices allowed to make on behalf of requests which may have different source ips.
   * At this time only the values of all or none are supported.
   *
   */
  "services"?: Array<string>;
  /**
   * The description you assign to the network source during creation. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
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
}

export namespace CreateNetworkSourceDetails {
  export function getJsonObj(obj: CreateNetworkSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.NetworkSourcesVirtualSourceList.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
