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
 * A compute instance shape that can be used in {@link #launchInstance(LaunchInstanceRequest) launchInstance}.
 * For more information, see [Overview of the Compute Service](https://docs.cloud.oracle.com/Content/Compute/Concepts/computeoverview.htm).
 *
 */
export interface Shape {
  /**
   * The shape's availability domain.
   */
  "availabilityDomain"?: string;
  /**
   * The name of the shape. You can enumerate all available shapes by calling
   * {@link #listShapes(ListShapesRequest) listShapes}.
   *
   */
  "shape": string;
  /**
   * A short description of the processors available to an instance of this shape.
   *
   */
  "processorDescription"?: string;
  /**
   * The default number of OCPUs available to an instance of this shape.
   *
   */
  "ocpus"?: number;
  /**
   * The default amount of memory, in gigabytes, available to an instance of this shape.
   *
   */
  "memoryInGBs"?: number;
  /**
   * The networking bandwidth, in gigabits per second, available to an instance of this shape.
   *
   */
  "networkingBandwidthInGbps"?: number;
  /**
   * The maximum number of VNIC attachments available to an instance of this shape.
   *
   */
  "maxVnicAttachments"?: number;
  /**
   * The number of GPUs available to an instance of this shape.
   *
   */
  "gpus"?: number;
  /**
   * A short description of the GPUs available to instances of this shape.
   * This field is `null` if `gpus` is `0`.
   *
   */
  "gpuDescription"?: string;
  /**
   * The number of local disks available to the instance.
   *
   */
  "localDisks"?: number;
  /**
   * The size of the local disks, aggregated, in gigabytes.
   * This field is `null` if `localDisks` is equal to `0`.
   *
   */
  "localDisksTotalSizeInGBs"?: number;
  /**
   * A short description of the local disks available to instances of this shape.
   * This field is `null` if `localDisks` is equal to `0`.
   *
   */
  "localDiskDescription"?: string;
  "ocpuOptions"?: model.ShapeOcpuOptions;
  "memoryOptions"?: model.ShapeMemoryOptions;
  "networkingBandwidthOptions"?: model.ShapeNetworkingBandwidthOptions;
  "maxVnicAttachmentOptions"?: model.ShapeMaxVnicAttachmentOptions;
}

export namespace Shape {
  export function getJsonObj(obj: Shape): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuOptions": obj.ocpuOptions
          ? model.ShapeOcpuOptions.getJsonObj(obj.ocpuOptions)
          : undefined,
        "memoryOptions": obj.memoryOptions
          ? model.ShapeMemoryOptions.getJsonObj(obj.memoryOptions)
          : undefined,
        "networkingBandwidthOptions": obj.networkingBandwidthOptions
          ? model.ShapeNetworkingBandwidthOptions.getJsonObj(obj.networkingBandwidthOptions)
          : undefined,
        "maxVnicAttachmentOptions": obj.maxVnicAttachmentOptions
          ? model.ShapeMaxVnicAttachmentOptions.getJsonObj(obj.maxVnicAttachmentOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
