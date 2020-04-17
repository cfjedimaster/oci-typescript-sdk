/**
 * OSMS
 * OS Management as a Service API definition
 * OpenAPI spec version: 20190801
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddPackagesToSoftwareSourceRequest from "./add-packages-to-software-source-request";
export import AddPackagesToSoftwareSourceRequest = AddPackagesToSoftwareSourceRequest.AddPackagesToSoftwareSourceRequest;
import * as AttachChildSoftwareSourceToManagedInstanceRequest from "./attach-child-software-source-to-managed-instance-request";
export import AttachChildSoftwareSourceToManagedInstanceRequest = AttachChildSoftwareSourceToManagedInstanceRequest.AttachChildSoftwareSourceToManagedInstanceRequest;
import * as AttachManagedInstanceToManagedInstanceGroupRequest from "./attach-managed-instance-to-managed-instance-group-request";
export import AttachManagedInstanceToManagedInstanceGroupRequest = AttachManagedInstanceToManagedInstanceGroupRequest.AttachManagedInstanceToManagedInstanceGroupRequest;
import * as AttachParentSoftwareSourceToManagedInstanceRequest from "./attach-parent-software-source-to-managed-instance-request";
export import AttachParentSoftwareSourceToManagedInstanceRequest = AttachParentSoftwareSourceToManagedInstanceRequest.AttachParentSoftwareSourceToManagedInstanceRequest;
import * as ChangeManagedInstanceGroupCompartmentRequest from "./change-managed-instance-group-compartment-request";
export import ChangeManagedInstanceGroupCompartmentRequest = ChangeManagedInstanceGroupCompartmentRequest.ChangeManagedInstanceGroupCompartmentRequest;
import * as ChangeScheduledJobCompartmentRequest from "./change-scheduled-job-compartment-request";
export import ChangeScheduledJobCompartmentRequest = ChangeScheduledJobCompartmentRequest.ChangeScheduledJobCompartmentRequest;
import * as ChangeSoftwareSourceCompartmentRequest from "./change-software-source-compartment-request";
export import ChangeSoftwareSourceCompartmentRequest = ChangeSoftwareSourceCompartmentRequest.ChangeSoftwareSourceCompartmentRequest;
import * as CreateManagedInstanceGroupRequest from "./create-managed-instance-group-request";
export import CreateManagedInstanceGroupRequest = CreateManagedInstanceGroupRequest.CreateManagedInstanceGroupRequest;
import * as CreateScheduledJobRequest from "./create-scheduled-job-request";
export import CreateScheduledJobRequest = CreateScheduledJobRequest.CreateScheduledJobRequest;
import * as CreateSoftwareSourceRequest from "./create-software-source-request";
export import CreateSoftwareSourceRequest = CreateSoftwareSourceRequest.CreateSoftwareSourceRequest;
import * as DeleteManagedInstanceGroupRequest from "./delete-managed-instance-group-request";
export import DeleteManagedInstanceGroupRequest = DeleteManagedInstanceGroupRequest.DeleteManagedInstanceGroupRequest;
import * as DeleteScheduledJobRequest from "./delete-scheduled-job-request";
export import DeleteScheduledJobRequest = DeleteScheduledJobRequest.DeleteScheduledJobRequest;
import * as DeleteSoftwareSourceRequest from "./delete-software-source-request";
export import DeleteSoftwareSourceRequest = DeleteSoftwareSourceRequest.DeleteSoftwareSourceRequest;
import * as DetachChildSoftwareSourceFromManagedInstanceRequest from "./detach-child-software-source-from-managed-instance-request";
export import DetachChildSoftwareSourceFromManagedInstanceRequest = DetachChildSoftwareSourceFromManagedInstanceRequest.DetachChildSoftwareSourceFromManagedInstanceRequest;
import * as DetachManagedInstanceFromManagedInstanceGroupRequest from "./detach-managed-instance-from-managed-instance-group-request";
export import DetachManagedInstanceFromManagedInstanceGroupRequest = DetachManagedInstanceFromManagedInstanceGroupRequest.DetachManagedInstanceFromManagedInstanceGroupRequest;
import * as DetachParentSoftwareSourceFromManagedInstanceRequest from "./detach-parent-software-source-from-managed-instance-request";
export import DetachParentSoftwareSourceFromManagedInstanceRequest = DetachParentSoftwareSourceFromManagedInstanceRequest.DetachParentSoftwareSourceFromManagedInstanceRequest;
import * as GetErratumRequest from "./get-erratum-request";
export import GetErratumRequest = GetErratumRequest.GetErratumRequest;
import * as GetManagedInstanceRequest from "./get-managed-instance-request";
export import GetManagedInstanceRequest = GetManagedInstanceRequest.GetManagedInstanceRequest;
import * as GetManagedInstanceGroupRequest from "./get-managed-instance-group-request";
export import GetManagedInstanceGroupRequest = GetManagedInstanceGroupRequest.GetManagedInstanceGroupRequest;
import * as GetScheduledJobRequest from "./get-scheduled-job-request";
export import GetScheduledJobRequest = GetScheduledJobRequest.GetScheduledJobRequest;
import * as GetSoftwarePackageRequest from "./get-software-package-request";
export import GetSoftwarePackageRequest = GetSoftwarePackageRequest.GetSoftwarePackageRequest;
import * as GetSoftwareSourceRequest from "./get-software-source-request";
export import GetSoftwareSourceRequest = GetSoftwareSourceRequest.GetSoftwareSourceRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as InstallAllPackageUpdatesOnManagedInstanceRequest from "./install-all-package-updates-on-managed-instance-request";
export import InstallAllPackageUpdatesOnManagedInstanceRequest = InstallAllPackageUpdatesOnManagedInstanceRequest.InstallAllPackageUpdatesOnManagedInstanceRequest;
import * as InstallPackageOnManagedInstanceRequest from "./install-package-on-managed-instance-request";
export import InstallPackageOnManagedInstanceRequest = InstallPackageOnManagedInstanceRequest.InstallPackageOnManagedInstanceRequest;
import * as InstallPackageUpdateOnManagedInstanceRequest from "./install-package-update-on-managed-instance-request";
export import InstallPackageUpdateOnManagedInstanceRequest = InstallPackageUpdateOnManagedInstanceRequest.InstallPackageUpdateOnManagedInstanceRequest;
import * as ListAvailablePackagesForManagedInstanceRequest from "./list-available-packages-for-managed-instance-request";
export import ListAvailablePackagesForManagedInstanceRequest = ListAvailablePackagesForManagedInstanceRequest.ListAvailablePackagesForManagedInstanceRequest;
import * as ListAvailableSoftwareSourcesForManagedInstanceRequest from "./list-available-software-sources-for-managed-instance-request";
export import ListAvailableSoftwareSourcesForManagedInstanceRequest = ListAvailableSoftwareSourcesForManagedInstanceRequest.ListAvailableSoftwareSourcesForManagedInstanceRequest;
import * as ListAvailableUpdatesForManagedInstanceRequest from "./list-available-updates-for-managed-instance-request";
export import ListAvailableUpdatesForManagedInstanceRequest = ListAvailableUpdatesForManagedInstanceRequest.ListAvailableUpdatesForManagedInstanceRequest;
import * as ListManagedInstanceGroupsRequest from "./list-managed-instance-groups-request";
export import ListManagedInstanceGroupsRequest = ListManagedInstanceGroupsRequest.ListManagedInstanceGroupsRequest;
import * as ListManagedInstancesRequest from "./list-managed-instances-request";
export import ListManagedInstancesRequest = ListManagedInstancesRequest.ListManagedInstancesRequest;
import * as ListPackagesInstalledOnManagedInstanceRequest from "./list-packages-installed-on-managed-instance-request";
export import ListPackagesInstalledOnManagedInstanceRequest = ListPackagesInstalledOnManagedInstanceRequest.ListPackagesInstalledOnManagedInstanceRequest;
import * as ListScheduledJobsRequest from "./list-scheduled-jobs-request";
export import ListScheduledJobsRequest = ListScheduledJobsRequest.ListScheduledJobsRequest;
import * as ListSoftwareSourcePackagesRequest from "./list-software-source-packages-request";
export import ListSoftwareSourcePackagesRequest = ListSoftwareSourcePackagesRequest.ListSoftwareSourcePackagesRequest;
import * as ListSoftwareSourcesRequest from "./list-software-sources-request";
export import ListSoftwareSourcesRequest = ListSoftwareSourcesRequest.ListSoftwareSourcesRequest;
import * as ListUpcomingScheduledJobsRequest from "./list-upcoming-scheduled-jobs-request";
export import ListUpcomingScheduledJobsRequest = ListUpcomingScheduledJobsRequest.ListUpcomingScheduledJobsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RemovePackageFromManagedInstanceRequest from "./remove-package-from-managed-instance-request";
export import RemovePackageFromManagedInstanceRequest = RemovePackageFromManagedInstanceRequest.RemovePackageFromManagedInstanceRequest;
import * as RemovePackagesFromSoftwareSourceRequest from "./remove-packages-from-software-source-request";
export import RemovePackagesFromSoftwareSourceRequest = RemovePackagesFromSoftwareSourceRequest.RemovePackagesFromSoftwareSourceRequest;
import * as RunScheduledJobNowRequest from "./run-scheduled-job-now-request";
export import RunScheduledJobNowRequest = RunScheduledJobNowRequest.RunScheduledJobNowRequest;
import * as SearchSoftwarePackagesRequest from "./search-software-packages-request";
export import SearchSoftwarePackagesRequest = SearchSoftwarePackagesRequest.SearchSoftwarePackagesRequest;
import * as SkipNextScheduledJobExecutionRequest from "./skip-next-scheduled-job-execution-request";
export import SkipNextScheduledJobExecutionRequest = SkipNextScheduledJobExecutionRequest.SkipNextScheduledJobExecutionRequest;
import * as UpdateManagedInstanceGroupRequest from "./update-managed-instance-group-request";
export import UpdateManagedInstanceGroupRequest = UpdateManagedInstanceGroupRequest.UpdateManagedInstanceGroupRequest;
import * as UpdateScheduledJobRequest from "./update-scheduled-job-request";
export import UpdateScheduledJobRequest = UpdateScheduledJobRequest.UpdateScheduledJobRequest;
import * as UpdateSoftwareSourceRequest from "./update-software-source-request";
export import UpdateSoftwareSourceRequest = UpdateSoftwareSourceRequest.UpdateSoftwareSourceRequest;
