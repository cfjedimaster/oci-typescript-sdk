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
export interface ChangeZoneCompartmentRequest {
  /**
   * The OCID of the target zone.
   */
  "zoneId": string;
  /**
   * Details for moving a zone into a different compartment.
   */
  "changeZoneCompartmentDetails": model.ChangeZoneCompartmentDetails;
  /**
   * The `If-Match` header field makes the request method conditional on the
   * existence of at least one current representation of the target resource,
   * when the field-value is `*`, or having a current representation of the
   * target resource that has an entity-tag matching a member of the list of
   * entity-tags provided in the field-value.
   *
   */
  "ifMatch"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case
   * of a timeout or server error without risk of executing that same action
   * again. Retry tokens expire after 24 hours, but can be invalidated before
   * then due to conflicting operations (for example, if a resource has been
   * deleted and purged from the system, then a retry of the original creation
   * request may be rejected).
   *
   */
  "opcRetryToken"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
}