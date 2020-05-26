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

export interface UpdateThresholdPolicyDetails extends model.UpdateAutoScalingPolicyDetails {
  "rules"?: Array<model.UpdateConditionDetails>;

  "policyType": string;
}

export namespace UpdateThresholdPolicyDetails {
  export function getJsonObj(obj: UpdateThresholdPolicyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateAutoScalingPolicyDetails.getJsonObj(obj) as UpdateThresholdPolicyDetails)),
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.UpdateConditionDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "threshold";
}
