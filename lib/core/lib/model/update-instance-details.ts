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

export interface UpdateInstanceDetails {
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
* <p>
Example: `My bare metal instance`
* 
    */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Instance agent configuration options to choose for updating the instance
   *
   */
  "agentConfig"?: model.UpdateInstanceAgentConfigDetails;
  /**
    * Custom metadata key/value string pairs that you provide. Any set of key/value pairs
* provided here will completely replace the current set of key/value pairs in the 'metadata'
* field on the instance.
* <p>
Both the 'user_data' and 'ssh_authorized_keys' fields cannot be changed after an instance
* has launched. Any request which updates, removes, or adds either of these fields will be
* rejected. You must provide the same values for 'user_data' and 'ssh_authorized_keys' that
* already exist on the instance.
* 
    */
  "metadata"?: { [key: string]: string };
  /**
    * Additional metadata key/value pairs that you provide. They serve the same purpose and
* functionality as fields in the 'metadata' object.
* <p>
They are distinguished from 'metadata' fields in that these can be nested JSON objects
* (whereas 'metadata' fields are string/string maps only).
* <p>
Both the 'user_data' and 'ssh_authorized_keys' fields cannot be changed after an instance
* has launched. Any request which updates, removes, or adds either of these fields will be
* rejected. You must provide the same values for 'user_data' and 'ssh_authorized_keys' that
* already exist on the instance.
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
    * The shape of the instance. The shape determines the number of CPUs and the amount of memory
* allocated to the instance. For more information about how to change shapes, and a list of
* shapes that are supported, see
* [Changing the Shape of an Instance](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/resizinginstances.htm).
* <p>
For details about the CPUs, memory, and other properties of each shape, see
* [Compute Shapes](https://docs.cloud.oracle.com/iaas/Content/Compute/References/computeshapes.htm).
* <p>
The new shape must be compatible with the image that was used to launch the instance. You
* can enumerate all available shapes and determine image compatibility by calling
* {@link #listShapes(ListShapesRequest) listShapes}.
* <p>
If the instance is running when you change the shape, the instance is rebooted.
* <p>
Example: `VM.Standard2.1`
* 
    */
  "shape"?: string;
  "shapeConfig"?: model.UpdateInstanceShapeConfigDetails;
}

export namespace UpdateInstanceDetails {
  export function getJsonObj(obj: UpdateInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "agentConfig": obj.agentConfig
          ? model.UpdateInstanceAgentConfigDetails.getJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.UpdateInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
