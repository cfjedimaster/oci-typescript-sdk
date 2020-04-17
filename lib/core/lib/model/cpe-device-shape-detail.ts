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
 * The detailed information about a particular CPE device type. Compare with
 * {@link CpeDeviceShapeSummary}.
 *
 */
export interface CpeDeviceShapeDetail {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the CPE device shape.
   * This value uniquely identifies the type of CPE device.
   *
   */
  "cpeDeviceShapeId"?: string;
  /**
   * Basic information about this particular CPE device type.
   */
  "cpeDeviceInfo"?: model.CpeDeviceInfo;
  /**
   * For certain CPE devices types, the customer can provide answers to
   * questions that are specific to the device type. This attribute contains
   * a list of those questions. The Networking service merges the answers with
   * other information and renders a set of CPE configuration content. To
   * provide the answers, use
   * {@link #updateTunnelCpeDeviceConfig(UpdateTunnelCpeDeviceConfigRequest) updateTunnelCpeDeviceConfig}.
   *
   */
  "parameters"?: Array<model.CpeDeviceConfigQuestion>;
  /**
   * A template of CPE device configuration information that will be merged with the customer's
   * answers to the questions to render the final CPE device configuration content. Also see:
   * <p>
   * {@link #getCpeDeviceConfigContent(GetCpeDeviceConfigContentRequest) getCpeDeviceConfigContent}
   *   * {@link #getIpsecCpeDeviceConfigContent(GetIpsecCpeDeviceConfigContentRequest) getIpsecCpeDeviceConfigContent}
   *   * {@link #getTunnelCpeDeviceConfigContent(GetTunnelCpeDeviceConfigContentRequest) getTunnelCpeDeviceConfigContent}
   *
   */
  "template"?: string;
}

export namespace CpeDeviceShapeDetail {
  export function getJsonObj(obj: CpeDeviceShapeDetail): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpeDeviceInfo": obj.cpeDeviceInfo
          ? model.CpeDeviceInfo.getJsonObj(obj.cpeDeviceInfo)
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.CpeDeviceConfigQuestion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
