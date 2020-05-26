/**
 * Application Migration Service API
 * API for the Application Migration service. Use this API to migrate applications from Oracle Cloud Infrastructure - Classic to Oracle Cloud Infrastructure.

 * OpenAPI spec version: 20191031
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AuthorizationDetails from "./authorization-details";
export import AuthorizationDetails = AuthorizationDetails.AuthorizationDetails;
import * as ChangeCompartmentDetails from "./change-compartment-details";
export import ChangeCompartmentDetails = ChangeCompartmentDetails.ChangeCompartmentDetails;
import * as ConfigurationField from "./configuration-field";
export import ConfigurationField = ConfigurationField.ConfigurationField;
import * as CreateMigrationDetails from "./create-migration-details";
export import CreateMigrationDetails = CreateMigrationDetails.CreateMigrationDetails;
import * as CreateSourceDetails from "./create-source-details";
export import CreateSourceDetails = CreateSourceDetails.CreateSourceDetails;
import * as DiscoveryDetails from "./discovery-details";
export import DiscoveryDetails = DiscoveryDetails.DiscoveryDetails;
import * as Migration from "./migration";
export import Migration = Migration.Migration;
import * as MigrationLifecycleStates from "./migration-lifecycle-states";
export import MigrationLifecycleStates = MigrationLifecycleStates.MigrationLifecycleStates;
import * as MigrationStates from "./migration-states";
export import MigrationStates = MigrationStates.MigrationStates;
import * as MigrationSummary from "./migration-summary";
export import MigrationSummary = MigrationSummary.MigrationSummary;
import * as MigrationTypes from "./migration-types";
export import MigrationTypes = MigrationTypes.MigrationTypes;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as Source from "./source";
export import Source = Source.Source;
import * as SourceApplication from "./source-application";
export import SourceApplication = SourceApplication.SourceApplication;
import * as SourceApplicationSummary from "./source-application-summary";
export import SourceApplicationSummary = SourceApplicationSummary.SourceApplicationSummary;
import * as SourceDetails from "./source-details";
export import SourceDetails = SourceDetails.SourceDetails;
import * as SourceLifecycleStates from "./source-lifecycle-states";
export import SourceLifecycleStates = SourceLifecycleStates.SourceLifecycleStates;
import * as SourceSummary from "./source-summary";
export import SourceSummary = SourceSummary.SourceSummary;
import * as SourceTypes from "./source-types";
export import SourceTypes = SourceTypes.SourceTypes;
import * as UpdateMigrationDetails from "./update-migration-details";
export import UpdateMigrationDetails = UpdateMigrationDetails.UpdateMigrationDetails;
import * as UpdateSourceDetails from "./update-source-details";
export import UpdateSourceDetails = UpdateSourceDetails.UpdateSourceDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as IcsDiscoveryDetails from "./ics-discovery-details";
export import IcsDiscoveryDetails = IcsDiscoveryDetails.IcsDiscoveryDetails;
import * as InternalAuthorizationDetails from "./internal-authorization-details";
export import InternalAuthorizationDetails = InternalAuthorizationDetails.InternalAuthorizationDetails;
import * as InternalSourceDetails from "./internal-source-details";
export import InternalSourceDetails = InternalSourceDetails.InternalSourceDetails;
import * as JcsDiscoveryDetails from "./jcs-discovery-details";
export import JcsDiscoveryDetails = JcsDiscoveryDetails.JcsDiscoveryDetails;
import * as OacDiscoveryDetails from "./oac-discovery-details";
export import OacDiscoveryDetails = OacDiscoveryDetails.OacDiscoveryDetails;
import * as OcicAuthorizationDetails from "./ocic-authorization-details";
export import OcicAuthorizationDetails = OcicAuthorizationDetails.OcicAuthorizationDetails;
import * as OcicSourceDetails from "./ocic-source-details";
export import OcicSourceDetails = OcicSourceDetails.OcicSourceDetails;
import * as OicDiscoveryDetails from "./oic-discovery-details";
export import OicDiscoveryDetails = OicDiscoveryDetails.OicDiscoveryDetails;
import * as PcsDiscoveryDetails from "./pcs-discovery-details";
export import PcsDiscoveryDetails = PcsDiscoveryDetails.PcsDiscoveryDetails;
import * as SoacsDiscoveryDetails from "./soacs-discovery-details";
export import SoacsDiscoveryDetails = SoacsDiscoveryDetails.SoacsDiscoveryDetails;
