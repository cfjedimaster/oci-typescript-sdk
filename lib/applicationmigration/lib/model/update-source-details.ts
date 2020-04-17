/**
 * Application Migration Service API
 * API for the Application Migration service. Use this API to migrate applications from Oracle Cloud Infrastructure - Classic to Oracle Cloud Infrastructure.

 * OpenAPI spec version: 20191031
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
 * The Source object. Sources represent external locations from which
 * applications may be imported into an OCI tenancy.
 *
 */
export interface UpdateSourceDetails {
  /**
   * Human-readable name of the source.
   */
  "displayName"?: string;
  /**
   * Description of the source.
   */
  "description"?: string;
  "sourceDetails"?: model.InternalSourceDetails | model.OcicSourceDetails;
  "authorizationDetails"?: model.InternalAuthorizationDetails | model.OcicAuthorizationDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSourceDetails {
  export function getJsonObj(obj: UpdateSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,
        "authorizationDetails": obj.authorizationDetails
          ? model.AuthorizationDetails.getJsonObj(obj.authorizationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
