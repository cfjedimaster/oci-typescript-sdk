/**
 * OSMS
 * OS Management as a Service API definition
 * OpenAPI spec version: 20190801
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
 * A software source contains a collection of packages
 */
export interface SoftwareSourceSummary {
  /**
   * OCID for the Software Source
   */
  "id": string;
  /**
   * Information specified by the user about the software source
   */
  "description"?: string;
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * User friendly name for the software source
   */
  "displayName": string;
  /**
   * Type of the Software Source
   */
  "repoType": string;
  /**
   * status of the software source.
   */
  "status"?: SoftwareSourceSummary.Status;
  /**
   * Number of packages
   */
  "packages"?: number;
  /**
   * The current state of the software source.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * OCID for the parent software source, if there is one
   */
  "parentId"?: string;
  /**
   * Display name the parent software source, if there is one
   */
  "parentName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SoftwareSourceSummary {
  export enum Status {
    NORMAL = "NORMAL",
    UNREACHABLE = "UNREACHABLE",
    ERROR = "ERROR",
    WARNING = "WARNING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SoftwareSourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
