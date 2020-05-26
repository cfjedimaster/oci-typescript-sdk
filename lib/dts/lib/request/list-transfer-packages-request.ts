/**
 *
 *
 * OpenAPI spec version: 1.0.014
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
export interface ListTransferPackagesRequest {
  /**
   * ID of the Transfer Job
   */
  "id": string;
  /**
   * filtering by lifecycleState
   */
  "lifecycleState"?: ListTransferPackagesRequest.LifecycleState;
  /**
   * filtering by displayName
   */
  "displayName"?: string;
}

export namespace ListTransferPackagesRequest {
  export enum LifecycleState {
    PREPARING = "PREPARING",
    SHIPPING = "SHIPPING",
    RECEIVED = "RECEIVED",
    PROCESSING = "PROCESSING",
    PROCESSED = "PROCESSED",
    RETURNED = "RETURNED",
    DELETED = "DELETED",
    CANCELLED = "CANCELLED",
    CANCELLEDRETURNED = "CANCELLED_RETURNED"
  }
}
