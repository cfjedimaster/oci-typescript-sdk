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
 * Deprecated. Use the property `executionPlanStrategy` in `jobOperationDetails` instead.
 *
 */
export interface ApplyJobPlanResolution {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) that specifies the most recently executed plan job.
   *
   */
  "planJobId"?: string;
  /**
   * Specifies whether to use the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the most recently run plan job.
   * `True` if using the latest job [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm). Must be a plan job that completed successfully.
   *
   */
  "isUseLatestJobId"?: boolean;
  /**
   * Specifies whether to use the configuration directly, without reference to a Plan job.
   * `True` if using the configuration directly. Note that it is not necessary
   * for a Plan job to have run successfully.
   *
   */
  "isAutoApproved"?: boolean;
}

export namespace ApplyJobPlanResolution {
  export function getJsonObj(obj: ApplyJobPlanResolution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
