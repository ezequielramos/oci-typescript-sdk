/**
 *
 *
 * OpenAPI spec version:
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/GetResourceAvailability.ts.html |here} to see how to use GetResourceAvailabilityRequest.
 */
export interface GetResourceAvailabilityRequest extends common.BaseRequest {
  /**
   * The service name of the target quota.
   */
  "serviceName": string;
  /**
   * The limit name for which to fetch the data.
   */
  "limitName": string;
  /**
   * The OCID of the compartment for which data is being fetched.
   */
  "compartmentId": string;
  /**
   * This field is mandatory if the scopeType of the target resource limit is AD.
   * Otherwise, this field should be omitted.
   * If the above requirements are not met, the API will return a 400 - InvalidParameter response.
   *
   */
  "availabilityDomain"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
