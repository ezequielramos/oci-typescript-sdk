/**
 *
 *
 * OpenAPI spec version: 20160918
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

export interface ListRetentionRulesResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular
   * request, provide this request ID.
   *
   */
  "opcRequestId": string;
  /**
   * Echoes back the value passed in the opc-client-request-id header, for use by clients when debugging.
   */
  "opcClientRequestId": string;
  /**
   * Paginating a list of retention rules.
   * If the opc-next-page header appears in the response, it indicates that this is a partial list
   * of retention rules and there are additional rules to get. Include the value of this header as
   * the `page` parameter in a subsequent GET request to get the next set of retention rules.
   * Repeat this process to retrieve the entire list of retention rules.
   *
   */
  "opcNextPage": string;
  /**
   * The returned model.RetentionRuleCollection instance.
   */
  "retentionRuleCollection": model.RetentionRuleCollection;
}
