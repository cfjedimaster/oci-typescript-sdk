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
 * A description of the work request's status.
 */
export interface WorkRequestSummary {
  /**
   * The identifier of the work request.
   */
  "id": string;
  /**
   * The identifier of the compartment that contains the work request.
   */
  "compartmentId": string;
  /**
   * The identifier of the Digital Assistant instance to which this work request pertains.
   */
  "odaInstanceId": string;
  /**
   * The type of the operation that's associated with the work request.
   */
  "requestAction": WorkRequestSummary.RequestAction;
  /**
   * The status of current work request.
   */
  "status": WorkRequestSummary.Status;
  /**
   * The resources that this work request affects.
   */
  "resources": Array<model.WorkRequestResource>;
}

export namespace WorkRequestSummary {
  export enum RequestAction {
    CREATEODAINSTANCE = "CREATE_ODA_INSTANCE",
    UPGRADEODAINSTANCE = "UPGRADE_ODA_INSTANCE",
    DELETEODAINSTANCE = "DELETE_ODA_INSTANCE",
    PURGEODAINSTANCE = "PURGE_ODA_INSTANCE",
    RECOVERODAINSTANCE = "RECOVER_ODA_INSTANCE",
    STOPODAINSTANCE = "STOP_ODA_INSTANCE",
    STARTODAINSTANCE = "START_ODA_INSTANCE",
    CHANGEODAINSTANCECOMPARTMENT = "CHANGE_ODA_INSTANCE_COMPARTMENT",
    CREATEASSOCIATION = "CREATE_ASSOCIATION",
    DELETEASSOCIATION = "DELETE_ASSOCIATION",
    UPDATEENTITLEMENTSFORCACCT = "UPDATE_ENTITLEMENTS_FOR_CACCT",
    LOOKUPODAINSTANCESFORCACCT = "LOOKUP_ODA_INSTANCES_FOR_CACCT",

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

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
