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
* A logical subdivision of a VCN. Each subnet
* consists of a contiguous range of IP addresses that do not overlap with
* other subnets in the VCN. Example: 172.16.1.0/24. For more information, see
* [Overview of the Networking Service](https://docs.cloud.oracle.com/Content/Network/Concepts/overview.htm) and
* [VCNs and Subnets](https://docs.cloud.oracle.com/Content/Network/Tasks/managingVCNs.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface Subnet {
  /**
    * The subnet's availability domain. This attribute will be null if this is a regional subnet
* instead of an AD-specific subnet. Oracle recommends creating regional subnets.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
    * The subnet's CIDR block.
* <p>
Example: `172.16.1.0/24`
* 
    */
  "cidrBlock": string;
  /**
   * The OCID of the compartment containing the subnet.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the set of DHCP options that the subnet uses.
   *
   */
  "dhcpOptionsId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * A DNS label for the subnet, used in conjunction with the VNIC's hostname and
* VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be an alphanumeric string that begins with a letter and is unique within the VCN.
* The value cannot be changed.
* <p>
The absence of this parameter means the Internet and VCN Resolver
* will not resolve hostnames of instances in this subnet.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
Example: `subnet123`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The subnet's Oracle ID (OCID).
   */
  "id": string;
  /**
    * For an IPv6-enabled subnet, this is the IPv6 CIDR block for the subnet's private IP address
* space. The subnet size is always /64. Note that IPv6 addressing is currently supported only
* in certain regions. See [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `2001:0db8:0123:1111::/64`
* 
    */
  "ipv6CidrBlock"?: string;
  /**
    * For an IPv6-enabled subnet, this is the IPv6 CIDR block for the subnet's public IP address
* space. The subnet size is always /64. The left 48 bits are inherited from the
* `ipv6PublicCidrBlock` of the {@link Vcn},
* and the remaining 16 bits are from the subnet's `ipv6CidrBlock`.
* <p>
Example: `2001:0db8:0123:1111::/64`
* 
    */
  "ipv6PublicCidrBlock"?: string;
  /**
    * For an IPv6-enabled subnet, this is the IPv6 address of the virtual router.
* <p>
Example: `2001:0db8:0123:1111:89ab:cdef:1234:5678`
* 
    */
  "ipv6VirtualRouterIp"?: string;
  /**
   * The subnet's current state.
   */
  "lifecycleState": Subnet.LifecycleState;
  /**
    * Whether learning mode is enabled for this subnet. The default is `false`.
* <p>
**Note:** When a subnet has learning mode enabled, only certain types
* of resources can be launched in the subnet.
* <p>
Example: `true`
* 
    */
  "isLearningEnabled"?: boolean;
  /**
    * The VLAN tag assigned to VNIC Attachments within this Subnet if the Subnet has learning enabled.
* <p>
**Note:** When a subnet does not have learning enabled, this field will be null.
* <p>
Example: `100`
* 
    */
  "vlanTag"?: number;
  /**
    * Whether VNICs within this subnet can have public IP addresses.
* Defaults to false, which means VNICs created in this subnet will
* automatically be assigned public IP addresses unless specified
* otherwise during instance launch or VNIC creation (with the
* `assignPublicIp` flag in
* {@link CreateVnicDetails}).
* If `prohibitPublicIpOnVnic` is set to true, VNICs created in this
* subnet cannot have public IP addresses (that is, it's a private
* subnet).
* <p>
Example: `true`
* 
    */
  "prohibitPublicIpOnVnic"?: boolean;
  /**
   * The OCID of the route table that the subnet uses.
   */
  "routeTableId": string;
  /**
   * The OCIDs of the security list or lists that the subnet uses. Remember
   * that security lists are associated *with the subnet*, but the
   * rules are applied to the individual VNICs in the subnet.
   *
   */
  "securityListIds"?: Array<string>;
  /**
    * The subnet's domain name, which consists of the subnet's DNS label,
* the VCN's DNS label, and the `oraclevcn.com` domain.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
Example: `subnet123.vcn1.oraclevcn.com`
* 
    */
  "subnetDomainName"?: string;
  /**
    * The date and time the subnet was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The OCID of the VCN the subnet is in.
   */
  "vcnId": string;
  /**
    * The IP address of the virtual router.
* <p>
Example: `10.0.14.1`
* 
    */
  "virtualRouterIp": string;
  /**
    * The MAC address of the virtual router.
* <p>
Example: `00:00:17:B6:4D:DD`
* 
    */
  "virtualRouterMac": string;
}

export namespace Subnet {
  export enum LifecycleState {
    PROVISIONING = "PROVISIONING",
    AVAILABLE = "AVAILABLE",
    TERMINATING = "TERMINATING",
    TERMINATED = "TERMINATED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Subnet): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
