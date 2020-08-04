/**
 *
 *
 * OpenAPI spec version: 20180501
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
export interface CreatePingMonitorRequest extends common.BaseRequest {
  /**
   * The configuration details for creating a ping monitor.
   */
  "createPingMonitorDetails": model.CreatePingMonitorDetails;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request that can be retried in case of a timeout or
   * server error without risk of executing the same action again. Retry tokens expire after 24
   * hours.
   * <p>
   *Note:* Retry tokens can be invalidated before the 24 hour time limit due to conflicting
   * operations, such as a resource being deleted or purged from the system.
   *
   */
  "opcRetryToken"?: string;
}
