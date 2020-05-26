/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
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

/**
 * A term workflow is a sequence of steps or tasks usually done by a data steward as part of the governance lifecycle.
 * Business terms cannot be used for tagging unless they are APPROVED by the busines term owner (usually a data steward).
 * By default, most terms, when created, are in the NEW status unless specified otherwise.
 * NEW           - This is the default workflow status when a term is newly created. The owner can override this status during the creation.
 * APPROVED      - This term is ready for use. It can be used to tag data assets, data entities, attributes, and other taggable resources.
 * UNDER_REVIEW  - The term is currently under review and cannot be used until it is in APPROVED status.
 * ESCALATED     - The review of this term is escalated to fast track for use in tagging.
 *
 **/
export enum TermWorkflowStatus {
  NEW = "NEW",
  APPROVED = "APPROVED",
  UNDER_REVIEW = "UNDER_REVIEW",
  ESCALATED = "ESCALATED"
}

export namespace TermWorkflowStatus {
  export function getJsonObj(obj: TermWorkflowStatus): object {
    return { obj };
  }
}
