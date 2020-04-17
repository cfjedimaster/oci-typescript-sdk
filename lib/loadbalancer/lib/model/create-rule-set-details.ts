/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * A named set of rules to add to the load balancer.
 */
export interface CreateRuleSetDetails {
  /**
    * The name for this set of rules. It must be unique and it cannot be changed. Avoid entering
* confidential information.
* <p>
Example: `example_rule_set`
* 
    */
  "name": string;
  /**
   * An array of rules that compose the rule set.
   */
  "items": Array<model.Rule>;
}

export namespace CreateRuleSetDetails {
  export function getJsonObj(obj: CreateRuleSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.Rule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}