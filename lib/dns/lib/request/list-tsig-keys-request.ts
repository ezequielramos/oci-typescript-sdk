/**
 *
 *
 * OpenAPI spec version: 20180115
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dns/ListTsigKeys.ts.html |here} to see how to use ListTsigKeysRequest.
 */
export interface ListTsigKeysRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment the resource belongs to.
   */
  "compartmentId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a page of the collection.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The OCID of a resource.
   */
  "id"?: string;
  /**
   * The name of a resource.
   */
  "name"?: string;
  /**
   * The state of a resource.
   */
  "lifecycleState"?: string;
  /**
   * The field by which to sort TSIG keys. If unspecified, defaults to `timeCreated`.
   */
  "sortBy"?: ListTsigKeysRequest.SortBy;
  /**
   * The order to sort the resources.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Specifies to operate only on resources that have a matching DNS scope.
   *
   */
  "scope"?: model.Scope;
}

export namespace ListTsigKeysRequest {
  export enum SortBy {
    Name = "name",
    TimeCreated = "timeCreated"
  }
}
