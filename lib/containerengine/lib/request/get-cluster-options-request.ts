/**
 *
 *
 * OpenAPI spec version: 20180222
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/containerengine/GetClusterOptions.ts.html |here} to see how to use GetClusterOptionsRequest.
 */
export interface GetClusterOptionsRequest extends common.BaseRequest {
  /**
   * The id of the option set to retrieve. Only \"all\" is supported.
   */
  "clusterOptionId": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
