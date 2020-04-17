/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Details of Ticket created
 */
export interface CreateTicketDetails {
  /**
   * Severity of the ticket. eg: HIGH, MEDIUM
   */
  "severity": CreateTicketDetails.Severity;
  /**
   * List of resources
   */
  "resourceList"?: Array<model.CreateResourceDetails>;
  /**
   * Title of ticket
   */
  "title": string;
  /**
   * Details of ticket
   */
  "description": string;
}

export namespace CreateTicketDetails {
  export enum Severity {
    HIGHEST = "HIGHEST",
    HIGH = "HIGH",
    MEDIUM = "MEDIUM"
  }

  export function getJsonObj(obj: CreateTicketDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceList": obj.resourceList
          ? obj.resourceList.map(item => {
              return model.CreateResourceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
