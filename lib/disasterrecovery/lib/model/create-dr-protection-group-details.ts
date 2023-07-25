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
 * The details for creating a DR Protection Group.
 */
export interface CreateDrProtectionGroupDetails {
  /**
    * The OCID of the compartment in which to create the DR Protection Group.
* <p>
Example: `ocid1.compartment.oc1..&lt;unique_id&gt;`
* 
    */
  "compartmentId": string;
  /**
    * The display name of the DR Protection Group.
* <p>
Example: `EBS PHX DRPG`
* 
    */
  "displayName": string;
  "logLocation": model.CreateObjectStorageLogLocationDetails;
  "association"?: model.AssociateDrProtectionGroupDetails;
  /**
   * A list of DR Protection Group members.
   *
   */
  "members"?: Array<model.CreateDrProtectionGroupMemberDetails>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDrProtectionGroupDetails {
  export function getJsonObj(obj: CreateDrProtectionGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.CreateObjectStorageLogLocationDetails.getJsonObj(obj.logLocation)
          : undefined,
        "association": obj.association
          ? model.AssociateDrProtectionGroupDetails.getJsonObj(obj.association)
          : undefined,
        "members": obj.members
          ? obj.members.map(item => {
              return model.CreateDrProtectionGroupMemberDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDrProtectionGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.CreateObjectStorageLogLocationDetails.getDeserializedJsonObj(obj.logLocation)
          : undefined,
        "association": obj.association
          ? model.AssociateDrProtectionGroupDetails.getDeserializedJsonObj(obj.association)
          : undefined,
        "members": obj.members
          ? obj.members.map(item => {
              return model.CreateDrProtectionGroupMemberDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
