/**
 *
 *
 * OpenAPI spec version: 20190828
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
export interface ListIndexesRequest {
  /**
   * A table name within the compartment, or a table OCID.
   */
  "tableNameOrId": string;
  /**
   * The ID of a table's compartment. When a table is identified
   * by name, the compartmentId is often needed to provide
   * context for interpreting the name.
   *
   */
  "compartmentId"?: string;
  /**
   * A shell-globbing-style (*?[]) filter for names.
   */
  "name"?: string;
  /**
   * Filter list by the lifecycle state of the item.
   */
  "lifecycleState"?: ListIndexesRequest.LifecycleState;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start
   * retrieving results. This is usually retrieved from a previous
   * list call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: ListIndexesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be
   * provided. Default order for timeCreated is descending. Default
   * order for name is ascending. If no value is specified
   * timeCreated is default.
   *
   */
  "sortBy"?: ListIndexesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListIndexesRequest {
  export enum LifecycleState {
    ALL = "ALL",
    CREATING = "CREATING",
    UPDATING = "UPDATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    Name = "name"
  }
}
