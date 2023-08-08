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
 * A summary of IPv6 CIDR block subranges currently allocated to a VCN.
 *
 */
export interface ByoipRangeVcnIpv6AllocationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the `ByoipRange` resource to which the CIDR block belongs.
   */
  "byoipRangeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the `ByoipRange`.
   *
   */
  "compartmentId"?: string;
  /**
   * The BYOIPv6 CIDR block range or subrange allocated to a VCN. This could be all or part of a BYOIPv6 CIDR block.
   * Each VCN allocation must be /64 or larger.
   *
   */
  "ipv6CidrBlock"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the `Vcn` resource to which the ByoipRange belongs.
   *
   */
  "vcnId"?: string;
}

export namespace ByoipRangeVcnIpv6AllocationSummary {
  export function getJsonObj(obj: ByoipRangeVcnIpv6AllocationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ByoipRangeVcnIpv6AllocationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
