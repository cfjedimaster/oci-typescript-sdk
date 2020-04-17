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

/**
 * The possible configurations for the number of OCPUs available to an instance of this shape.
 * If this field is null, then all instances of this shape have a fixed
 * number of OCPUs equal to `ocpus`.
 *
 */
export interface ShapeOcpuOptions {
  /**
   * The minimum number of OCPUs.
   *
   */
  "min"?: number;
  /**
   * The maximum number of OCPUs.
   *
   */
  "max"?: number;
}

export namespace ShapeOcpuOptions {
  export function getJsonObj(obj: ShapeOcpuOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
