/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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

/**
 * Update log object properties.
 */
export interface UpdateLogDetails {
  /**
   * The user-friendly display name. This must be unique within the enclosing resource,
   * and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Whether or not this resource is currently enabled.
   */
  "isEnabled"?: boolean;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Log retention duration in 30-day increments (30, 60, 90 and so on).
   */
  "retentionDuration"?: number;
  "configuration"?: model.UpdateConfigurationDetails;
}

export namespace UpdateLogDetails {
  export function getJsonObj(obj: UpdateLogDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.UpdateConfigurationDetails.getJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
}
