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
 * Job details that are specific to the operation type.
 *
 */
export interface CreateJobOperationDetails {
  "operation": string;
}

export namespace CreateJobOperationDetails {
  export function getJsonObj(obj: CreateJobOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "IMPORT_TF_STATE":
          return model.CreateImportTfStateJobOperationDetails.getJsonObj(
            <model.CreateImportTfStateJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY":
          return model.CreateApplyJobOperationDetails.getJsonObj(
            <model.CreateApplyJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN":
          return model.CreatePlanJobOperationDetails.getJsonObj(
            <model.CreatePlanJobOperationDetails>(<object>jsonObj),
            true
          );
        case "DESTROY":
          return model.CreateDestroyJobOperationDetails.getJsonObj(
            <model.CreateDestroyJobOperationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.operation);
      }
    }
    return jsonObj;
  }
}
