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
* The properties that define an alarm.
* For information about alarms, see [Alarms Overview](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about endpoints and signing API requests, see
* [About the API](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm). For information about available SDKs and tools, see
* [SDKS and Other Tools](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/sdks.htm).
* 
*/
export interface Alarm {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the alarm.
   *
   */
  "id": string;
  /**
    * A user-friendly name for the alarm. It does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
This name is sent as the title for notifications related to this alarm.
* <p>
Example: `High CPU Utilization`
* 
    */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the metric
   * being evaluated by the alarm.
   *
   */
  "metricCompartmentId": string;
  /**
    * When true, the alarm evaluates metrics from all compartments and subcompartments. The parameter can
* only be set to true when metricCompartmentId is the tenancy OCID (the tenancy is the root compartment).
* A true value requires the user to have tenancy-level permissions. If this requirement is not met,
* then the call is rejected. When false, the alarm evaluates metrics from only the compartment specified
* in metricCompartmentId. Default is false.
* <p>
Example: `true`
* 
    */
  "metricCompartmentIdInSubtree"?: boolean;
  /**
    * The source service or application emitting the metric that is evaluated by the alarm.
* <p>
Example: `oci_computeagent`
* 
    */
  "namespace": string;
  /**
    * Resource group specified as a filter for metric data retrieved by the alarm. A resource group is a custom string that can be used as a filter. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* Avoid entering confidential information.
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
    * The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of 
* the Monitoring service interprets results for each returned time series as Boolean values, 
* where zero represents false and a non-zero value represents true. A true value means that the trigger 
* rule condition has been met. The query must specify a metric, statistic, interval, and trigger 
* rule (threshold or absence). Supported values for interval: `1m`-`60m` (also `1h`). You can optionally 
* specify dimensions and grouping functions. Supported grouping functions: `grouping()`, `groupBy()`. 
* For details about Monitoring Query Language (MQL), see [Monitoring Query Language (MQL) Reference](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Reference/mql.htm).
* For available dimensions, review the metric definition for the supported service. 
* See [Supported Services](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).
* <p>
Example of threshold alarm:
* <p>
  -----
* <p>
    CpuUtilization[1m]{availabilityDomain=\"cumS:PHX-AD-1\"}.groupBy(availabilityDomain).percentile(0.9) > 85
* <p>
  -----
* <p>
Example of absence alarm:
* <p>
  -----
* <p>
    CpuUtilization[1m]{availabilityDomain=\"cumS:PHX-AD-1\"}.absent()
* <p>
  -----
* 
    */
  "query": string;
  /**
   * The time between calculated aggregation windows for the alarm. Supported value: `1m`
   *
   */
  "resolution"?: string;
  /**
    * The period of time that the condition defined in the alarm must persist before the alarm state 
* changes from \"OK\" to \"FIRING\". For example, a value of 5 minutes means that the 
* alarm must persist in breaching the condition for five minutes before the alarm updates its 
* state to \"FIRING\". 
* <p>
The duration is specified as a string in ISO 8601 format (`PT10M` for ten minutes or `PT1H`
* for one hour). Minimum: PT1M. Maximum: PT1H. Default: PT1M.
* <p>
Under the default value of PT1M, the first evaluation that breaches the alarm updates the
* state to \"FIRING\". 
* <p>
The alarm updates its status to \"OK\" when the breaching condition has been clear for 
* the most recent minute. 
* <p>
Example: `PT5M`
* 
    */
  "pendingDuration"?: string;
  /**
    * The perceived type of response required when the alarm is in the \"FIRING\" state.
* <p>
Example: `CRITICAL`
* 
    */
  "severity": Alarm.Severity;
  /**
    * The human-readable content of the notification delivered. Oracle recommends providing guidance
* to operators for resolving the alarm condition. Consider adding links to standard runbook
* practices. Avoid entering confidential information.
* <p>
Example: `High CPU usage alert. Follow runbook instructions for resolution.`
* 
    */
  "body"?: string;
  /**
   * A list of destinations to which the notifications for this alarm will be delivered.
   * Each destination is represented by an [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) related to the supported destination service.
   * For example, a destination using the Notifications service is represented by a topic OCID.
   * Supported destination services: Notifications Service. Limit: One destination per supported destination service.
   *
   */
  "destinations": Array<string>;
  /**
    * The frequency at which notifications are re-submitted, if the alarm keeps firing without
* interruption. Format defined by ISO 8601. For example, `PT4H` indicates four hours.
* Minimum: PT1M. Maximum: P30D.
* <p>
Default value: null (notifications are not re-submitted).
* <p>
Example: `PT2H`
* 
    */
  "repeatNotificationDuration"?: string;
  /**
   * The configuration details for suppressing an alarm.
   *
   */
  "suppression"?: model.Suppression;
  /**
    * Whether the alarm is enabled.
* <p>
Example: `true`
* 
    */
  "isEnabled": boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The current lifecycle state of the alarm.
* <p>
Example: `DELETED`
* 
    */
  "lifecycleState": Alarm.LifecycleState;
  /**
    * The date and time the alarm was created. Format defined by RFC3339.
* <p>
Example: `2019-02-01T01:02:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the alarm was last updated. Format defined by RFC3339.
* <p>
Example: `2019-02-03T01:02:29.600Z`
* 
    */
  "timeUpdated": Date;
}

export namespace Alarm {
  export enum Severity {
    CRITICAL = "CRITICAL",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Alarm): object {
    const jsonObj = {
      ...obj,
      ...{
        "suppression": obj.suppression ? model.Suppression.getJsonObj(obj.suppression) : undefined
      }
    };

    return jsonObj;
  }
}
