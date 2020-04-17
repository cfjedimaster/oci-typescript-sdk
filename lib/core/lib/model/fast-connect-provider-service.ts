/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * A service offering from a supported provider. For more information,
 * see [FastConnect Overview](https://docs.cloud.oracle.com/Content/Network/Concepts/fastconnect.htm).
 *
 */
export interface FastConnectProviderService {
  /**
    * The location of the provider's website or portal. This portal is where you can get information
* about the provider service, create a virtual circuit connection from the provider to Oracle
* Cloud Infrastructure, and retrieve your provider service key for that virtual circuit connection.
* <p>
Example: `https://example.com`
* 
    */
  "description"?: string;
  /**
   * The OCID of the service offered by the provider.
   *
   */
  "id": string;
  /**
   * Who is responsible for managing the private peering BGP information.
   *
   */
  "privatePeeringBgpManagement": FastConnectProviderService.PrivatePeeringBgpManagement;
  /**
   * The name of the provider.
   *
   */
  "providerName": string;
  /**
   * The name of the service offered by the provider.
   *
   */
  "providerServiceName": string;
  /**
   * Who is responsible for managing the public peering BGP information.
   *
   */
  "publicPeeringBgpManagement": FastConnectProviderService.PublicPeeringBgpManagement;
  /**
   * An array of virtual circuit types supported by this service.
   *
   */
  "supportedVirtualCircuitTypes"?: Array<FastConnectProviderService.SupportedVirtualCircuitTypes>;
  /**
   * Who is responsible for managing the ASN information for the network at the other end
   * of the connection from Oracle.
   *
   */
  "customerAsnManagement": FastConnectProviderService.CustomerAsnManagement;
  /**
   * Who is responsible for managing the provider service key.
   *
   */
  "providerServiceKeyManagement": FastConnectProviderService.ProviderServiceKeyManagement;
  /**
   * Who is responsible for managing the virtual circuit bandwidth.
   *
   */
  "bandwithShapeManagement": FastConnectProviderService.BandwithShapeManagement;
  /**
   * Total number of cross-connect or cross-connect groups required for the virtual circuit.
   *
   */
  "requiredTotalCrossConnects": number;
  /**
   * Provider service type.
   *
   */
  "type": FastConnectProviderService.Type;
}

export namespace FastConnectProviderService {
  export enum PrivatePeeringBgpManagement {
    CUSTOMERMANAGED = "CUSTOMER_MANAGED",
    PROVIDERMANAGED = "PROVIDER_MANAGED",
    ORACLEMANAGED = "ORACLE_MANAGED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum PublicPeeringBgpManagement {
    CUSTOMERMANAGED = "CUSTOMER_MANAGED",
    PROVIDERMANAGED = "PROVIDER_MANAGED",
    ORACLEMANAGED = "ORACLE_MANAGED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum SupportedVirtualCircuitTypes {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum CustomerAsnManagement {
    CUSTOMERMANAGED = "CUSTOMER_MANAGED",
    PROVIDERMANAGED = "PROVIDER_MANAGED",
    ORACLEMANAGED = "ORACLE_MANAGED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum ProviderServiceKeyManagement {
    CUSTOMERMANAGED = "CUSTOMER_MANAGED",
    PROVIDERMANAGED = "PROVIDER_MANAGED",
    ORACLEMANAGED = "ORACLE_MANAGED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum BandwithShapeManagement {
    CUSTOMERMANAGED = "CUSTOMER_MANAGED",
    PROVIDERMANAGED = "PROVIDER_MANAGED",
    ORACLEMANAGED = "ORACLE_MANAGED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Type {
    LAYER2 = "LAYER2",
    LAYER3 = "LAYER3",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FastConnectProviderService): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}