/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
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
 * The request details for retrieving aggregated data.
 * Use the query and optional properties to filter the returned results.
 *
 */
export interface SummarizeMetricsDataDetails {
  /**
    * The source service or application to use when searching for metric data points to aggregate.
* <p>
Example: `oci_computeagent`
* 
    */
  "namespace": string;
  /**
    * Resource group that you want to use as a filter. The specified resource group must exist in the definition of the posted metric. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* Avoid entering confidential information.
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
    * The Monitoring Query Language (MQL) expression to use when searching for metric data points to
* aggregate. The query must specify a metric, statistic, and interval. Supported values for 
* interval: `1m`-`60m` (also `1h`). You can optionally specify dimensions and grouping functions.
* Supported grouping functions: `grouping()`, `groupBy()`.
* <p>
Construct your query to avoid exceeding limits on returned data. See {@link MetricData}.
* <p>
For details about Monitoring Query Language (MQL), see 
* [Monitoring Query Language (MQL) Reference](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Reference/mql.htm).
* For available dimensions, review the metric definition for the supported service. 
* See [Supported Services](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).
* <p>
Example: `CpuUtilization[1m].sum()`
* 
    */
  "query": string;
  /**
    * The beginning of the time range to use when searching for metric data points.
* Format is defined by RFC3339. The response includes metric data points for the startTime.
* Default value: the timestamp 3 hours before the call was sent.
* <p>
Example: `2019-02-01T01:02:29.600Z`
* 
    */
  "startTime"?: Date;
  /**
    * The end of the time range to use when searching for metric data points.
* Format is defined by RFC3339. The response excludes metric data points for the endTime.
* Default value: the timestamp representing when the call was sent.
* <p>
Example: `2019-02-01T02:02:29.600Z`
* 
    */
  "endTime"?: Date;
  /**
    * The time between calculated aggregation windows. Use with the query interval to vary the
* frequency at which aggregated data points are returned. For example, use a query interval of
* 5 minutes with a resolution of 1 minute to retrieve five-minute aggregations at a one-minute
* frequency. The resolution must be equal or less than the interval in the query. The default
* resolution is 1m (one minute). Supported values: `1m`-`60m` (also `1h`).
* <p>
Example: `5m`
* 
    */
  "resolution"?: string;
}

export namespace SummarizeMetricsDataDetails {
  export function getJsonObj(obj: SummarizeMetricsDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}