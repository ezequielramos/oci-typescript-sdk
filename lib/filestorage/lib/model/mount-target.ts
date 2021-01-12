/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Provides access to a collection of file systems through one or more VNICs on a
 * specified subnet. The set of file systems is controlled through the
 * referenced export set.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface MountTarget {
  /**
    * The availability domain the mount target is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The OCID of the compartment that contains the mount target.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My mount target`
* 
    */
  "displayName": string;
  /**
   * The OCID of the associated export set. Controls what file
   * systems will be exported through Network File System (NFS) protocol on this
   * mount target.
   *
   */
  "exportSetId"?: string;
  /**
   * The OCID of the mount target.
   */
  "id": string;
  /**
   * Additional information about the current 'lifecycleState'.
   */
  "lifecycleDetails": string;
  /**
   * The current state of the mount target.
   */
  "lifecycleState": MountTarget.LifecycleState;
  /**
   * The OCIDs of the private IP addresses associated with this mount target.
   */
  "privateIpIds": Array<string>;
  /**
   * The OCID of the subnet the mount target is in.
   */
  "subnetId": string;
  /**
   * A list of Network Security Group [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with this mount target.
   * A maximum of 5 is allowed.
   * Setting this to an empty array after the list is created removes the mount target from all NSGs.
   * For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * The date and time the mount target was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
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

export namespace MountTarget {
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

  export function getJsonObj(obj: MountTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
