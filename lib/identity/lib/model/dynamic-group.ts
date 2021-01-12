/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
* A dynamic group defines a matching rule. Every bare metal or virtual machine instance is deployed with an instance certificate.
* The certificate contains metadata about the instance. This includes the instance OCID and the compartment OCID, along
* with a few other optional properties. When an API call is made using this instance certificate as the authenticator,
* the certificate can be matched to one or multiple dynamic groups. The instance can then get access to the API
* based on the permissions granted in policies written for the dynamic groups.
* <p>
This works like regular user/group membership. But in that case, the membership is a static relationship, whereas
* in a dynamic group, the membership of an instance certificate to a dynamic group is determined during runtime.
* For more information, see [Managing Dynamic Groups](https://docs.cloud.oracle.com/Content/Identity/Tasks/managingdynamicgroups.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using
* the API.
* 
*/
export interface DynamicGroup {
  /**
   * The OCID of the group.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the group.
   */
  "compartmentId": string;
  /**
   * The name you assign to the group during creation. The name must be unique across all groups in
   * the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the group. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
   * A rule string that defines which instance certificates will be matched.
   * For syntax, see [Managing Dynamic Groups](https://docs.cloud.oracle.com/Content/Identity/Tasks/managingdynamicgroups.htm).
   *
   */
  "matchingRule": string;
  /**
    * Date and time the group was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The group's current state. After creating a group, make sure its `lifecycleState` changes from CREATING to
   * ACTIVE before using it.
   *
   */
  "lifecycleState": DynamicGroup.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState.
   */
  "inactiveStatus"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DynamicGroup {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DynamicGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
