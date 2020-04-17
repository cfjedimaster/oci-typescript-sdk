/**
 *
 *
 * OpenAPI spec version: 20190501
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
export interface ListGatewaysRequest {
  /**
   * The ocid of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
 * A user-friendly name. Does not have to be unique, and it's changeable.
* <p>
Example: `My new resource`
* 
 */
  "displayName"?: string;
  /**
 * A filter to return only resources that match the given lifecycle state.
* <p>
Example: `SUCCEEDED`
* 
 */
  "lifecycleState"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'. The default order depends on the sortBy value.
   */
  "sortOrder"?: ListGatewaysRequest.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`).
   * Default order for `timeCreated` is descending. Default order for
   * `displayName` is ascending. The `displayName` sort order is case
   * sensitive.
   *
   */
  "sortBy"?: ListGatewaysRequest.SortBy;
  /**
   * The client request id for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListGatewaysRequest {
  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
