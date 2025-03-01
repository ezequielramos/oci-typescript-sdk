/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
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
 * A timestamp-value pair returned for the specified request.
 *
 */
export interface AggregatedDatapoint {
  /**
    * The date and time associated with the value of this data point. Format defined by RFC3339.
* <p>
Example: `2019-02-01T01:02:29.600Z`
* 
    */
  "timestamp": Date;
  /**
    * Numeric value of the metric.
* <p>
Example: `10.4`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "value": number;
}

export namespace AggregatedDatapoint {
  export function getJsonObj(obj: AggregatedDatapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AggregatedDatapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
