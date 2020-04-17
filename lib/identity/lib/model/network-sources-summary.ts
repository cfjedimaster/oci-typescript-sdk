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

/**
 * A network source defines a list of source IPs that are allowed to make auth requests
 * More info needed here
 *
 */
export interface NetworkSourcesSummary {
  /**
   * The OCID of the network source.
   */
  "id"?: string;
  /**
   * The OCID of the tenancy containing the network source.
   */
  "compartmentId"?: string;
  /**
   * The name you assign to the network source during creation. The name must be unique across
   * the tenancy and cannot be changed.
   *
   */
  "name"?: string;
  /**
   * The description you assign to the network source. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
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
    * Date and time the group was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace NetworkSourcesSummary {
  export function getJsonObj(obj: NetworkSourcesSummary): object {
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
