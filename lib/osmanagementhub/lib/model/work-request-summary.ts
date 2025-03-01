/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

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
 * The summary of a work request.
 */
export interface WorkRequestSummary {
  /**
   * Type of the work request.
   */
  "operationType": model.WorkRequestOperationType;
  /**
   * Status of the work request.
   */
  "status": model.OperationStatus;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * A short description about the work request.
   */
  "description"?: string;
  /**
   * A short display name for the work request.
   */
  "displayName"?: string;
  /**
   * A progress or error message, if there is any.
   */
  "message"?: string;
  /**
   * The OCID of the parent work request.
   */
  "parentId"?: string;
  /**
   * The list of OCIDs for the child work requests.
   */
  "childrenId"?: Array<string>;
  /**
   * The OCID of the compartment that contains the work request. Work requests should be scoped to
   * the same compartment as the resource the work request affects. If the work request affects multiple resources,
   * and those resources are not in the same compartment, it is up to the service team to pick the primary
   * resource whose compartment should be used.
   *
   */
  "compartmentId": string;
  /**
   * The percentage complete of the operation tracked by this work request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * The date and time the request was created - as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeCreated": Date;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
