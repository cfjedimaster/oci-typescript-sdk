/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
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
 * The update budget details.
 */
export interface UpdateBudgetDetails {
  /**
   * The displayName of the budget.
   */
  "displayName"?: string;
  /**
   * The description of the budget.
   */
  "description"?: string;
  /**
   * The amount of the budget expressed as a whole number in the currency of the customer's rate card.
   *
   */
  "amount"?: number;
  /**
   * The reset period for the budget.
   *
   */
  "resetPeriod"?: model.ResetPeriod;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateBudgetDetails {
  export function getJsonObj(obj: UpdateBudgetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
