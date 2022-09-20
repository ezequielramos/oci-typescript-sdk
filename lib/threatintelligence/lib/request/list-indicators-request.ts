/**
 *
 *
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/ListIndicators.ts.html |here} to see how to use ListIndicatorsRequest.
 */
export interface ListIndicatorsRequest extends common.BaseRequest {
  /**
   * The OCID of the tenancy (root compartment) that is used to filter results.
   */
  "compartmentId": string;
  /**
   * The threat type of entites to be returned. To filter for multiple threat types, repeat this parameter.
   */
  "threatTypeName"?: Array<string>;
  /**
   * The indicator type of entities to be returned.
   */
  "type"?: model.IndicatorType;
  /**
   * The indicator value of entities to be returned.
   */
  "value"?: string;
  /**
   * The minimum confidence score of entities to be returned.
   */
  "confidenceGreaterThanOrEqualTo"?: number;
  /**
   * The oldest update time of entities to be returned.
   */
  "timeUpdatedGreaterThanOrEqualTo"?: Date;
  /**
   * Return indicators updated before the provided time.
   */
  "timeUpdatedLessThan"?: Date;
  /**
   * The oldest last seen time of entities to be returned.
   */
  "timeLastSeenGreaterThanOrEqualTo"?: Date;
  /**
   * Return indicators last seen before the provided time.
   */
  "timeLastSeenLessThan"?: Date;
  /**
   * The oldest created/first seen time of entities to be returned.
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * Return indicators created/first seen before the provided time.
   */
  "timeCreatedLessThan"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one field to sort by may be provided.
   *
   */
  "sortBy"?: ListIndicatorsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListIndicatorsRequest {
  export enum SortBy {
    Confidence = "confidence",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    TimeLastSeen = "timeLastSeen"
  }
}
