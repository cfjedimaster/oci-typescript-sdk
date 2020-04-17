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
 * Permissions object for glosssaries.
 */
export interface GlossaryPermissionsSummary {
  /**
   * The unique key of the parent glossary.
   */
  "glossaryKey"?: string;
  /**
   * An array of permissions.
   */
  "userPermissions"?: Array<string>;
}

export namespace GlossaryPermissionsSummary {
  export function getJsonObj(obj: GlossaryPermissionsSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
