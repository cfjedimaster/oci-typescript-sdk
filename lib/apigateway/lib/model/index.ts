/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items. 
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm). 

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessLogPolicy from "./access-log-policy";
export import AccessLogPolicy = AccessLogPolicy.AccessLogPolicy;
import * as ApiSpecification from "./api-specification";
export import ApiSpecification = ApiSpecification.ApiSpecification;
import * as ApiSpecificationLoggingPolicies from "./api-specification-logging-policies";
export import ApiSpecificationLoggingPolicies = ApiSpecificationLoggingPolicies.ApiSpecificationLoggingPolicies;
import * as ApiSpecificationRequestPolicies from "./api-specification-request-policies";
export import ApiSpecificationRequestPolicies = ApiSpecificationRequestPolicies.ApiSpecificationRequestPolicies;
import * as ApiSpecificationRoute from "./api-specification-route";
export import ApiSpecificationRoute = ApiSpecificationRoute.ApiSpecificationRoute;
import * as ApiSpecificationRouteBackend from "./api-specification-route-backend";
export import ApiSpecificationRouteBackend = ApiSpecificationRouteBackend.ApiSpecificationRouteBackend;
import * as ApiSpecificationRouteRequestPolicies from "./api-specification-route-request-policies";
export import ApiSpecificationRouteRequestPolicies = ApiSpecificationRouteRequestPolicies.ApiSpecificationRouteRequestPolicies;
import * as AuthenticationPolicy from "./authentication-policy";
export import AuthenticationPolicy = AuthenticationPolicy.AuthenticationPolicy;
import * as ChangeDeploymentCompartmentDetails from "./change-deployment-compartment-details";
export import ChangeDeploymentCompartmentDetails = ChangeDeploymentCompartmentDetails.ChangeDeploymentCompartmentDetails;
import * as ChangeGatewayCompartmentDetails from "./change-gateway-compartment-details";
export import ChangeGatewayCompartmentDetails = ChangeGatewayCompartmentDetails.ChangeGatewayCompartmentDetails;
import * as CorsPolicy from "./cors-policy";
export import CorsPolicy = CorsPolicy.CorsPolicy;
import * as CreateDeploymentDetails from "./create-deployment-details";
export import CreateDeploymentDetails = CreateDeploymentDetails.CreateDeploymentDetails;
import * as CreateGatewayDetails from "./create-gateway-details";
export import CreateGatewayDetails = CreateGatewayDetails.CreateGatewayDetails;
import * as Deployment from "./deployment";
export import Deployment = Deployment.Deployment;
import * as DeploymentCollection from "./deployment-collection";
export import DeploymentCollection = DeploymentCollection.DeploymentCollection;
import * as DeploymentSummary from "./deployment-summary";
export import DeploymentSummary = DeploymentSummary.DeploymentSummary;
import * as ExecutionLogPolicy from "./execution-log-policy";
export import ExecutionLogPolicy = ExecutionLogPolicy.ExecutionLogPolicy;
import * as Gateway from "./gateway";
export import Gateway = Gateway.Gateway;
import * as GatewayCollection from "./gateway-collection";
export import GatewayCollection = GatewayCollection.GatewayCollection;
import * as GatewaySummary from "./gateway-summary";
export import GatewaySummary = GatewaySummary.GatewaySummary;
import * as HeaderFieldSpecification from "./header-field-specification";
export import HeaderFieldSpecification = HeaderFieldSpecification.HeaderFieldSpecification;
import * as RateLimitingPolicy from "./rate-limiting-policy";
export import RateLimitingPolicy = RateLimitingPolicy.RateLimitingPolicy;
import * as RouteAuthorizationPolicy from "./route-authorization-policy";
export import RouteAuthorizationPolicy = RouteAuthorizationPolicy.RouteAuthorizationPolicy;
import * as UpdateDeploymentDetails from "./update-deployment-details";
export import UpdateDeploymentDetails = UpdateDeploymentDetails.UpdateDeploymentDetails;
import * as UpdateGatewayDetails from "./update-gateway-details";
export import UpdateGatewayDetails = UpdateGatewayDetails.UpdateGatewayDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLog from "./work-request-log";
export import WorkRequestLog = WorkRequestLog.WorkRequestLog;
import * as WorkRequestLogCollection from "./work-request-log-collection";
export import WorkRequestLogCollection = WorkRequestLogCollection.WorkRequestLogCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as AnonymousRouteAuthorizationPolicy from "./anonymous-route-authorization-policy";
export import AnonymousRouteAuthorizationPolicy = AnonymousRouteAuthorizationPolicy.AnonymousRouteAuthorizationPolicy;
import * as AnyOfRouteAuthorizationPolicy from "./any-of-route-authorization-policy";
export import AnyOfRouteAuthorizationPolicy = AnyOfRouteAuthorizationPolicy.AnyOfRouteAuthorizationPolicy;
import * as AuthenticationOnlyRouteAuthorizationPolicy from "./authentication-only-route-authorization-policy";
export import AuthenticationOnlyRouteAuthorizationPolicy = AuthenticationOnlyRouteAuthorizationPolicy.AuthenticationOnlyRouteAuthorizationPolicy;
import * as CustomAuthenticationPolicy from "./custom-authentication-policy";
export import CustomAuthenticationPolicy = CustomAuthenticationPolicy.CustomAuthenticationPolicy;
import * as HTTPBackend from "./h-tt-pbackend";
export import HTTPBackend = HTTPBackend.HTTPBackend;
import * as OracleFunctionBackend from "./oracle-function-backend";
export import OracleFunctionBackend = OracleFunctionBackend.OracleFunctionBackend;
import * as StockResponseBackend from "./stock-response-backend";
export import StockResponseBackend = StockResponseBackend.StockResponseBackend;
