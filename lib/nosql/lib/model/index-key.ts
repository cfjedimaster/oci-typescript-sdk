/**
 * ndcs-control-plane API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Specifies a single key in a secondary index.
 */
export interface IndexKey {
  /**
   * The name of a column to be included as an index key.
   */
  "columnName": string;
  /**
   * If the specified column is of type JSON, jsonPath contains
   * a dotted path indicating the field within the JSON object
   * that will be the index key.
   *
   */
  "jsonPath"?: string;
  /**
   * If the specified column is of type JSON, jsonFieldType contains
   * the type of the field indicated by jsonPath.
   *
   */
  "jsonFieldType"?: string;
}

export namespace IndexKey {
  export function getJsonObj(obj: IndexKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
