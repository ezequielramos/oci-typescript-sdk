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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/ListDedicatedVmHosts.ts.html |here} to see how to use ListDedicatedVmHostsRequest.
 */
export interface ListDedicatedVmHostsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
 * The name of the availability domain.
* <p>
Example: `Uocm:PHX-AD-1`
* 
 */
  "availabilityDomain"?: string;
  /**
   * A filter to only return resources that match the given lifecycle state.
   */
  "lifecycleState"?: ListDedicatedVmHostsRequest.LifecycleState;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
  /**
   * The name for the instance's shape.
   *
   */
  "instanceShapeName"?: string;
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
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). Default order for
   * TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME
   * sort order is case sensitive.
   * <p>
   **Note:** In general, some \"List\" operations (for example, `ListInstances`) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListDedicatedVmHostsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListDedicatedVmHostsRequest.SortOrder;
}

export namespace ListDedicatedVmHostsRequest {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
