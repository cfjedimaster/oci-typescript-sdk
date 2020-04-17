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
 * A pool of compute nodes attached to a cluster. Avoid entering confidential information.
 */
export interface NodePool {
  /**
   * The OCID of the node pool.
   */
  "id"?: string;
  /**
   * The OCID of the compartment in which the node pool exists.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the cluster to which this node pool is attached.
   */
  "clusterId"?: string;
  /**
   * The name of the node pool.
   */
  "name"?: string;
  /**
   * The version of Kubernetes running on the nodes in the node pool.
   */
  "kubernetesVersion"?: string;
  /**
   * A list of key/value pairs to add to each underlying OCI instance in the node pool.
   */
  "nodeMetadata"?: { [key: string]: string };
  /**
   * Deprecated. see `nodeSource`. The OCID of the image running on the nodes in the node pool.
   *
   */
  "nodeImageId"?: string;
  /**
   * Deprecated. see `nodeSource`. The name of the image running on the nodes in the node pool.
   *
   */
  "nodeImageName"?: string;
  /**
   * Source running on the nodes in the node pool.
   */
  "nodeSource"?: model.NodeSourceViaImageOption;
  /**
   * The name of the node shape of the nodes in the node pool.
   */
  "nodeShape"?: string;
  /**
   * A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
   */
  "initialNodeLabels"?: Array<model.KeyValue>;
  /**
   * The SSH public key on each node in the node pool.
   */
  "sshPublicKey"?: string;
  /**
   * The number of nodes in each subnet.
   */
  "quantityPerSubnet"?: number;
  /**
   * The OCIDs of the subnets in which to place nodes for this node pool.
   */
  "subnetIds"?: Array<string>;
  /**
   * The nodes in the node pool.
   */
  "nodes"?: Array<model.Node>;
  /**
   * The configuration of nodes in the node pool.
   */
  "nodeConfigDetails"?: model.NodePoolNodeConfigDetails;
}

export namespace NodePool {
  export function getJsonObj(obj: NodePool): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeSource": obj.nodeSource
          ? model.NodeSourceOption.getJsonObj(obj.nodeSource)
          : undefined,

        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getJsonObj(item);
            })
          : undefined,

        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.Node.getJsonObj(item);
            })
          : undefined,
        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.NodePoolNodeConfigDetails.getJsonObj(obj.nodeConfigDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
