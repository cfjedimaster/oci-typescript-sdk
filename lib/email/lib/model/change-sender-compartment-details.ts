/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API. If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
 * into which the resource should be moved.
 *
 */
export interface ChangeSenderCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * into which the sender should be moved.
   *
   */
  "compartmentId": string;
}

export namespace ChangeSenderCompartmentDetails {
  export function getJsonObj(obj: ChangeSenderCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
