/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration details for a certificate bundle.
 * For more information on SSL certficate configuration, see
 * [Managing SSL Certificates](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingcertificates.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CertificateDetails {
  /**
   * A passphrase for encrypted private keys. This is needed only if you created your certificate with a passphrase.
   *
   */
  "passphrase"?: string;
  /**
    * The SSL private key for your certificate, in PEM format.
* <p>
Example:
* <p>
    -----BEGIN RSA PRIVATE KEY-----
*     jO1O1v2ftXMsawM90tnXwc6xhOAT1gDBC9S8DKeca..JZNUgYYwNS0dP2UK
*     tmyN+XqVcAKw4HqVmChXy5b5msu8eIq3uc2NqNVtR..2ksSLukP8pxXcHyb
*     +sEwvM4uf8qbnHAqwnOnP9+KV9vds6BaH1eRA4CHz..n+NVZlzBsTxTlS16
*     /Umr7wJzVrMqK5sDiSu4WuaaBdqMGfL5hLsTjcBFD..Da2iyQmSKuVD4lIZ
*     ...
*     -----END RSA PRIVATE KEY-----
* 
    */
  "privateKey"?: string;
  /**
    * The public certificate, in PEM format, that you received from your SSL certificate provider.
* <p>
Example:
* <p>
    -----BEGIN CERTIFICATE-----
*     MIIC2jCCAkMCAg38MA0GCSqGSIb3DQEBBQUAMIGbMQswCQYDVQQGEwJKUDEOMAwG
*     A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxETAPBgNVBAoTCEZyYW5rNERE
*     MRgwFgYDVQQLEw9XZWJDZXJ0IFN1cHBvcnQxGDAWBgNVBAMTD0ZyYW5rNEREIFdl
*     YiBDQTEjMCEGCSqGSIb3DQEJARYUc3VwcG9ydEBmcmFuazRkZC5jb20wHhcNMTIw
*     ...
*     -----END CERTIFICATE-----
* 
    */
  "publicCertificate"?: string;
  /**
    * The Certificate Authority certificate, or any interim certificate, that you received from your SSL certificate provider.
* <p>
Example:
* <p>
    -----BEGIN CERTIFICATE-----
*     MIIEczCCA1ugAwIBAgIBADANBgkqhkiG9w0BAQQFAD..AkGA1UEBhMCR0Ix
*     EzARBgNVBAgTClNvbWUtU3RhdGUxFDASBgNVBAoTC0..0EgTHRkMTcwNQYD
*     VQQLEy5DbGFzcyAxIFB1YmxpYyBQcmltYXJ5IENlcn..XRpb24gQXV0aG9y
*     aXR5MRQwEgYDVQQDEwtCZXN0IENBIEx0ZDAeFw0wMD..TUwMTZaFw0wMTAy
*     ...
*     -----END CERTIFICATE-----
* 
    */
  "caCertificate"?: string;
  /**
    * A friendly name for the certificate bundle. It must be unique and it cannot be changed.
* Valid certificate bundle names include only alphanumeric characters, dashes, and underscores.
* Certificate bundle names cannot contain spaces. Avoid entering confidential information.
* <p>
Example: `example_certificate_bundle`
* 
    */
  "certificateName": string;
}

export namespace CertificateDetails {
  export function getJsonObj(obj: CertificateDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
