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
 * Summary of a term associated with an object. This is a brief summary returned as part of the search result.
 *
 */
export interface SearchTermSummary {
  /**
   * Unique term key that is immutable.
   */
  "key"?: string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Unique id of the parent glossary.
   */
  "glossaryKey"?: string;
  /**
   * Name of the parent glossary.
   */
  "glossaryName"?: string;
  /**
   * This terms parent term key. Will be null if the term has no parent term.
   */
  "parentTermKey"?: string;
  /**
   * Name of the parent term key. Will be null if the term has no parent term.
   */
  "parentTermName"?: string;
}

export namespace SearchTermSummary {
  export function getJsonObj(obj: SearchTermSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
