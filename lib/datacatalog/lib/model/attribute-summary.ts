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
 * Summary of an entity attribute.
 */
export interface AttributeSummary {
  /**
   * Unique attribute key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the attribute.
   */
  "description"?: string;
  /**
   * The unique key of the parent entity.
   */
  "entityKey"?: string;
  /**
   * Unique external key of this attribute in the external source system.
   */
  "externalKey"?: string;
  /**
   * Max allowed length of the attribute value.
   */
  "length"?: number;
  /**
   * Property that identifies if this attribute can be assigned null values.
   */
  "isNullable"?: boolean;
  /**
   * URI to the attribute instance in the API.
   */
  "uri"?: string;
  /**
   * State of the attribute.
   */
  "lifecycleState"?: string;
  /**
   * The date and time the attribute was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Data type of the attribute as defined in the external source system.
   */
  "externalDataType"?: string;
}

export namespace AttributeSummary {
  export function getJsonObj(obj: AttributeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
