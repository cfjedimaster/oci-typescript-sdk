/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Detailed representation of a change stream pool compartment operation.
 */
export interface ChangeStreamPoolCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * into which the resource should be moved.
   *
   */
  "compartmentId": string;
}

export namespace ChangeStreamPoolCompartmentDetails {
  export function getJsonObj(obj: ChangeStreamPoolCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
