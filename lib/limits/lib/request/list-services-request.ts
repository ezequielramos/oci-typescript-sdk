/**
 *
 *
 * OpenAPI spec version:
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListServicesRequest extends common.BaseRequest {
  /**
   * The OCID of the parent compartment (remember that the tenancy is simply the root compartment).
   *
   */
  "compartmentId": string;
  /**
   * The field to sort by.
   *
   */
  "sortBy"?: ListServicesRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'. By default it will be ascending.
   *
   */
  "sortOrder"?: ListServicesRequest.SortOrder;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListServicesRequest {
  export enum SortBy {
    Name = "name",
    Description = "description"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
