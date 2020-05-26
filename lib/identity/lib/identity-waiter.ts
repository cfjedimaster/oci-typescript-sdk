/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
import { IdentityClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class IdentityWaiter {
  public constructor(
    private client: IdentityClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forCompartment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCompartmentResponse | null (null in case of 404 response)
   */
  public async forCompartment(
    request: serviceRequests.GetCompartmentRequest,
    ...targetStates: models.Compartment.LifecycleState[]
  ): Promise<serviceResponses.GetCompartmentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCompartment(request),
      response => targetStates.exists(response.compartment.lifecycleState),
      targetStates.includes(models.Compartment.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forDynamicGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDynamicGroupResponse | null (null in case of 404 response)
   */
  public async forDynamicGroup(
    request: serviceRequests.GetDynamicGroupRequest,
    ...targetStates: models.DynamicGroup.LifecycleState[]
  ): Promise<serviceResponses.GetDynamicGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDynamicGroup(request),
      response => targetStates.exists(response.dynamicGroup.lifecycleState),
      targetStates.includes(models.DynamicGroup.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetGroupResponse | null (null in case of 404 response)
   */
  public async forGroup(
    request: serviceRequests.GetGroupRequest,
    ...targetStates: models.Group.LifecycleState[]
  ): Promise<serviceResponses.GetGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getGroup(request),
      response => targetStates.exists(response.group.lifecycleState),
      targetStates.includes(models.Group.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forIdentityProvider till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIdentityProviderResponse | null (null in case of 404 response)
   */
  public async forIdentityProvider(
    request: serviceRequests.GetIdentityProviderRequest,
    ...targetStates: models.IdentityProvider.LifecycleState[]
  ): Promise<serviceResponses.GetIdentityProviderResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIdentityProvider(request),
      response => targetStates.exists(response.identityProvider.lifecycleState),
      targetStates.includes(models.IdentityProvider.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forIdpGroupMapping till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIdpGroupMappingResponse | null (null in case of 404 response)
   */
  public async forIdpGroupMapping(
    request: serviceRequests.GetIdpGroupMappingRequest,
    ...targetStates: models.IdpGroupMapping.LifecycleState[]
  ): Promise<serviceResponses.GetIdpGroupMappingResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIdpGroupMapping(request),
      response => targetStates.exists(response.idpGroupMapping.lifecycleState),
      targetStates.includes(models.IdpGroupMapping.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPolicyResponse | null (null in case of 404 response)
   */
  public async forPolicy(
    request: serviceRequests.GetPolicyRequest,
    ...targetStates: models.Policy.LifecycleState[]
  ): Promise<serviceResponses.GetPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPolicy(request),
      response => targetStates.exists(response.policy.lifecycleState),
      targetStates.includes(models.Policy.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagResponse | null (null in case of 404 response)
   */
  public async forTag(
    request: serviceRequests.GetTagRequest,
    ...targetStates: models.Tag.LifecycleState[]
  ): Promise<serviceResponses.GetTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTag(request),
      response => targetStates.exists(response.tag.lifecycleState),
      targetStates.includes(models.Tag.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forTagDefault till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagDefaultResponse
   */
  public async forTagDefault(
    request: serviceRequests.GetTagDefaultRequest,
    ...targetStates: models.TagDefault.LifecycleState[]
  ): Promise<serviceResponses.GetTagDefaultResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getTagDefault(request),
      response => targetStates.exists(response.tagDefault.lifecycleState)
    );
  }

  /**
   * Waits forTagNamespace till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagNamespaceResponse | null (null in case of 404 response)
   */
  public async forTagNamespace(
    request: serviceRequests.GetTagNamespaceRequest,
    ...targetStates: models.TagNamespace.LifecycleState[]
  ): Promise<serviceResponses.GetTagNamespaceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTagNamespace(request),
      response => targetStates.exists(response.tagNamespace.lifecycleState),
      targetStates.includes(models.TagNamespace.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forUser till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetUserResponse | null (null in case of 404 response)
   */
  public async forUser(
    request: serviceRequests.GetUserRequest,
    ...targetStates: models.User.LifecycleState[]
  ): Promise<serviceResponses.GetUserResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getUser(request),
      response => targetStates.exists(response.user.lifecycleState),
      targetStates.includes(models.User.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forUserGroupMembership till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetUserGroupMembershipResponse | null (null in case of 404 response)
   */
  public async forUserGroupMembership(
    request: serviceRequests.GetUserGroupMembershipRequest,
    ...targetStates: models.UserGroupMembership.LifecycleState[]
  ): Promise<serviceResponses.GetUserGroupMembershipResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getUserGroupMembership(request),
      response => targetStates.exists(response.userGroupMembership.lifecycleState),
      targetStates.includes(models.UserGroupMembership.LifecycleState.DELETED)
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
