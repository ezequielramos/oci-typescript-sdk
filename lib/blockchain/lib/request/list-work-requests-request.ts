/**
 *
 *
 * OpenAPI spec version: 20191010
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/blockchain/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Unique service identifier.
   */
  "blockchainPlatformId": string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListWorkRequestsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMESTARTED is descending. Default order for WORKREQUESTID is ascending. If no value is specified TIMESTARTED is default.
   *
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The page at which to start retrieving results.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
}

export namespace ListWorkRequestsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeStarted = "timeStarted",
    WorkRequestId = "workRequestId"
  }
}
