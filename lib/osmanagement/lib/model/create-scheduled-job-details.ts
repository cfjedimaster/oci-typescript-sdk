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
 * Information for creating a Scheduled Job
 */
export interface CreateScheduledJobDetails {
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * Scheduled Job name
   */
  "displayName": string;
  /**
   * Details describing the Scheduled Job.
   */
  "description"?: string;
  /**
   * the type of scheduling this Scheduled Job follows
   */
  "scheduleType": model.ScheduleTypes;
  /**
   * the desired time for the next execution of this Scheduled Job
   */
  "timeNextExecution": Date;
  /**
   * the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalType"?: model.IntervalTypes;
  /**
   * the value for the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalValue"?: string;
  /**
   * The list of managed instances this scheduled job operates on
   * (mutually exclusive with managedInstanceGroups). Either this or the
   * managedInstanceGroups must be supplied.
   *
   */
  "managedInstances"?: Array<model.Id>;
  /**
   * The list of managed instance groups this scheduled job operates on
   * (mutually exclusive with managedInstances). Either this or
   * managedInstances must be supplied.
   *
   */
  "managedInstanceGroups"?: Array<model.Id>;
  /**
   * the type of operation this Scheduled Job performs
   */
  "operationType": model.OperationTypes;
  /**
   * Type of the update (only if operation type is UPDATE_ALL_PACKAGES)
   */
  "updateType"?: model.PackageUpdateTypes;
  /**
   * the id of the package (only if operation type is INSTALL/UPDATE/REMOVE_PACKAGE)
   */
  "packageNames"?: Array<model.PackageName>;
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

export namespace CreateScheduledJobDetails {
  export function getJsonObj(obj: CreateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstances": obj.managedInstances
          ? obj.managedInstances.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,
        "managedInstanceGroups": obj.managedInstanceGroups
          ? obj.managedInstanceGroups.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,

        "packageNames": obj.packageNames
          ? obj.packageNames.map(item => {
              return model.PackageName.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
