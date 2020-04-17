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
export interface SearchCriteriaRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * The information used to create an extended search results.
   */
  "searchCriteriaDetails"?: model.SearchCriteria;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * Immutable resource name.
   */
  "name"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: string;
  /**
   * A search timeout string (for example, timeout=4000ms), bounding the search request to be executed within the
   * specified time value and bail with the hits accumulated up to that point when expired.
   * Defaults to no timeout.
   *
   */
  "timeout"?: string;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: SearchCriteriaRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: SearchCriteriaRequest.SortOrder;
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

export namespace SearchCriteriaRequest {
  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
