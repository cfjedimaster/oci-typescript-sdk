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
 * The protection rule settings. Protection rules can allow, block, or trigger an alert if a request meets the parameters of an applied rule.
 */
export interface ProtectionRule {
  /**
   * The unique key of the protection rule.
   */
  "key"?: string;
  /**
   * The list of the ModSecurity rule IDs that apply to this protection rule. For more information about ModSecurity's open source WAF rules, see [Mod Security's documentation](https://www.modsecurity.org/CRS/Documentation/index.html).
   */
  "modSecurityRuleIds"?: Array<string>;
  /**
   * The name of the protection rule.
   */
  "name"?: string;
  /**
   * The description of the protection rule.
   */
  "description"?: string;
  /**
   * The action to take when the traffic is detected as malicious. If unspecified, defaults to `OFF`.
   */
  "action"?: ProtectionRule.Action;
  /**
   * The list of labels for the protection rule.
   * <p>
   **Note:** Protection rules with a `ResponseBody` label will have no effect unless `isResponseInspected` is true.
   */
  "labels"?: Array<string>;
  "exclusions"?: Array<model.ProtectionRuleExclusion>;
}

export namespace ProtectionRule {
  export enum Action {
    OFF = "OFF",
    DETECT = "DETECT",
    BLOCK = "BLOCK",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ProtectionRule): object {
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
