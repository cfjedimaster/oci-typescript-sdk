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
 * Summary of a folder.
 * A generic term used in the data catalog for an external organization concept used for a collection of data entities
 * or processes within a data asset. This term is an internal term which models multiple external types of folder,
 * such as file directories, database schemas, and so on. Some data assets, such as Object Store containers,
 * may contain many levels of folders.
 *
 */
export interface FolderSummary {
  /**
   * Unique folder key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of a folder.
   */
  "description"?: string;
  /**
   * The unique key of the parent data asset.
   */
  "dataAssetKey"?: string;
  /**
   * The key of the containing folder or null if there is no parent.
   */
  "parentFolderKey"?: string;
  /**
   * Full path of the folder.
   */
  "path"?: string;
  /**
   * Unique external key of this object from the source systems.
   */
  "externalKey"?: string;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * The date and time the folder was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * URI of the folder resource within the data catalog API.
   */
  "uri"?: string;
  /**
   * State of the folder.
   */
  "lifecycleState"?: string;
}

export namespace FolderSummary {
  export function getJsonObj(obj: FolderSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
