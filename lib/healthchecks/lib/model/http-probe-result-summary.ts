/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * The results returned by running an HTTP probe.  All times and durations are
 * returned in milliseconds. All times are relative to the POSIX epoch
 * (1970-01-01T00:00Z). Time properties conform to W3C Resource Timing.
 * For more information, see
 * [PerformanceResourceTiming](https://w3c.github.io/resource-timing/#sec-resource-timing)
 * interface.
 *
 */
export interface HttpProbeResultSummary {
  /**
   * A value identifying this specific probe result. The key is only unique within
   * the results of its probe configuration. The key may be reused after 90 days.
   *
   */
  "key"?: string;
  /**
   * The OCID of the monitor or on-demand probe responsible for creating this result.
   *
   */
  "probeConfigurationId"?: string;
  /**
   * The date and time the probe was executed, expressed in milliseconds since the
   * POSIX epoch. This field is defined by the PerformanceResourceTiming interface
   * of the W3C Resource Timing specification. For more information, see
   * [Resource Timing](https://w3c.github.io/resource-timing/#sec-resource-timing).
   *
   */
  "startTime"?: number;
  /**
   * The target hostname or IP address of the probe.
   */
  "target"?: string;
  /**
   * The name of the vantage point that executed the probe.
   */
  "vantagePointName"?: string;
  /**
   * True if the probe did not complete before the configured `timeoutInSeconds` value.
   *
   */
  "isTimedOut"?: boolean;
  /**
   * True if the probe result is determined to be healthy based on probe
   * type-specific criteria.  For HTTP probes, a probe result is considered
   * healthy if the HTTP response code is greater than or equal to 200 and
   * less than 300.
   *
   */
  "isHealthy"?: boolean;
  /**
   * The category of error if an error occurs executing the probe.
   * The `errorMessage` field provides a message with the error details.
   * * NONE - No error
   * * DNS - DNS errors
   * * TRANSPORT - Transport-related errors, for example a \"TLS certificate expired\" error.
   * * NETWORK - Network-related errors, for example a \"network unreachable\" error.
   * * SYSTEM - Internal system errors.
   *
   */
  "errorCategory"?: HttpProbeResultSummary.ErrorCategory;
  /**
   * The error information indicating why a probe execution failed.
   */
  "errorMessage"?: string;
  "protocol"?: model.HttpProbeProtocol;
  "connection"?: model.TcpConnection;
  "dns"?: model.DNS;
  /**
   * The HTTP response status code.
   */
  "statusCode"?: number;
  /**
   * The time immediately before the vantage point starts the domain name lookup for
   * the resource.
   *
   */
  "domainLookupStart"?: number;
  /**
   * The time immediately before the vantage point finishes the domain name lookup for
   * the resource.
   *
   */
  "domainLookupEnd"?: number;
  /**
   * The time immediately before the vantage point starts establishing the connection
   * to the server to retrieve the resource.
   *
   */
  "connectStart"?: number;
  /**
   * The time immediately before the vantage point starts the handshake process to
   * secure the current connection.
   *
   */
  "secureConnectionStart"?: number;
  /**
   * The time immediately after the vantage point finishes establishing the connection
   * to the server to retrieve the resource.
   *
   */
  "connectEnd"?: number;
  /**
   * The time immediately before the vantage point starts to fetch the resource.
   *
   */
  "fetchStart"?: number;
  /**
   * The time immediately before the vantage point starts requesting the resource from
   * the server.
   *
   */
  "requestStart"?: number;
  /**
   * The time immediately after the vantage point's HTTP parser receives the first byte
   * of the response.
   *
   */
  "responseStart"?: number;
  /**
   * The time immediately after the vantage point receives the last byte of the response
   * or immediately before the transport connection is closed, whichever comes first.
   *
   */
  "responseEnd"?: number;
  /**
   * The total duration from start of request until response is fully consumed or the
   * connection is closed.
   *
   */
  "duration"?: number;
  /**
   * The size, in octets, of the payload body prior to removing any applied
   * content-codings.
   *
   */
  "encodedBodySize"?: number;
}

export namespace HttpProbeResultSummary {
  export enum ErrorCategory {
    NONE = "NONE",
    DNS = "DNS",
    TRANSPORT = "TRANSPORT",
    NETWORK = "NETWORK",
    SYSTEM = "SYSTEM",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HttpProbeResultSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "connection": obj.connection ? model.TcpConnection.getJsonObj(obj.connection) : undefined,
        "dns": obj.dns ? model.DNS.getJsonObj(obj.dns) : undefined
      }
    };

    return jsonObj;
  }
}
