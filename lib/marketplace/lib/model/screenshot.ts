/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model for a listing's screenshot.
 */
export interface Screenshot {
  /**
   * The name of the screenshot.
   */
  "name"?: string;
  /**
   * A description of the screenshot.
   */
  "description"?: string;
  /**
   * The content URL of the screenshot.
   */
  "contentUrl"?: string;
  /**
   * The MIME type of the screenshot.
   */
  "mimeType"?: string;
  /**
   * The file extension of the screenshot.
   */
  "fileExtension"?: string;
}

export namespace Screenshot {
  export function getJsonObj(obj: Screenshot): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
