/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Aggregated data for top processes on a specific date.
 */
export interface TopProcessesUsage {
  /**
   * Command line and arguments used to launch process.
   */
  "command": string;
  /**
   * Unique identifier for a process.
   */
  "processHash": string;
  /**
   * Process CPU usage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUsage": number;
  /**
   * Process CPU utilization percentage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUtilization": number;
  /**
   * Process memory utilization percentage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryUtilization": number;
  /**
   * Process virtual memory in Megabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "virtualMemoryInMBs": number;
  /**
   * Procress physical memory in Megabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalMemoryInMBs": number;
  /**
   * Maximum number of processes running at time of collection. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxProcessCount": number;
}

export namespace TopProcessesUsage {
  export function getJsonObj(obj: TopProcessesUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TopProcessesUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
