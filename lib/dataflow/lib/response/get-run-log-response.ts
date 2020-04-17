/**
 *
 *
 * OpenAPI spec version: 20200129
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
import stream = require("stream");

export interface GetRunLogResponse {
  /**
   * Unique Oracle-assigned identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * For optimistic concurrency control.
   * See [ETags for Optimistic Concurrency Control](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#eleven).
   *
   */
  "etag": string;
  /**
   * Indicates the size of the data as described in RFC 2616, section 14.13.
   *
   */
  "contentLength": number;
  /**
   * Specifies the media type of the underlying data as described in RFC 2616, section 14.17.
   *
   */
  "contentType": string;
  /**
   * Indicates the encoding of the data, as described in RFC 2616, section 14.11.
   *
   */
  "contentEncoding": string;
  /**
   * The user-defined metadata for the log.
   *
   */
  "opcMeta": { [key: string]: string };
  /**
   * The returned stream.Readable | ReadableStream instance.
   */
  "value": stream.Readable | ReadableStream;
}
