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
 * A list of groups that the user belongs to, either thorough direct membership, nested groups, or dynamically calculated
 */
export interface MeGroups {
  /**
   * The identifier of the User's group.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * The OCID of the User's group.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ocid"?: string;
  /**
   * The URI of the corresponding Group resource to which the user belongs
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * A human readable name, primarily used for display purposes. READ-ONLY.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * A human readable name for Group as defined by the Service Consumer. READ-ONLY.
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "nonUniqueDisplay"?: string;
  /**
   * An identifier for the Resource as defined by the Service Consumer. READ-ONLY.
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "externalId"?: string;
  /**
   * A label indicating the attribute's function; e.g., 'direct' or 'indirect'.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "type"?: MeGroups.Type;
  /**
   * The membership OCID.
   * <p>
   **Added In:** 2103141444
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "membershipOcid"?: string;
  /**
   * Date when the member is Added to the group
   * <p>
   **Added In:** 2105200541
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "dateAdded"?: string;
}

export namespace MeGroups {
  export enum Type {
    Direct = "direct",
    Indirect = "indirect",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MeGroups): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<MeGroups>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MeGroups): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}
