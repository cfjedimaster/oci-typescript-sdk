/**
 * Service limits APIs
 * APIs that interact with the resource limits of a specific resource type
 * OpenAPI spec version:
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
 * The availability of a given resource limit, based on the usage, tenant service limits and quotas set for the tenancy.
 * Note: We cannot guarantee this data for all the limits. In those cases, these fields will be empty.
 *
 */
export interface ResourceAvailability {
  /**
   * The current usage in the given compartment.
   *
   */
  "used"?: number;
  /**
   * The count of available resources.
   *
   */
  "available"?: number;
}

export namespace ResourceAvailability {
  export function getJsonObj(obj: ResourceAvailability): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
