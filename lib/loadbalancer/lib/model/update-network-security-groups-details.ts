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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An object representing an updated list of network security groups (NSGs) that overwrites the existing list of NSGs.
 * *  If the load balancer has no NSGs configured, it uses the NSGs in this list.
 * *  If the load balancer has a list of NSGs configured, this list replaces the existing list.
 * *  If the load balancer has a list of NSGs configured and this list is empty, the operation removes all of the load balancer's NSG associations.
 */
export interface UpdateNetworkSecurityGroupsDetails {
  /**
    * An array of NSG [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with the load
* balancer.
* <p>
During the load balancer's creation, the service adds the new load balancer to the specified NSGs.
* <p>
The benefits of associating the load balancer with NSGs include:
* <p>
*  NSGs define network security rules to govern ingress and egress traffic for the load balancer.
* <p>
*  The network security rules of other resources can reference the NSGs associated with the load balancer
*    to ensure access.
* 
    */
  "networkSecurityGroupIds"?: Array<string>;
}

export namespace UpdateNetworkSecurityGroupsDetails {
  export function getJsonObj(obj: UpdateNetworkSecurityGroupsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
