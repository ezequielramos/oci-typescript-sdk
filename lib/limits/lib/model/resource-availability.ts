/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type.
 * OpenAPI spec version: 20181025
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The availability of a given resource limit, based on the usage, tenant service limits, and quotas set for the tenancy.
 * Note: We cannot guarantee this data for all the limits. In such cases, these fields will be empty.
 *
 */
export interface ResourceAvailability {
  /**
   * The current usage in the given compartment. To support resources with fractional counts,
   * the field rounds up to the nearest integer.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "used"?: number;
  /**
   * The count of available resources. To support resources with fractional counts,
   * the field rounds down to the nearest integer.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "available"?: number;
  /**
   * The current most accurate usage in the given compartment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fractionalUsage"?: number;
  /**
   * The most accurate count of available resources.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fractionalAvailability"?: number;
  /**
   * The effective quota value for the given compartment. This field is only present if there is a
   * current quota policy affecting the current resource in the target region or availability domain.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "effectiveQuotaValue"?: number;
}

export namespace ResourceAvailability {
  export function getJsonObj(obj: ResourceAvailability): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceAvailability): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
