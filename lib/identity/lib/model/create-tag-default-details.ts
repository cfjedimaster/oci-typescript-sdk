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

export interface CreateTagDefaultDetails {
  /**
   * The OCID of the compartment. The tag default will be applied to all new resources created in this compartment.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the tag definition. The tag default will always assign a default value for this tag definition.
   *
   */
  "tagDefinitionId": string;
  /**
   * The default value for the tag definition. This will be applied to all new resources created in the compartment.
   *
   */
  "value": string;
  /**
    * If you specify that a value is required, a value is set during resource creation (either by 
* the user creating the resource or another tag defualt). If no value is set, resource 
* creation is blocked.
* <p>
* If the `isRequired` flag is set to \"true\", the value is set during resource creation.
* * If the `isRequired` flag is set to \"false\", the value you enter is set during resource creation.
* <p>
Example: `false`
* 
    */
  "isRequired"?: boolean;
}

export namespace CreateTagDefaultDetails {
  export function getJsonObj(obj: CreateTagDefaultDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
