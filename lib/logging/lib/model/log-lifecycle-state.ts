/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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
 * The log object state. The states workflow is:
 *    1. *CREATING* Object is being created, backend service contacted.
 *    2. *ACTIVE* Logging is active.
 *    3. *UPDATING* Object configuration change requested, but the backend service has not confirmed the update.
 *    4. *INACTIVE* Logging is disabled.
 *    5. *DELETING* Log object is being deleted.
 *
 **/
export enum LogLifecycleState {
  Creating = "CREATING",
  Active = "ACTIVE",
  Updating = "UPDATING",
  Inactive = "INACTIVE",
  Deleting = "DELETING",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LogLifecycleState {
  export function getJsonObj(obj: LogLifecycleState): object {
    return { obj };
  }
}
