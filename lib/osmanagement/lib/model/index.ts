/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddPackagesToSoftwareSourceDetails from "./add-packages-to-software-source-details";
export import AddPackagesToSoftwareSourceDetails = AddPackagesToSoftwareSourceDetails.AddPackagesToSoftwareSourceDetails;
import * as ApiError from "./api-error";
export import ApiError = ApiError.ApiError;
import * as ArchTypes from "./arch-types";
export import ArchTypes = ArchTypes.ArchTypes;
import * as AttachChildSoftwareSourceToManagedInstanceDetails from "./attach-child-software-source-to-managed-instance-details";
export import AttachChildSoftwareSourceToManagedInstanceDetails = AttachChildSoftwareSourceToManagedInstanceDetails.AttachChildSoftwareSourceToManagedInstanceDetails;
import * as AttachParentSoftwareSourceToManagedInstanceDetails from "./attach-parent-software-source-to-managed-instance-details";
export import AttachParentSoftwareSourceToManagedInstanceDetails = AttachParentSoftwareSourceToManagedInstanceDetails.AttachParentSoftwareSourceToManagedInstanceDetails;
import * as AvailableSoftwareSourceSummary from "./available-software-source-summary";
export import AvailableSoftwareSourceSummary = AvailableSoftwareSourceSummary.AvailableSoftwareSourceSummary;
import * as AvailableUpdateSummary from "./available-update-summary";
export import AvailableUpdateSummary = AvailableUpdateSummary.AvailableUpdateSummary;
import * as AvailableWindowsUpdateSummary from "./available-windows-update-summary";
export import AvailableWindowsUpdateSummary = AvailableWindowsUpdateSummary.AvailableWindowsUpdateSummary;
import * as ChangeManagedInstanceGroupCompartmentDetails from "./change-managed-instance-group-compartment-details";
export import ChangeManagedInstanceGroupCompartmentDetails = ChangeManagedInstanceGroupCompartmentDetails.ChangeManagedInstanceGroupCompartmentDetails;
import * as ChangeScheduledJobCompartmentDetails from "./change-scheduled-job-compartment-details";
export import ChangeScheduledJobCompartmentDetails = ChangeScheduledJobCompartmentDetails.ChangeScheduledJobCompartmentDetails;
import * as ChangeSoftwareSourceCompartmentDetails from "./change-software-source-compartment-details";
export import ChangeSoftwareSourceCompartmentDetails = ChangeSoftwareSourceCompartmentDetails.ChangeSoftwareSourceCompartmentDetails;
import * as ChecksumTypes from "./checksum-types";
export import ChecksumTypes = ChecksumTypes.ChecksumTypes;
import * as CreateManagedInstanceGroupDetails from "./create-managed-instance-group-details";
export import CreateManagedInstanceGroupDetails = CreateManagedInstanceGroupDetails.CreateManagedInstanceGroupDetails;
import * as CreateScheduledJobDetails from "./create-scheduled-job-details";
export import CreateScheduledJobDetails = CreateScheduledJobDetails.CreateScheduledJobDetails;
import * as CreateSoftwareSourceDetails from "./create-software-source-details";
export import CreateSoftwareSourceDetails = CreateSoftwareSourceDetails.CreateSoftwareSourceDetails;
import * as DetachChildSoftwareSourceFromManagedInstanceDetails from "./detach-child-software-source-from-managed-instance-details";
export import DetachChildSoftwareSourceFromManagedInstanceDetails = DetachChildSoftwareSourceFromManagedInstanceDetails.DetachChildSoftwareSourceFromManagedInstanceDetails;
import * as DetachParentSoftwareSourceFromManagedInstanceDetails from "./detach-parent-software-source-from-managed-instance-details";
export import DetachParentSoftwareSourceFromManagedInstanceDetails = DetachParentSoftwareSourceFromManagedInstanceDetails.DetachParentSoftwareSourceFromManagedInstanceDetails;
import * as Erratum from "./erratum";
export import Erratum = Erratum.Erratum;
import * as ErratumSummary from "./erratum-summary";
export import ErratumSummary = ErratumSummary.ErratumSummary;
import * as Id from "./id";
export import Id = Id.Id;
import * as InstallablePackageSummary from "./installable-package-summary";
export import InstallablePackageSummary = InstallablePackageSummary.InstallablePackageSummary;
import * as InstallationRequirements from "./installation-requirements";
export import InstallationRequirements = InstallationRequirements.InstallationRequirements;
import * as InstalledPackageSummary from "./installed-package-summary";
export import InstalledPackageSummary = InstalledPackageSummary.InstalledPackageSummary;
import * as InstalledWindowsUpdateSummary from "./installed-windows-update-summary";
export import InstalledWindowsUpdateSummary = InstalledWindowsUpdateSummary.InstalledWindowsUpdateSummary;
import * as IntervalTypes from "./interval-types";
export import IntervalTypes = IntervalTypes.IntervalTypes;
import * as IsEligibleForInstallation from "./is-eligible-for-installation";
export import IsEligibleForInstallation = IsEligibleForInstallation.IsEligibleForInstallation;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as ManagedInstance from "./managed-instance";
export import ManagedInstance = ManagedInstance.ManagedInstance;
import * as ManagedInstanceGroup from "./managed-instance-group";
export import ManagedInstanceGroup = ManagedInstanceGroup.ManagedInstanceGroup;
import * as ManagedInstanceGroupSummary from "./managed-instance-group-summary";
export import ManagedInstanceGroupSummary = ManagedInstanceGroupSummary.ManagedInstanceGroupSummary;
import * as ManagedInstanceSummary from "./managed-instance-summary";
export import ManagedInstanceSummary = ManagedInstanceSummary.ManagedInstanceSummary;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as OsFamilies from "./os-families";
export import OsFamilies = OsFamilies.OsFamilies;
import * as PackageName from "./package-name";
export import PackageName = PackageName.PackageName;
import * as PackageUpdateTypes from "./package-update-types";
export import PackageUpdateTypes = PackageUpdateTypes.PackageUpdateTypes;
import * as Recurrence from "./recurrence";
export import Recurrence = Recurrence.Recurrence;
import * as RemovePackagesFromSoftwareSourceDetails from "./remove-packages-from-software-source-details";
export import RemovePackagesFromSoftwareSourceDetails = RemovePackagesFromSoftwareSourceDetails.RemovePackagesFromSoftwareSourceDetails;
import * as ScheduleTypes from "./schedule-types";
export import ScheduleTypes = ScheduleTypes.ScheduleTypes;
import * as ScheduledJob from "./scheduled-job";
export import ScheduledJob = ScheduledJob.ScheduledJob;
import * as ScheduledJobSummary from "./scheduled-job-summary";
export import ScheduledJobSummary = ScheduledJobSummary.ScheduledJobSummary;
import * as SoftwarePackage from "./software-package";
export import SoftwarePackage = SoftwarePackage.SoftwarePackage;
import * as SoftwarePackageDependency from "./software-package-dependency";
export import SoftwarePackageDependency = SoftwarePackageDependency.SoftwarePackageDependency;
import * as SoftwarePackageFile from "./software-package-file";
export import SoftwarePackageFile = SoftwarePackageFile.SoftwarePackageFile;
import * as SoftwarePackageSearchSummary from "./software-package-search-summary";
export import SoftwarePackageSearchSummary = SoftwarePackageSearchSummary.SoftwarePackageSearchSummary;
import * as SoftwarePackageSummary from "./software-package-summary";
export import SoftwarePackageSummary = SoftwarePackageSummary.SoftwarePackageSummary;
import * as SoftwareSource from "./software-source";
export import SoftwareSource = SoftwareSource.SoftwareSource;
import * as SoftwareSourceId from "./software-source-id";
export import SoftwareSourceId = SoftwareSourceId.SoftwareSourceId;
import * as SoftwareSourceSummary from "./software-source-summary";
export import SoftwareSourceSummary = SoftwareSourceSummary.SoftwareSourceSummary;
import * as UpdateManagedInstanceGroupDetails from "./update-managed-instance-group-details";
export import UpdateManagedInstanceGroupDetails = UpdateManagedInstanceGroupDetails.UpdateManagedInstanceGroupDetails;
import * as UpdateScheduledJobDetails from "./update-scheduled-job-details";
export import UpdateScheduledJobDetails = UpdateScheduledJobDetails.UpdateScheduledJobDetails;
import * as UpdateSoftwareSourceDetails from "./update-software-source-details";
export import UpdateSoftwareSourceDetails = UpdateSoftwareSourceDetails.UpdateSoftwareSourceDetails;
import * as UpdateTypes from "./update-types";
export import UpdateTypes = UpdateTypes.UpdateTypes;
import * as WindowsUpdate from "./windows-update";
export import WindowsUpdate = WindowsUpdate.WindowsUpdate;
import * as WindowsUpdateSummary from "./windows-update-summary";
export import WindowsUpdateSummary = WindowsUpdateSummary.WindowsUpdateSummary;
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
