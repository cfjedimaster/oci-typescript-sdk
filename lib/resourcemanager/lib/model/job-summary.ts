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
import common = require("oci-common");

/**
 * Returns a listing of all of the specified job's properties and their values.
 */
export interface JobSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the stack that is associated with the specified job.
   */
  "stackId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the stack of the associated job resides.
   */
  "compartmentId"?: string;
  /**
   * The job's display name.
   */
  "displayName"?: string;
  /**
   * The type of job executing
   */
  "operation"?: string;
  "jobOperationDetails"?:
    | model.ImportTfStateJobOperationDetailsSummary
    | model.PlanJobOperationDetailsSummary
    | model.DestroyJobOperationDetailsSummary
    | model.ApplyJobOperationDetailsSummary;
  "applyJobPlanResolution"?: model.ApplyJobPlanResolution;
  /**
   * Deprecated. Use the property `executionPlanJobId` in `jobOperationDetails` instead.
   * The plan job [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) that was used (if this was an apply job and was not auto-approved).
   *
   */
  "resolvedPlanJobId"?: string;
  /**
   * The date and time the job was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the job succeeded or failed.
   */
  "timeFinished"?: Date;
  /**
    * Current state of the specified job.
* For more information about resource states in Resource Manager, see
* [Key Concepts](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts).
* <p>
Allowable values:
* - ACCEPTED
* - IN_PROGRESS
* - FAILED
* - SUCCEEDED
* - CANCELING
* - CANCELED
* 
    */
  "lifecycleState"?: string;
  /**
   * Free-form tags associated with this resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace JobSummary {
  export function getJsonObj(obj: JobSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "jobOperationDetails": obj.jobOperationDetails
          ? model.JobOperationDetailsSummary.getJsonObj(obj.jobOperationDetails)
          : undefined,
        "applyJobPlanResolution": obj.applyJobPlanResolution
          ? model.ApplyJobPlanResolution.getJsonObj(obj.applyJobPlanResolution)
          : undefined
      }
    };

    return jsonObj;
  }
}
