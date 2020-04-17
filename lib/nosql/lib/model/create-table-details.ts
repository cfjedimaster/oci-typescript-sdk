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
 * Specifications for the new table.
 */
export interface CreateTableDetails {
  /**
   * Table name.
   */
  "name": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Complete CREATE TABLE DDL statement.
   */
  "ddlStatement": string;
  "tableLimits": model.TableLimits;
  /**
   * Simple key-value pair that is applied without any predefined
   * name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and
   * scoped to a namespace.  Example: `{\"foo-namespace\":
   * {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateTableDetails {
  export function getJsonObj(obj: CreateTableDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableLimits": obj.tableLimits ? model.TableLimits.getJsonObj(obj.tableLimits) : undefined
      }
    };

    return jsonObj;
  }
}