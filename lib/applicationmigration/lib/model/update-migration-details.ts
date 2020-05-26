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
import common = require("oci-common");

/**
 * Update the details and configuration of a migration.
 *
 */
export interface UpdateMigrationDetails {
  /**
   * Human-readable name of the migration.
   */
  "displayName"?: string;
  /**
   * Description of the migration.
   */
  "description"?: string;
  "discoveryDetails"?:
    | model.OicDiscoveryDetails
    | model.PcsDiscoveryDetails
    | model.IcsDiscoveryDetails
    | model.OacDiscoveryDetails
    | model.JcsDiscoveryDetails
    | model.SoacsDiscoveryDetails;
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the CreateMigration operation.
   *
   */
  "serviceConfig"?: { [key: string]: model.ConfigurationField };
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the CreateMigration operation.
   *
   */
  "applicationConfig"?: { [key: string]: model.ConfigurationField };
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

export namespace UpdateMigrationDetails {
  export function getJsonObj(obj: UpdateMigrationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "discoveryDetails": obj.discoveryDetails
          ? model.DiscoveryDetails.getJsonObj(obj.discoveryDetails)
          : undefined,
        "serviceConfig": obj.serviceConfig
          ? common.mapContainer(obj.serviceConfig, model.ConfigurationField.getJsonObj)
          : undefined,
        "applicationConfig": obj.applicationConfig
          ? common.mapContainer(obj.applicationConfig, model.ConfigurationField.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
