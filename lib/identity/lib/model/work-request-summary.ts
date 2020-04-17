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
 * The work request summary. Tracks the status of the asynchronous operation.
 *
 */
export interface WorkRequestSummary {
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * An enum-like description of the type of work the work request is doing.
   */
  "operationType": WorkRequestSummary.OperationType;
  /**
   * The OCID of the compartment that contains the work request.
   */
  "compartmentId"?: string;
  /**
   * The current status of the work request.
   */
  "status": WorkRequestSummary.Status;
  /**
   * The resources this work request affects.
   *
   */
  "resources"?: Array<model.WorkRequestResource>;
  /**
   * The errors for work request.
   *
   */
  "errors"?: Array<model.WorkRequestError>;
  /**
   * Date and time the work was accepted, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeAccepted"?: Date;
  /**
   * Date and time the work started, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeStarted"?: Date;
  /**
   * Date and time the work completed, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeFinished"?: Date;
  /**
   * How much progress the operation has made.
   *
   */
  "percentComplete"?: number;
}

export namespace WorkRequestSummary {
  export enum OperationType {
    COMPARTMENT = "DELETE_COMPARTMENT",
    TAGDEFINITION = "DELETE_TAG_DEFINITION",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Status {
    ACCEPTED = "ACCEPTED",
    INPROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",
    SUCCEEDED = "SUCCEEDED",
    CANCELING = "CANCELING",
    CANCELED = "CANCELED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined,
        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.WorkRequestError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
