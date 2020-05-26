/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * Interface for Upload manager upload Options
 */
export interface UploadOptions {
  /*
   * Length in Bytes for each part of a multi-part upload (except the last), default 20971520 (20MB). Using a large value is not recommended.
   */
  partSize: number;
  /*
   * Maximum number of concurrent uploads. Default is 5.
   */
  maxConcurrentUploads: number;
  /*
   * Allowed memory usage at any time during the upload process. Default is 100 MB.
   */
  allowedMemoryUsage: number;
  /*
   * Flag to indicate that MD5 should be set on every part of a multi-part upload.  The SDK will calculate the MD5 before uploading
   * for each part it creates.  Default is false.
   */
  enforceMD5: boolean;
  /*
   * Flag to indicate that uploads that fail should not be automatically aborted (client is reponsible for always cleaning up
   * failed uploads themselves).  Default is false.
   */
  isDisableAutoAbort: boolean;
}
