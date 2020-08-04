/**
 *
 *
 * OpenAPI spec version: 20200430
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
export interface ListPublishedObjectsRequest extends common.BaseRequest {
  /**
   * DIS workspace id
   */
  "workspaceId": string;
  /**
   * DIS application key
   */
  "applicationKey": string;
  /**
   * This parameter allows users to specify which fields to get for an object.
   */
  "fields"?: Array<string>;
  /**
   * This filter parameter can be used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * This filter parameter can be used to filter by the identifier of the published object.
   *
   */
  "identifier"?: Array<string>;
  /**
   * This filter parameter can be used to filter by the object type of the object.
   * This parameter can be suffixed with an optional filter operator InSubtree.
   * For DIS APIs we will filter based on type Task.
   *
   */
  "type"?: Array<string>;
  /**
   * This is used in association with type parameter. If value is true,
   * then type all sub types of the given type parameter is considered.
   * If value is false, then sub types are not considered. Default is false.
   *
   */
  "typeInSubtree"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * This parameter is used to control the sort order.  Supported values are `ASC` (ascending) and `DESC` (descending).
   */
  "sortOrder"?: ListPublishedObjectsRequest.SortOrder;
  /**
   * This parameter allows users to specify a sort field.  Supported sort fields are `name`, `identifier`, `timeCreated`, and `timeUpdated`.  Default sort order is the descending order of `timeCreated` (most recently created objects at the top).  Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListPublishedObjectsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListPublishedObjectsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "TIME_CREATED",
    DisplayName = "DISPLAY_NAME"
  }
}
