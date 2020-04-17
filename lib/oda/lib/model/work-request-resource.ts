/**
 * Digital Assistant Control Plane API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * A resource created or operated on by a work request.
 */
export interface WorkRequestResource {
  /**
   * The action to take against the Digital Assistant instance.
   */
  "resourceAction": WorkRequestResource.ResourceAction;
  /**
   * The resource type that the work request affects.
   */
  "resourceType": string;
  /**
   * The identifier of the Digital Assistant instance that is the subject of the request.
   */
  "resourceId": string;
  /**
   * The current state of the work request. The `SUCCEEDED`, `FAILED`, AND `CANCELED` states
   * correspond to the action being performed.
   *
   */
  "status": WorkRequestResource.Status;
  /**
   * Short message providing more detail for the current status. For example, if an operation fails
   * this may include information about the reason for the failure and a possible resolution.
   *
   */
  "statusMessage"?: string;
  /**
   * The URI path that the user can do a GET on to access the resource metadata.
   */
  "resourceUri"?: string;
}

export namespace WorkRequestResource {
  export enum ResourceAction {
    CREATE = "CREATE",
    DELETE = "DELETE",
    PURGE = "PURGE",
    RECOVER = "RECOVER",
    STOP = "STOP",
    START = "START",
    CHANGECOMPARTMENT = "CHANGE_COMPARTMENT",
    CREATEASSOCIATION = "CREATE_ASSOCIATION",
    DELETEASSOCIATION = "DELETE_ASSOCIATION",
    UPDATEENTITLEMENTSFORCACCT = "UPDATE_ENTITLEMENTS_FOR_CACCT",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Status {
    ACCEPTED = "ACCEPTED",
    INPROGRESS = "IN_PROGRESS",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
    CANCELING = "CANCELING",
    CANCELED = "CANCELED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
