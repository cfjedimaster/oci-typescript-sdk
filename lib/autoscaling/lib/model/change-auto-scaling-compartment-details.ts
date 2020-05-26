/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. 
For information about the Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

 * OpenAPI spec version: 20181001
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
 * The configuration details for the move operation.
 */
export interface ChangeAutoScalingCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to move the autoscaling configuration to.
   *
   */
  "compartmentId": string;
}

export namespace ChangeAutoScalingCompartmentDetails {
  export function getJsonObj(obj: ChangeAutoScalingCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
