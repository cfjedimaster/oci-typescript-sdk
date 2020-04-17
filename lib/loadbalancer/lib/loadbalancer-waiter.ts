/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { LoadBalancerClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class LoadBalancerWaiter {
  public constructor(
    private client: LoadBalancerClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forLoadBalancer till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLoadBalancerResponse | null (null in case of 404 response)
   */
  public async forLoadBalancer(
    request: serviceRequests.GetLoadBalancerRequest,
    ...targetStates: models.LoadBalancer.LifecycleState[]
  ): Promise<serviceResponses.GetLoadBalancerResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLoadBalancer(request),
      response => targetStates.exists(response.loadBalancer.lifecycleState),
      targetStates.includes(models.LoadBalancer.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
