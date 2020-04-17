/**
 * Work Requests API
 * Many of the API operations that you use to create and configure Compute resources do not take effect
immediately. In these cases, the operation spawns an asynchronous workflow to fulfill the request.
Work requests provide visibility into the status of these in-progress, long-running workflows.

For more information about work requests and the operations that spawn work requests, see
[Viewing the State of a Compute Work Request](/iaas/Content/Compute/Tasks/viewingworkrequestcompute.htm).

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
 * A log message from executing an operation that is tracked by a work request.
 */
export interface WorkRequestLogEntry {
  /**
   * A human-readable log message.
   */
  "message": string;
  /**
   * The date and time the log message was written.
   */
  "timestamp": Date;
}

export namespace WorkRequestLogEntry {
  export function getJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
