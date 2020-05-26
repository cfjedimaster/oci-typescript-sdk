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

export interface CreateCrossConnectDetails {
  /**
   * The OCID of the compartment to contain the cross-connect.
   */
  "compartmentId": string;
  /**
   * The OCID of the cross-connect group to put this cross-connect in.
   */
  "crossConnectGroupId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * If you already have an existing cross-connect or cross-connect group at this FastConnect
   * location, and you want this new cross-connect to be on a different router (for the
   * purposes of redundancy), provide the OCID of that existing cross-connect or
   * cross-connect group.
   *
   */
  "farCrossConnectOrCrossConnectGroupId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The name of the FastConnect location where this cross-connect will be installed.
* To get a list of the available locations, see
* {@link #listCrossConnectLocations(ListCrossConnectLocationsRequest) listCrossConnectLocations}.
* <p>
Example: `CyrusOne, Chandler, AZ`
* 
    */
  "locationName": string;
  /**
   * If you already have an existing cross-connect or cross-connect group at this FastConnect
   * location, and you want this new cross-connect to be on the same router, provide the
   * OCID of that existing cross-connect or cross-connect group.
   *
   */
  "nearCrossConnectOrCrossConnectGroupId"?: string;
  /**
    * The port speed for this cross-connect. To get a list of the available port speeds, see
* {@link #listCrossconnectPortSpeedShapes(ListCrossconnectPortSpeedShapesRequest) listCrossconnectPortSpeedShapes}.
* <p>
Example: `10 Gbps`
* 
    */
  "portSpeedShapeName": string;
  /**
   * A reference name or identifier for the physical fiber connection that this cross-connect
   * uses.
   *
   */
  "customerReferenceName"?: string;
}

export namespace CreateCrossConnectDetails {
  export function getJsonObj(obj: CreateCrossConnectDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
