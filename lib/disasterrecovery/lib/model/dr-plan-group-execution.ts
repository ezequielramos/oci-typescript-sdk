/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Summary information about a group execution in a DR Plan Execution.
 */
export interface DrPlanGroupExecution {
  /**
    * The unique id of the group. Must not be modified by user.
* <p>
Example: `sgid1.group..&lt;unique_id&gt;`
* 
    */
  "groupId": string;
  /**
   * The plan group type.
   *
   */
  "type": model.DrPlanGroupType;
  /**
    * The display name of group that was executed.
* <p>
Example: `DATABASE_SWITCHOVER`
* 
    */
  "displayName": string;
  /**
   * The status of the group execution.
   *
   */
  "status": model.DrPlanGroupExecutionStatus;
  /**
    * Additional details about the group execution status.
* <p>
Example: `A total of three steps failed in the group`
* 
    */
  "statusDetails"?: string;
  /**
    * The time at which group execution began. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeStarted"?: Date;
  /**
    * The time at which group execution ended. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeEnded"?: Date;
  /**
    * The total duration in seconds taken to complete group execution.
* <p>
Example: `120`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "executionDurationInSec"?: number;
  /**
   * A list of details of each step executed in this group.
   *
   */
  "stepExecutions": Array<model.DrPlanStepExecution>;
}

export namespace DrPlanGroupExecution {
  export function getJsonObj(obj: DrPlanGroupExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepExecutions": obj.stepExecutions
          ? obj.stepExecutions.map(item => {
              return model.DrPlanStepExecution.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanGroupExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepExecutions": obj.stepExecutions
          ? obj.stepExecutions.map(item => {
              return model.DrPlanStepExecution.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
