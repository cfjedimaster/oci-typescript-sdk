/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
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
 * Object used to update the stream pool's details.
 */
export interface UpdateStreamPoolDetails {
  "name"?: string;
  "kafkaSettings"?: model.KafkaSettings;
  "customEncryptionKeyDetails"?: model.CustomEncryptionKeyDetails;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateStreamPoolDetails {
  export function getJsonObj(obj: UpdateStreamPoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "kafkaSettings": obj.kafkaSettings
          ? model.KafkaSettings.getJsonObj(obj.kafkaSettings)
          : undefined,
        "customEncryptionKeyDetails": obj.customEncryptionKeyDetails
          ? model.CustomEncryptionKeyDetails.getJsonObj(obj.customEncryptionKeyDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
