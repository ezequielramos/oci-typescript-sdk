/**
 *
 *
 * OpenAPI spec version: 20181116
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/waas/ListCustomProtectionRules.ts.html |here} to see how to use ListCustomProtectionRulesRequest.
 */
export interface ListCustomProtectionRulesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment. This number is generated when the compartment is created.
   */
  "compartmentId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * The value by which custom protection rules are sorted in a paginated 'List' call. If unspecified, defaults to `timeCreated`.
   */
  "sortBy"?: ListCustomProtectionRulesRequest.SortBy;
  /**
   * The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to `DESC`.
   */
  "sortOrder"?: ListCustomProtectionRulesRequest.SortOrder;
  /**
   * Filter custom protection rules using a list of custom protection rule OCIDs.
   */
  "id"?: Array<string>;
  /**
   * Filter custom protection rules using a list of display names.
   */
  "displayName"?: Array<string>;
  /**
   * Filter Custom Protection rules using a list of lifecycle states.
   */
  "lifecycleState"?: Array<model.LifecycleStates>;
  /**
   * A filter that matches Custom Protection rules created on or after the specified date-time.
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that matches custom protection rules created before the specified date-time.
   */
  "timeCreatedLessThan"?: Date;
}

export namespace ListCustomProtectionRulesRequest {
  export enum SortBy {
    Id = "id",
    CompartmentId = "compartmentId",
    DisplayName = "displayName",
    ModSecurityRuleId = "modSecurityRuleId",
    TimeCreated = "timeCreated"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
