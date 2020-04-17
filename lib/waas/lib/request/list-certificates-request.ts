/**
 *
 *
 * OpenAPI spec version: 20181116
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
export interface ListCertificatesRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment. This number is generated when the compartment is created.
   */
  "compartmentId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. In unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * The value by which certificate summaries are sorted in a paginated 'List' call. If unspecified, defaults to `timeCreated`.
   */
  "sortBy"?: ListCertificatesRequest.SortBy;
  /**
   * The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to `DESC`.
   */
  "sortOrder"?: ListCertificatesRequest.SortOrder;
  /**
   * Filter certificates using a list of certificates OCIDs.
   */
  "id"?: Array<string>;
  /**
   * Filter certificates using a list of display names.
   */
  "displayName"?: Array<string>;
  /**
   * Filter certificates using a list of lifecycle states.
   */
  "lifecycleState"?: Array<model.LifecycleStates>;
  /**
   * A filter that matches certificates created on or after the specified date-time.
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that matches certificates created before the specified date-time.
   */
  "timeCreatedLessThan"?: Date;
}

export namespace ListCertificatesRequest {
  export enum SortBy {
    Id = "id",
    CompartmentId = "compartmentId",
    DisplayName = "displayName",
    NotValidAfter = "notValidAfter",
    TimeCreated = "timeCreated"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
