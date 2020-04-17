/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
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

/**
 * An HTTP header name and value. You can configure your origin server to only allow requests that contain the custom header values that you specify.
 */
export interface Header {
  /**
   * The name of the header.
   */
  "name": string;
  /**
   * The value of the header.
   */
  "value": string;
}

export namespace Header {
  export function getJsonObj(obj: Header): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
