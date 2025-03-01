/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListScheduledJobs.ts.html |here} to see how to use ListScheduledJobsRequest.
 */
export interface ListScheduledJobsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment that contains the resources to list.
   */
  "compartmentId"?: string;
  /**
 * A user-friendly name. Does not have to be unique, and it's changeable.
* <p>
Example: `My new resource`
* 
 */
  "displayName"?: string;
  /**
   * A filter to return resources that may partially match the given display name.
   */
  "displayNameContains"?: string;
  /**
   * A filter to return only resources their lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * The OCID of the managed instance for which to list resources.
   */
  "managedInstanceId"?: string;
  /**
   * The OCID of the managed instance group for which to list resources.
   */
  "managedInstanceGroupId"?: string;
  /**
   * The OCID of the managed compartment for which to list resources.
   */
  "managedCompartmentId"?: string;
  /**
   * The OCID of the lifecycle stage for which to list resources.
   */
  "lifecycleStageId"?: string;
  /**
   * The operation type for which to list resources.
   */
  "operationType"?: model.OperationTypes;
  /**
   * The schedule type for which to list resources.
   */
  "scheduleType"?: model.ScheduleTypes;
  /**
 * The start time after which to list all schedules, in ISO 8601 format.
* <p>
Example: 2017-07-14T02:40:00.000Z
* 
 */
  "timeStart"?: Date;
  /**
 * The cut-off time before which to list all upcoming schedules, in ISO 8601 format.
* <p>
Example: 2017-07-14T02:40:00.000Z
* 
 */
  "timeEnd"?: Date;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `3`
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: ListScheduledJobsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * If true, will only filter out restricted scheduled job.
   */
  "isRestricted"?: boolean;
  /**
   * The OCID of the scheduled job.
   */
  "id"?: string;
  /**
   * Default is false. When set to true ,returns results from {compartmentId} or any of its subcompartment.
   */
  "compartmentIdInSubtree"?: boolean;
}

export namespace ListScheduledJobsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
