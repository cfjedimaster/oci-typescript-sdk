/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * Specifies the source for a volume group.
 */
export interface VolumeGroupSourceDetails {
  "type": string;
}

export namespace VolumeGroupSourceDetails {
  export function getJsonObj(obj: VolumeGroupSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "volumeGroupId":
          return model.VolumeGroupSourceFromVolumeGroupDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupDetails>(<object>jsonObj),
            true
          );
        case "volumeIds":
          return model.VolumeGroupSourceFromVolumesDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumesDetails>(<object>jsonObj),
            true
          );
        case "volumeGroupBackupId":
          return model.VolumeGroupSourceFromVolumeGroupBackupDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupBackupDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
