/**
 *
 *
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
import common = require("oci-common");
export interface ListAvailableSoftwareSourcesForManagedInstanceRequest {
  /**
   * OCID for the managed instance
   */
  "managedInstanceId": string;
  /**
 * A user-friendly name. Does not have to be unique, and it's changeable.
* <p>
Example: `My new resource`
* 
 */
  "displayName"?: string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListAvailableSoftwareSourcesForManagedInstanceRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListAvailableSoftwareSourcesForManagedInstanceRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAvailableSoftwareSourcesForManagedInstanceRequest {
  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }
}
