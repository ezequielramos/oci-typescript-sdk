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
 * Scopes
 */
export interface OAuth2ClientCredentialScopes {
  /**
   * Audience
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - type: string
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   */
  "audience": string;
  /**
   * Scope
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsScimCompliant: false
   *  - type: string
   *  - mutability: readWrite
   *  - multiValued: false
   *  - required: true
   *  - returned: default
   */
  "scope": string;
}

export namespace OAuth2ClientCredentialScopes {
  export function getJsonObj(obj: OAuth2ClientCredentialScopes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OAuth2ClientCredentialScopes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
