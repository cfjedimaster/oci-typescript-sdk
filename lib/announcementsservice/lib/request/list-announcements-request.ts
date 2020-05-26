/**
 *
 *
 * OpenAPI spec version: 0.0.1
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
export interface ListAnnouncementsRequest {
  /**
   * The OCID of the compartment. Because announcements are specific to a tenancy, this is the
   * OCID of the root compartment.
   *
   */
  "compartmentId": string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   */
  "page"?: string;
  /**
   * The type of announcement.
   */
  "announcementType"?: string;
  /**
   * The announcement's current lifecycle state.
   */
  "lifecycleState"?: ListAnnouncementsRequest.LifecycleState;
  /**
   * Whether the announcement is displayed as a console banner.
   */
  "isBanner"?: boolean;
  /**
   * The criteria to sort by. You can specify only one sort order.
   *
   */
  "sortBy"?: ListAnnouncementsRequest.SortBy;
  /**
   * The sort order to use. (Sorting by `announcementType` orders the announcements list according to importance.)
   *
   */
  "sortOrder"?: ListAnnouncementsRequest.SortOrder;
  /**
   * The boundary for the earliest `timeOneValue` date on announcements that you want to see.
   */
  "timeOneEarliestTime"?: Date;
  /**
   * The boundary for the latest `timeOneValue` date on announcements that you want to see.
   */
  "timeOneLatestTime"?: Date;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListAnnouncementsRequest {
  export enum LifecycleState {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
  }

  export enum SortBy {
    TimeOneValue = "timeOneValue",
    TimeTwoValue = "timeTwoValue",
    TimeCreated = "timeCreated",
    ReferenceTicketNumber = "referenceTicketNumber",
    Summary = "summary",
    AnnouncementType = "announcementType"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
