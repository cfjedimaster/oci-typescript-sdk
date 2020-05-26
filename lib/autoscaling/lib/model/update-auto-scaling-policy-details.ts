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

export interface UpdateAutoScalingPolicyDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The capacity requirements of the autoscaling policy.
   */
  "capacity"?: model.Capacity;

  "policyType": string;
}

export namespace UpdateAutoScalingPolicyDetails {
  export function getJsonObj(obj: UpdateAutoScalingPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getJsonObj(obj.capacity) : undefined
      }
    };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "threshold":
          return model.UpdateThresholdPolicyDetails.getJsonObj(
            <model.UpdateThresholdPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
}
