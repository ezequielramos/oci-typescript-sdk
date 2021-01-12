/**
 * Secrets Management API
 * API for managing secrets.
 * OpenAPI spec version: 20180608
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
 * Details for scheduling the deletion of the specified secret.
 */
export interface ScheduleSecretDeletionDetails {
  /**
   * An optional property indicating when to delete the secret version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeOfDeletion"?: Date;
}

export namespace ScheduleSecretDeletionDetails {
  export function getJsonObj(obj: ScheduleSecretDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
