/**
 * Search Service API
 * Search for resources in your cloud network.
 * OpenAPI spec version: 20180409
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
 * An individual field that can be used as part of a query filter.
 */
export interface QueryableFieldDescription {
  /**
   * The type of the field, which dictates what semantics and query constraints you can use when searching or querying.
   *
   */
  "fieldType": QueryableFieldDescription.FieldType;
  /**
   * The name of the field to use when constructing the query. Field names are present for all types except `OBJECT`.
   *
   */
  "fieldName": string;
  /**
   * Indicates that this field is actually an array of the specified field type.
   *
   */
  "isArray"?: boolean;
  /**
   * If the field type is `OBJECT`, then this property will provide all the individual properties of the object that can
   * be queried.
   *
   */
  "objectProperties"?: Array<model.QueryableFieldDescription>;
}

export namespace QueryableFieldDescription {
  export enum FieldType {
    IDENTIFIER = "IDENTIFIER",
    STRING = "STRING",
    INTEGER = "INTEGER",
    RATIONAL = "RATIONAL",
    BOOLEAN = "BOOLEAN",
    DATETIME = "DATETIME",
    IP = "IP",
    OBJECT = "OBJECT",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: QueryableFieldDescription): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectProperties": obj.objectProperties
          ? obj.objectProperties.map(item => {
              return model.QueryableFieldDescription.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
