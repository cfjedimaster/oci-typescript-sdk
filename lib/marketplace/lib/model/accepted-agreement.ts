/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model for an accepted terms of use agreement.
 */
export interface AcceptedAgreement {
  /**
   * The unique identifier for the acceptance of the agreement within a specific compartment.
   */
  "id"?: string;
  /**
   * A display name for the accepted agreement.
   */
  "displayName"?: string;
  /**
   * The unique identifier for the compartment where the agreement was accepted.
   */
  "compartmentId"?: string;
  /**
   * The unique identifier for the listing associated with the agreement.
   */
  "listingId"?: string;
  /**
   * The package version associated with the agreement.
   */
  "packageVersion"?: string;
  /**
   * The unique identifier for the terms of use agreement itself.
   */
  "agreementId"?: string;
  /**
   * The time the agreement was accepted.
   */
  "timeAccepted"?: Date;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see
* [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
}

export namespace AcceptedAgreement {
  export function getJsonObj(obj: AcceptedAgreement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
