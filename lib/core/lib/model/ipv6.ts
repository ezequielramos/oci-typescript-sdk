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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* An *IPv6* is a conceptual term that refers to an IPv6 address and related properties.
* The `IPv6` object is the API representation of an IPv6.
* <p>
You can create and assign an IPv6 to any VNIC that is in an IPv6-enabled subnet in an
* IPv6-enabled VCN.
* <p>
**Note:** IPv6 addressing is currently supported only in certain regions. For important
* details about IPv6 addressing in a VCN, see [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* 
*/
export interface Ipv6 {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the IPv6.
   * This is the same as the VNIC's compartment.
   *
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
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid
   * entering confidential information.
   *
   */
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the IPv6.
   */
  "id": string;
  /**
    * The IPv6 address of the `IPv6` object. The address is within the private IPv6 CIDR block
* of the VNIC's subnet (see the `ipv6CidrBlock` attribute for the {@link Subnet}
* object).
* <p>
Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789`
* 
    */
  "ipAddress": string;
  /**
    * Whether the IPv6 can be used for internet communication. Allowed by default for an IPv6 in
* a public subnet. Never allowed for an IPv6 in a private subnet. If the value is `true`, the
* IPv6 uses its public IP address for internet communication.
* <p>
Example: `true`
* 
    */
  "isInternetAccessAllowed"?: boolean;
  /**
   * The IPv6's current state.
   */
  "lifecycleState": Ipv6.LifecycleState;
  /**
    * The IPv6 address to be used for internet communication. The address is within the public
* IPv6 CIDR block of the VNIC's subnet (see the `ipv6PublicCidrBlock` attribute for the
* {@link Subnet} object).
* <p>
If your organization did NOT assign a custom IPv6 CIDR to the VCN for the private address
* space, Oracle provides the IPv6 CIDR and uses that same CIDR for the private and public
* address space. Therefore the `publicIpAddress` would be the same as the `ipAddress`.
* <p>
If your organization assigned a custom IPv6 CIDR to the VCN for the private address space,
* the right 80 bits of the IPv6 public IP (the subnet and address bits) are the same as for
* the `ipAddress`. But the left 48 bits are from the public IPv6 CIDR that Oracle assigned
* to the VCN.
* <p>
This is null if the IPv6 is created with `isInternetAccessAllowed` set to `false`.
* <p>
Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789`
* 
    */
  "publicIpAddress"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.
   */
  "subnetId": string;
  /**
    * The date and time the IPv6 was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VNIC the IPv6 is assigned to.
   * The VNIC and IPv6 must be in the same subnet.
   *
   */
  "vnicId": string;
}

export namespace Ipv6 {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Ipv6): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
