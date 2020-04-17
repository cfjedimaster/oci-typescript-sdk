/**
 *
 *
 * OpenAPI spec version: 20181231
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
export interface ListIncidentResourceTypesRequest {
  /**
   * Problem Type of Taxonomy - tech/limit
   */
  "problemType": string;
  /**
   * Tenancy Ocid
   */
  "compartmentId": string;
  /**
   * Customer Support Identifier of the support account
   */
  "csi": string;
  /**
   * User OCID for IDCS users that have a shadow in OCI
   */
  "ocid": string;
  /**
   * Unique Header for request id
   */
  "opcRequestId"?: string;
  /**
   * Limit query for number of returned results
   */
  "limit"?: number;
  /**
   * Pagination for Incident list
   */
  "page"?: string;
  /**
   * The key to sort the returned items by
   */
  "sortBy"?: model.SortBy;
  /**
   * The order in which to sort the results
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Name of Incident Type. eg: Limit Increase
   */
  "name"?: string;
}
