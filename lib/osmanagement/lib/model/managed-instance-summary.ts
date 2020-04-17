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
 * An OCI Compute instance that is being managed
 */
export interface ManagedInstanceSummary {
  /**
   * user settable name
   */
  "displayName": string;
  /**
   * OCID for the managed instance
   */
  "id": string;
  /**
   * Time at which the instance last checked in
   */
  "lastCheckin"?: string;
  /**
   * Time at which the instance last booted
   */
  "lastBoot"?: string;
  /**
   * Number of updates available to be installed
   */
  "updatesAvailable"?: number;
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * Information specified by the user about the managed instance
   */
  "description"?: string;
  /**
   * status of the managed instance.
   */
  "status"?: ManagedInstanceSummary.Status;
}

export namespace ManagedInstanceSummary {
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

  export function getJsonObj(obj: ManagedInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
