/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/ListPublicIps.ts.html |here} to see how to use ListPublicIpsRequest.
 */
export interface ListPublicIpsRequest extends common.BaseRequest {
  /**
   * Whether the public IP is regional or specific to a particular availability domain.
   * <p>
   * `REGION`: The public IP exists within a region and is assigned to a regional entity
   * (such as a {@link NatGateway}), or can be assigned to a private IP
   * in any availability domain in the region. Reserved public IPs have `scope` = `REGION`, as do
   * ephemeral public IPs assigned to a regional entity.
   * <p>
   * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the entity
   * it's assigned to, which is specified by the `availabilityDomain` property of the public IP object.
   * Ephemeral public IPs that are assigned to private IPs have `scope` = `AVAILABILITY_DOMAIN`.
   *
   */
  "scope": ListPublicIpsRequest.Scope;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
 * The name of the availability domain.
* <p>
Example: `Uocm:PHX-AD-1`
* 
 */
  "availabilityDomain"?: string;
  /**
   * A filter to return only public IPs that match given lifetime.
   *
   */
  "lifetime"?: ListPublicIpsRequest.Lifetime;
  /**
   * A filter to return only resources that belong to the given public IP pool.
   *
   */
  "publicIpPoolId"?: string;
}

export namespace ListPublicIpsRequest {
  export enum Scope {
    Region = "REGION",
    AvailabilityDomain = "AVAILABILITY_DOMAIN"
  }

  export enum Lifetime {
    Ephemeral = "EPHEMERAL",
    Reserved = "RESERVED"
  }
}
