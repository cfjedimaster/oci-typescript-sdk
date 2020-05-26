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
 * The tunnel's shared secret (pre-shared key).
 */
export interface IPSecConnectionTunnelSharedSecret {
  /**
    * The tunnel's shared secret (pre-shared key).
* <p>
Example: `EXAMPLEToUis6j1cp8GdVQxcmdfMO0yXMLilZTbYCMDGu4V8o`
* 
    */
  "sharedSecret": string;
}

export namespace IPSecConnectionTunnelSharedSecret {
  export function getJsonObj(obj: IPSecConnectionTunnelSharedSecret): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
