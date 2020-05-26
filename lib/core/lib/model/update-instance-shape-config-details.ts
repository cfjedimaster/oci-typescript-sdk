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
* The shape configuration requested for the instance. If provided, the instance will be updated
* with the resources specified. In the case where some properties are missing,
* the missing values will be set to the default for the provided `shape`.
* <p>
Each shape only supports certain configurable values. If the `shape` is provided
* and the configuration values are invalid for that new `shape`, an error will be returned.
* If no `shape` is provided and the configuration values are invalid for the instance's
* existing shape, an error will be returned.
* 
*/
export interface UpdateInstanceShapeConfigDetails {
  /**
   * The total number of OCPUs available to the instance.
   *
   */
  "ocpus"?: number;
}

export namespace UpdateInstanceShapeConfigDetails {
  export function getJsonObj(obj: UpdateInstanceShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
