/**
 *
 *
 * OpenAPI spec version: 20180530
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceAgentCommandExecutions.ts.html |here} to see how to use ListInstanceAgentCommandExecutionsRequest.
 */
export interface ListInstanceAgentCommandExecutionsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The OCID of the instance.
   */
  "instanceId": string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). Default order for
   * TIMECREATED is descending.
   * <p>
   **Note:** In general, some \"List\" operations (for example, `ListInstances`) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListInstanceAgentCommandExecutionsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListInstanceAgentCommandExecutionsRequest.SortOrder;
  /**
   * A filter to only return resources that match the given lifecycle state. The state value is case-insensitive.
   */
  "lifecycleState"?: string;
}

export namespace ListInstanceAgentCommandExecutionsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
