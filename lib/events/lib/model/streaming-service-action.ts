/**
 * Events API
 * API for the Events Service. Use this API to manage rules and actions that create automation 
in your tenancy. For more information, see [Overview of Events](/iaas/Content/Events/Concepts/eventsoverview.htm).

 * OpenAPI spec version: 20181201
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
 * An action that delivers to an Oracle Stream Service stream.
 */
export interface StreamingServiceAction extends model.Action {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the stream to which messages are delivered.
   *
   */
  "streamId"?: string;

  "actionType": string;
}

export namespace StreamingServiceAction {
  export function getJsonObj(obj: StreamingServiceAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as StreamingServiceAction)),
      ...{}
    };

    return jsonObj;
  }
  export const actionType = "OSS";
}
