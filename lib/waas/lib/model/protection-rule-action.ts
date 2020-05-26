/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * A protection rule key and the associated action to apply to that rule.
 */
export interface ProtectionRuleAction {
  /**
   * The unique key of the protection rule.
   */
  "key": string;
  /**
   * The action to apply to the protection rule. If unspecified, defaults to `OFF`.
   */
  "action": ProtectionRuleAction.Action;
  /**
   * The types of requests excluded from the protection rule action. If the requests matches the criteria in the `exclusions`, the protection rule action will not be executed.
   */
  "exclusions"?: Array<model.ProtectionRuleExclusion>;
}

export namespace ProtectionRuleAction {
  export enum Action {
    OFF = "OFF",
    DETECT = "DETECT",
    BLOCK = "BLOCK"
  }

  export function getJsonObj(obj: ProtectionRuleAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "exclusions": obj.exclusions
          ? obj.exclusions.map(item => {
              return model.ProtectionRuleExclusion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
