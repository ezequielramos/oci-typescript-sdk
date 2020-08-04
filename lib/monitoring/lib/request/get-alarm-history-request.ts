/**
 *
 *
 * OpenAPI spec version: 20180401
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
export interface GetAlarmHistoryRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of an alarm.
   *
   */
  "alarmId": string;
  /**
   * Customer part of the request identifier token. If you need to contact Oracle about a particular
   * request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
  /**
 * The type of history entries to retrieve. State history (STATE_HISTORY) or state transition history (STATE_TRANSITION_HISTORY).
* If not specified, entries of both types are retrieved.
* <p>
Example: `STATE_HISTORY`
* 
 */
  "alarmHistorytype"?: GetAlarmHistoryRequest.AlarmHistorytype;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call. 
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Default: 1000
* <p>
Example: 500
* 
 */
  "limit"?: number;
  /**
 * A filter to return only alarm history entries with timestamps occurring on or after the specified date and time. Format defined by RFC3339.
* <p>
Example: `2019-01-01T01:00:00.789Z`
* 
 */
  "timestampGreaterThanOrEqualTo"?: Date;
  /**
 * A filter to return only alarm history entries with timestamps occurring before the specified date and time. Format defined by RFC3339.
* <p>
Example: `2019-01-02T01:00:00.789Z`
* 
 */
  "timestampLessThan"?: Date;
}

export namespace GetAlarmHistoryRequest {
  export enum AlarmHistorytype {
    StateHistory = "STATE_HISTORY",
    StateTransitionHistory = "STATE_TRANSITION_HISTORY"
  }
}
