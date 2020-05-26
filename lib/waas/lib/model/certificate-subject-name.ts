/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
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
 * The entity to be secured by the certificate.
 */
export interface CertificateSubjectName {
  /**
   * ISO 3166-1 alpha-2 code of the country where the organization is located. For a list of codes, see [ISO's website](https://www.iso.org/obp/ui/#search/code/).
   */
  "country"?: string;
  /**
   * The province where the organization is located.
   */
  "stateProvince"?: string;
  /**
   * The city in which the organization is located.
   */
  "locality"?: string;
  /**
   * The organization name.
   */
  "organization"?: string;
  /**
   * The field to differentiate between divisions within an organization.
   */
  "organizationalUnit"?: string;
  /**
   * The fully qualified domain name used for DNS lookups of the server.
   */
  "commonName"?: string;
  /**
   * The email address of the server's administrator.
   */
  "emailAddress"?: string;
}

export namespace CertificateSubjectName {
  export function getJsonObj(obj: CertificateSubjectName): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
