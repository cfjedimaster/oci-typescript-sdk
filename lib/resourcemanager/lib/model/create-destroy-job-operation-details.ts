/**
 * Resource Manager API
 * API for the Resource Manager service. Use this API to install, configure, and manage resources via the "infrastructure-as-code" model. For more information, see [Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).
 * OpenAPI spec version: 20180917
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
 * Job details that are specific to destroy operations.
 *
 */
export interface CreateDestroyJobOperationDetails extends model.CreateJobOperationDetails {
  /**
   * Specifies the source of the execution plan to apply.
   * Currently, only `AUTO_APPROVED` is allowed, which indicates that the job
   * will be run without an execution plan.
   *
   */
  "executionPlanStrategy": string;

  "operation": string;
}

export namespace CreateDestroyJobOperationDetails {
  export function getJsonObj(
    obj: CreateDestroyJobOperationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateJobOperationDetails.getJsonObj(obj) as CreateDestroyJobOperationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "DESTROY";
}
