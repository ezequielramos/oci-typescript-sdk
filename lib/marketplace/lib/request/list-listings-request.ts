/**
 *
 *
 * OpenAPI spec version: 20181001
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/marketplace/ListListings.ts.html |here} to see how to use ListListingsRequest.
 */
export interface ListListingsRequest extends common.BaseRequest {
  /**
   * The name of the listing.
   */
  "name"?: Array<string>;
  /**
   * The unique identifier for the listing.
   */
  "listingId"?: string;
  /**
   * Limit results to just this publisher.
   */
  "publisherId"?: string;
  /**
   * A filter to return only packages that match the given package type exactly.
   *
   */
  "packageType"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * How many records to return. Specify a value greater than zero and less than or equal to 1000. The default is 30.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   */
  "page"?: string;
  /**
   * The field to use to sort listed results. You can only specify one field to sort by.
   * `TIMERELEASED` displays results in descending order by default.
   * You can change your preference by specifying a different sort order.
   *
   */
  "sortBy"?: ListListingsRequest.SortBy;
  /**
   * The sort order to use, either `ASC` or `DESC`.
   */
  "sortOrder"?: ListListingsRequest.SortOrder;
  /**
   * Name of the product category or categories. If you specify multiple categories, then Marketplace returns any listing with
   * one or more matching categories.
   *
   */
  "category"?: Array<string>;
  /**
   * Name of the pricing type. If multiple pricing types are provided, then any listing with
   * one or more matching pricing models will be returned.
   *
   */
  "pricing"?: Array<model.PricingTypeEnum>;
  /**
   * Indicates whether to show only featured listings. If this is set to `false` or is omitted, then all listings will be returned.
   *
   */
  "isFeatured"?: boolean;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
}

export namespace ListListingsRequest {
  export enum SortBy {
    Timereleased = "TIMERELEASED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
