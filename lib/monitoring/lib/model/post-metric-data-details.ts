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
 * An array of metric objects containing raw metric data points to be posted to the Monitoring service.
 *
 */
export interface PostMetricDataDetails {
  /**
   * A metric object containing raw metric data points to be posted to the Monitoring service.
   *
   */
  "metricData": Array<model.MetricDataDetails>;
  /**
    * Batch atomicity behavior. Requires either partial or full pass of input validation for
* metric objects in PostMetricData requests. The default value of NON_ATOMIC requires a
* partial pass: at least one metric object in the request must pass input validation, and
* any objects that failed validation are identified in the returned summary, along with
* their error messages. A value of ATOMIC requires a full pass: all metric objects in
* the request must pass input validation.
* <p>
Example: `NON_ATOMIC`
* 
    */
  "batchAtomicity"?: PostMetricDataDetails.BatchAtomicity;
}

export namespace PostMetricDataDetails {
  export enum BatchAtomicity {
    ATOMIC = "ATOMIC",
    NONATOMIC = "NON_ATOMIC"
  }

  export function getJsonObj(obj: PostMetricDataDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metricData": obj.metricData
          ? obj.metricData.map(item => {
              return model.MetricDataDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
