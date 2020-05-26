/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * Parameters needed to create a new model. Models are mathematical representations of the relationships between data. Models are represented by their associated metadata and artifact.
 */
export interface CreateModelDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the compartment to create the model in.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the project to associate with the model.
   */
  "projectId": string;
  /**
   * A user-friendly display name for the resource. Does not have to be unique, and can be modified. Avoid entering confidential information.
   * Example: `My Model`
   *
   */
  "displayName"?: string;
  /**
   * A short blurb describing the model.
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateModelDetails {
  export function getJsonObj(obj: CreateModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
