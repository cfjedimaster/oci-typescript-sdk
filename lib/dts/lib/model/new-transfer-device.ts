/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
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

export interface NewTransferDevice {
  "label": string;
  "serialNumber"?: string;
  "iscsiIQN"?: string;
  "lifecycleState"?: NewTransferDevice.LifecycleState;
  "encryptionPassphrase"?: string;
  "transferJobId"?: string;
  "creationTime"?: Date;
}

export namespace NewTransferDevice {
  export enum LifecycleState {
    PREPARING = "PREPARING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: NewTransferDevice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
