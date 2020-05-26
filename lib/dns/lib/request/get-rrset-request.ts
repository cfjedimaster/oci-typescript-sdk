/**
 *
 *
 * OpenAPI spec version: 20180115
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
export interface GetRRSetRequest {
  /**
   * The name or OCID of the target zone.
   */
  "zoneNameOrId": string;
  /**
   * The target fully-qualified domain name (FQDN) within the target zone.
   */
  "domain": string;
  /**
   * The type of the target RRSet within the target zone.
   */
  "rtype": string;
  /**
   * The `If-None-Match` header field makes the request method conditional on
   * the absence of any current representation of the target resource, when
   * the field-value is `*`, or having a selected representation with an
   * entity-tag that does not match any of those listed in the field-value.
   *
   */
  "ifNoneMatch"?: string;
  /**
   * The `If-Modified-Since` header field makes a GET or HEAD request method
   * conditional on the selected representation's modification date being more
   * recent than the date provided in the field-value.  Transfer of the
   * selected representation's data is avoided if that data has not changed.
   *
   */
  "ifModifiedSince"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a page of the collection.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The version of the zone for which data is requested.
   *
   */
  "zoneVersion"?: string;
  /**
   * The OCID of the compartment the resource belongs to.
   */
  "compartmentId"?: string;
}