/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The source type for the node.
 **/
export enum NodeSourceType {
  IMAGE = "IMAGE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UNKNOWN_VALUE = "UNKNOWN_VALUE"
}

export namespace NodeSourceType {
  export function getJsonObj(obj: NodeSourceType): object {
    return { obj };
  }
}
