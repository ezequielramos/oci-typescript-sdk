/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Idcs Group
 */
export interface ExtensionGroupGroup {
  /**
   * Group description
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Description
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Description]]
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "description"?: string;
  /**
   * Source from which this group got created.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeNameMappings: [[defaultValue:import]]
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "creationMechanism"?: ExtensionGroupGroup.CreationMechanism;
  "passwordPolicy"?: model.GroupExtPasswordPolicy;
  "syncedFromApp"?: model.GroupExtSyncedFromApp;
  /**
   * Grants assigned to group
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "grants"?: Array<model.GroupExtGrants>;
  /**
   * Group owners
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCompositeKey: [value, type]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "owners"?: Array<model.GroupExtOwners>;
  /**
   * A list of appRoles that the user belongs to, either thorough direct membership, nested groups, or dynamically calculated
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCompositeKey: [value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "appRoles"?: Array<model.GroupExtAppRoles>;
}

export namespace ExtensionGroupGroup {
  export enum CreationMechanism {
    Bulk = "bulk",
    Api = "api",
    Adsync = "adsync",
    Authsync = "authsync",
    Idcsui = "idcsui",
    Import = "import",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExtensionGroupGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "passwordPolicy": obj.passwordPolicy
          ? model.GroupExtPasswordPolicy.getJsonObj(obj.passwordPolicy)
          : undefined,
        "syncedFromApp": obj.syncedFromApp
          ? model.GroupExtSyncedFromApp.getJsonObj(obj.syncedFromApp)
          : undefined,
        "grants": obj.grants
          ? obj.grants.map(item => {
              return model.GroupExtGrants.getJsonObj(item);
            })
          : undefined,
        "owners": obj.owners
          ? obj.owners.map(item => {
              return model.GroupExtOwners.getJsonObj(item);
            })
          : undefined,
        "appRoles": obj.appRoles
          ? obj.appRoles.map(item => {
              return model.GroupExtAppRoles.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionGroupGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "passwordPolicy": obj.passwordPolicy
          ? model.GroupExtPasswordPolicy.getDeserializedJsonObj(obj.passwordPolicy)
          : undefined,
        "syncedFromApp": obj.syncedFromApp
          ? model.GroupExtSyncedFromApp.getDeserializedJsonObj(obj.syncedFromApp)
          : undefined,
        "grants": obj.grants
          ? obj.grants.map(item => {
              return model.GroupExtGrants.getDeserializedJsonObj(item);
            })
          : undefined,
        "owners": obj.owners
          ? obj.owners.map(item => {
              return model.GroupExtOwners.getDeserializedJsonObj(item);
            })
          : undefined,
        "appRoles": obj.appRoles
          ? obj.appRoles.map(item => {
              return model.GroupExtAppRoles.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
