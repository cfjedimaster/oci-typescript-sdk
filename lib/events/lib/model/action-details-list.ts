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
 * A list of ActionDetails objects to create for a rule.
 */
export interface ActionDetailsList {
  /**
   * A list of one or more ActionDetails objects.
   *
   */
  "actions": Array<model.ActionDetails>;
}

export namespace ActionDetailsList {
  export function getJsonObj(obj: ActionDetailsList): object {
    const jsonObj = {
      ...obj,
      ...{
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.ActionDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
