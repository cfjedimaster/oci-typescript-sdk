/**
 *
 *
 * OpenAPI spec version: 20190325
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
export interface ListJobLogsRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique job key.
   */
  "jobKey": string;
  /**
   * The key of the job execution.
   */
  "jobExecutionKey": string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: string;
  /**
   * Severity level for this Log.
   */
  "severity"?: string;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time that the resource was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the resource.
   */
  "updatedById"?: string;
  /**
   * Specifies the fields to return in a job log summary response.
   *
   */
  "fields"?: Array<ListJobLogsRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListJobLogsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListJobLogsRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListJobLogsRequest {
  export enum Fields {
    Key = "key",
    JobExecutionKey = "jobExecutionKey",
    Severity = "severity",
    TimeCreated = "timeCreated",
    LogMessage = "logMessage",
    Uri = "uri"
  }

  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
