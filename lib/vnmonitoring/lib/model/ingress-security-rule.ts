/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A rule for allowing inbound IP packets.
 */
export interface IngressSecurityRule {
  "icmpOptions"?: model.IcmpOptions;
  /**
   * A stateless rule allows traffic in one direction. Remember to add a corresponding
   * stateless rule in the other direction if you need to support bidirectional traffic. For
   * example, if ingress traffic allows TCP destination port 80, there should be an egress
   * rule to allow TCP source port 80. Defaults to false, which means the rule is stateful
   * and a corresponding rule is not necessary for bidirectional traffic.
   *
   */
  "isStateless"?: boolean;
  /**
   * The transport protocol. Specify either `all` or an IPv4 protocol number as
   * defined in
   * [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
   * Options are supported only for ICMP (\"1\"), TCP (\"6\"), UDP (\"17\"), and ICMPv6 (\"58\").
   *
   */
  "protocol": string;
  /**
    * Conceptually, this is the range of IP addresses that a packet coming into the instance
* can come from.
* <p>
Allowed values:
* <p>
  * IP address range in CIDR notation. For example: `192.168.1.0/24` or `2001:0db8:0123:45::/56`.
*     IPv6 addressing is supported for all commercial and government regions. See
*     [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
  * The `cidrBlock` value for a {@link Service}, if you're
*     setting up a security list rule for traffic coming from a particular `Service` through
*     a service gateway. For example: `oci-phx-objectstorage`.
* 
    */
  "source": string;
  /**
   * Type of source for the rule. The default is `CIDR_BLOCK`.
   * <p>
   * `CIDR_BLOCK`: If the rule's `source` is an IP address range in CIDR notation.
   * <p>
   * `SERVICE_CIDR_BLOCK`: If the rule's `source` is the `cidrBlock` value for a
   *     {@link Service} (the rule is for traffic coming from a
   *     particular `Service` through a service gateway).
   *
   */
  "sourceType"?: IngressSecurityRule.SourceType;
  "tcpOptions"?: model.TcpOptions;
  "udpOptions"?: model.UdpOptions;
  /**
   * An optional description of your choice for the rule.
   *
   */
  "description"?: string;
}

export namespace IngressSecurityRule {
  export enum SourceType {
    CidrBlock = "CIDR_BLOCK",
    ServiceCidrBlock = "SERVICE_CIDR_BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IngressSecurityRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions ? model.IcmpOptions.getJsonObj(obj.icmpOptions) : undefined,

        "tcpOptions": obj.tcpOptions ? model.TcpOptions.getJsonObj(obj.tcpOptions) : undefined,
        "udpOptions": obj.udpOptions ? model.UdpOptions.getJsonObj(obj.udpOptions) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngressSecurityRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions
          ? model.IcmpOptions.getDeserializedJsonObj(obj.icmpOptions)
          : undefined,

        "tcpOptions": obj.tcpOptions
          ? model.TcpOptions.getDeserializedJsonObj(obj.tcpOptions)
          : undefined,
        "udpOptions": obj.udpOptions
          ? model.UdpOptions.getDeserializedJsonObj(obj.udpOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
