/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as Bucket from "./bucket";
export import Bucket = Bucket.Bucket;
import * as BucketSummary from "./bucket-summary";
export import BucketSummary = BucketSummary.BucketSummary;
import * as CommitMultipartUploadDetails from "./commit-multipart-upload-details";
export import CommitMultipartUploadDetails = CommitMultipartUploadDetails.CommitMultipartUploadDetails;
import * as CommitMultipartUploadPartDetails from "./commit-multipart-upload-part-details";
export import CommitMultipartUploadPartDetails = CommitMultipartUploadPartDetails.CommitMultipartUploadPartDetails;
import * as CopyObjectDetails from "./copy-object-details";
export import CopyObjectDetails = CopyObjectDetails.CopyObjectDetails;
import * as CreateBucketDetails from "./create-bucket-details";
export import CreateBucketDetails = CreateBucketDetails.CreateBucketDetails;
import * as CreateMultipartUploadDetails from "./create-multipart-upload-details";
export import CreateMultipartUploadDetails = CreateMultipartUploadDetails.CreateMultipartUploadDetails;
import * as CreatePreauthenticatedRequestDetails from "./create-preauthenticated-request-details";
export import CreatePreauthenticatedRequestDetails = CreatePreauthenticatedRequestDetails.CreatePreauthenticatedRequestDetails;
import * as ListObjects from "./list-objects";
export import ListObjects = ListObjects.ListObjects;
import * as MultipartUpload from "./multipart-upload";
export import MultipartUpload = MultipartUpload.MultipartUpload;
import * as MultipartUploadPartSummary from "./multipart-upload-part-summary";
export import MultipartUploadPartSummary = MultipartUploadPartSummary.MultipartUploadPartSummary;
import * as NamespaceMetadata from "./namespace-metadata";
export import NamespaceMetadata = NamespaceMetadata.NamespaceMetadata;
import * as ObjectLifecyclePolicy from "./object-lifecycle-policy";
export import ObjectLifecyclePolicy = ObjectLifecyclePolicy.ObjectLifecyclePolicy;
import * as ObjectLifecycleRule from "./object-lifecycle-rule";
export import ObjectLifecycleRule = ObjectLifecycleRule.ObjectLifecycleRule;
import * as ObjectNameFilter from "./object-name-filter";
export import ObjectNameFilter = ObjectNameFilter.ObjectNameFilter;
import * as ObjectSummary from "./object-summary";
export import ObjectSummary = ObjectSummary.ObjectSummary;
import * as ObjectVersionCollection from "./object-version-collection";
export import ObjectVersionCollection = ObjectVersionCollection.ObjectVersionCollection;
import * as ObjectVersionSummary from "./object-version-summary";
export import ObjectVersionSummary = ObjectVersionSummary.ObjectVersionSummary;
import * as PatternDetails from "./pattern-details";
export import PatternDetails = PatternDetails.PatternDetails;
import * as PreauthenticatedRequest from "./preauthenticated-request";
export import PreauthenticatedRequest = PreauthenticatedRequest.PreauthenticatedRequest;
import * as PreauthenticatedRequestSummary from "./preauthenticated-request-summary";
export import PreauthenticatedRequestSummary = PreauthenticatedRequestSummary.PreauthenticatedRequestSummary;
import * as PutObjectLifecyclePolicyDetails from "./put-object-lifecycle-policy-details";
export import PutObjectLifecyclePolicyDetails = PutObjectLifecyclePolicyDetails.PutObjectLifecyclePolicyDetails;
import * as RenameObjectDetails from "./rename-object-details";
export import RenameObjectDetails = RenameObjectDetails.RenameObjectDetails;
import * as RestoreObjectsDetails from "./restore-objects-details";
export import RestoreObjectsDetails = RestoreObjectsDetails.RestoreObjectsDetails;
import * as UpdateBucketDetails from "./update-bucket-details";
export import UpdateBucketDetails = UpdateBucketDetails.UpdateBucketDetails;
import * as UpdateNamespaceMetadataDetails from "./update-namespace-metadata-details";
export import UpdateNamespaceMetadataDetails = UpdateNamespaceMetadataDetails.UpdateNamespaceMetadataDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestResourceMetadataKey from "./work-request-resource-metadata-key";
export import WorkRequestResourceMetadataKey = WorkRequestResourceMetadataKey.WorkRequestResourceMetadataKey;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
