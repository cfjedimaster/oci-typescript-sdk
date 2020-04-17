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

/**
 * Summary of an data entity. A representation of data with a set of attributes, normally representing a single
 * business entity. Synonymous with 'table' or 'view' in a database, or a single logical file structure
 * that one or many files may match.
 *
 */
export interface EntitySummary {
  /**
   * Unique data entity key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of a data entity.
   */
  "description"?: string;
  /**
   * Unique key of the parent data asset.
   */
  "dataAssetKey"?: string;
  /**
   * Key of the associated folder.
   */
  "folderKey"?: string;
  /**
   * Unique external key of this object in the source system.
   */
  "externalKey"?: string;
  /**
   * Full path of the data entity.
   */
  "path"?: string;
  /**
   * The date and time the data entity was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the data entity. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who updated this object in the data catalog.
   */
  "updatedById"?: string;
  /**
   * URI to the data entity instance in the API.
   */
  "uri"?: string;
  /**
   * State of the data entity.
   */
  "lifecycleState"?: string;
}

export namespace EntitySummary {
  export function getJsonObj(obj: EntitySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
