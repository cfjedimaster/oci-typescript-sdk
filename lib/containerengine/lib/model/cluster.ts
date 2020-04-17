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
 * A Kubernetes cluster. Avoid entering confidential information.
 */
export interface Cluster {
  /**
   * The OCID of the cluster.
   */
  "id"?: string;
  /**
   * The name of the cluster.
   */
  "name"?: string;
  /**
   * The OCID of the compartment in which the cluster exists.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the virtual cloud network (VCN) in which the cluster exists.
   */
  "vcnId"?: string;
  /**
   * The version of Kubernetes running on the cluster masters.
   */
  "kubernetesVersion"?: string;
  /**
   * The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption.
   */
  "kmsKeyId"?: string;
  /**
   * Optional attributes for the cluster.
   */
  "options"?: model.ClusterCreateOptions;
  /**
   * Metadata about the cluster.
   */
  "metadata"?: model.ClusterMetadata;
  /**
   * The state of the cluster masters.
   */
  "lifecycleState"?: model.ClusterLifecycleState;
  /**
   * Details about the state of the cluster masters.
   */
  "lifecycleDetails"?: string;
  /**
   * Endpoints served up by the cluster masters.
   */
  "endpoints"?: model.ClusterEndpoints;
  /**
   * Available Kubernetes versions to which the clusters masters may be upgraded.
   */
  "availableKubernetesUpgrades"?: Array<string>;
}

export namespace Cluster {
  export function getJsonObj(obj: Cluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options ? model.ClusterCreateOptions.getJsonObj(obj.options) : undefined,
        "metadata": obj.metadata ? model.ClusterMetadata.getJsonObj(obj.metadata) : undefined,

        "endpoints": obj.endpoints ? model.ClusterEndpoints.getJsonObj(obj.endpoints) : undefined
      }
    };

    return jsonObj;
  }
}
