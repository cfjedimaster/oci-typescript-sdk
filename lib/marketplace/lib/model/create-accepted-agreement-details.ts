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
 * The model for the parameters needed to accept a terms of use agreement.
 */
export interface CreateAcceptedAgreementDetails {
  /**
   * A display name for the accepted agreement.
   */
  "displayName"?: string;
  /**
   * The unique identifier for the compartment where the agreement will be accepted.
   */
  "compartmentId": string;
  /**
   * The unique identifier for the listing associated with the agreement.
   */
  "listingId": string;
  /**
   * The package version associated with the agreement.
   */
  "packageVersion": string;
  /**
   * The agreement to accept.
   */
  "agreementId": string;
  /**
   * A signature generated for the listing package agreements that you can retrieve
   * with [GetAgreement](https://docs.cloud.oracle.com/api/#/en/marketplace/20181001/Agreement/GetAgreement).
   *
   */
  "signature": string;
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

export namespace CreateAcceptedAgreementDetails {
  export function getJsonObj(obj: CreateAcceptedAgreementDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
