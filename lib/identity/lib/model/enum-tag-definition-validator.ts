/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
* Used to validate the value set for a defined tag and contains the list of allowable `values`.
* <p>
You must specify at least one valid value in the `values` array. You can't have blank or 
* or empty strings (`\"\"`). Duplicate values are not allowed. 
* 
*/
export interface EnumTagDefinitionValidator extends model.BaseTagDefinitionValidator {
  /**
   * The list of allowed values for a definedTag value.
   *
   */
  "values"?: Array<string>;

  "validatorType": string;
}

export namespace EnumTagDefinitionValidator {
  export function getJsonObj(obj: EnumTagDefinitionValidator, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseTagDefinitionValidator.getJsonObj(obj) as EnumTagDefinitionValidator)),
      ...{}
    };

    return jsonObj;
  }
  export const validatorType = "ENUM";
}