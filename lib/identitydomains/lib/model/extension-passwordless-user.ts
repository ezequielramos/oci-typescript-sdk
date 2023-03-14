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
 * This extension defines attributes used to manage Passwordless-Factor Authentication within a service provider. The extension is typically applied to a User resource, but MAY be applied to other resources that use MFA.
 */
export interface ExtensionPasswordlessUser {
  /**
   * Authentication Factor Type
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "factorType"?: ExtensionPasswordlessUser.FactorType;
  /**
   * Authentication Factor Method
   * <p>
   **Added In:** 2009232244
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "factorMethod"?: string;
  "factorIdentifier"?: model.UserExtFactorIdentifier;
}

export namespace ExtensionPasswordlessUser {
  export enum FactorType {
    Email = "EMAIL",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL",
    Totp = "TOTP",
    Push = "PUSH",
    Offlinetotp = "OFFLINETOTP",
    SecurityQuestions = "SECURITY_QUESTIONS",
    Voice = "VOICE",
    UsernamePassword = "USERNAME_PASSWORD",
    Thirdparty = "THIRDPARTY",
    FidoAuthenticator = "FIDO_AUTHENTICATOR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExtensionPasswordlessUser): object {
    const jsonObj = {
      ...obj,
      ...{
        "factorIdentifier": obj.factorIdentifier
          ? model.UserExtFactorIdentifier.getJsonObj(obj.factorIdentifier)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionPasswordlessUser): object {
    const jsonObj = {
      ...obj,
      ...{
        "factorIdentifier": obj.factorIdentifier
          ? model.UserExtFactorIdentifier.getDeserializedJsonObj(obj.factorIdentifier)
          : undefined
      }
    };

    return jsonObj;
  }
}
