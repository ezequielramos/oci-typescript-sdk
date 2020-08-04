/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * The stack object. Stacks represent definitions of groups of Oracle Cloud Infrastructure
 * resources that you can act upon as a group. You take action on stacks by using jobs.
 *
 */
export interface Stack {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the stack.
   */
  "id"?: string;
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the compartment where the stack is located.
   */
  "compartmentId"?: string;
  /**
   * Human-readable name of the stack.
   */
  "displayName"?: string;
  /**
   * Description of the stack.
   */
  "description"?: string;
  /**
   * The date and time at which the stack was created.
   * Format is defined by RFC3339.
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The current lifecycle state of the stack.
   * For more information about stack lifecycle states in Resource Manager, see
   * [Key Concepts](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#StackStates).
   *
   */
  "lifecycleState"?: Stack.LifecycleState;
  "configSource"?:
    | model.GitConfigSource
    | model.CompartmentConfigSource
    | model.ZipUploadConfigSource;
  /**
   * Terraform variables associated with this resource.
   * Maximum number of variables supported is 250.
   * The maximum size of each variable, including both name and value, is 4096 bytes.
   * Example: `{\"CompartmentId\": \"compartment-id-value\"}`
   *
   */
  "variables"?: { [key: string]: string };
  /**
   * The version of Terraform specified for the stack. Example: `0.12.x`
   *
   */
  "terraformVersion"?: string;
  /**
   * Drift status of the stack.
   * Drift refers to differences between the actual (current) state of the stack and the expected (defined) state of the stack.
   *
   */
  "stackDriftStatus"?: Stack.StackDriftStatus;
  /**
   * The date and time when the drift detection was last executed.
   * Format is defined by RFC3339.
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeDriftLastChecked"?: Date;
  /**
   * Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Stack {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum StackDriftStatus {
    NotChecked = "NOT_CHECKED",
    InSync = "IN_SYNC",
    Drifted = "DRIFTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Stack): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.ConfigSource.getJsonObj(obj.configSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
