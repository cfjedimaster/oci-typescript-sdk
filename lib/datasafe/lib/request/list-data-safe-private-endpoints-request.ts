/**
 *
 *
 * OpenAPI spec version: 20181201
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
export interface ListDataSafePrivateEndpointsRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId"?: string;
  /**
   * A filter to return only resources that match the specified display name.
   *
   */
  "displayName"?: string;
  /**
   * A filter to return only the private endpoints that match the specified VCN OCID.
   */
  "vcnId"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * The beginning page from which the results start retrieving.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListDataSafePrivateEndpointsRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sort order (sortOrder). The default order for TIMECREATED is descending. The default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListDataSafePrivateEndpointsRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListDataSafePrivateEndpointsRequest {
  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }
}
