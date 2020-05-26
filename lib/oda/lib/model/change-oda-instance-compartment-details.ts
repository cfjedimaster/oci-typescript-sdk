/**
 * Digital Assistant Control Plane API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties required to move a Digital Assistant instance from one compartment to another.
 */
export interface ChangeOdaInstanceCompartmentDetails {
  /**
   * Identifier of the compartment into which the Digital Assistant instance should be moved.
   */
  "compartmentId": string;
}

export namespace ChangeOdaInstanceCompartmentDetails {
  export function getJsonObj(obj: ChangeOdaInstanceCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
