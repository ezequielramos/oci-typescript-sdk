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
 * PasswordPolicy resource.
 */
export interface PasswordPolicy {
  /**
   * Unique identifier for the SCIM Resource as defined by the Service Provider. Each representation of the Resource MUST include a non-empty id value. This identifier MUST be unique across the Service Provider's entire set of Resources. It MUST be a stable, non-reassignable identifier that does not change when the same Resource is returned in subsequent requests. The value of the id attribute is always issued by the Service Provider and MUST never be specified by the Service Consumer. bulkId: is a reserved keyword and MUST NOT be used in the unique identifier.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: global
   */
  "id"?: string;
  /**
   * Unique OCI identifier for the SCIM Resource.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: global
   */
  "ocid"?: string;
  /**
   * REQUIRED. The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. This specification defines URIs for User, Group, and a standard \\\"enterprise\\\" extension. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemas": Array<string>;
  "meta"?: model.Meta;
  "idcsCreatedBy"?: model.IdcsCreatedBy;
  "idcsLastModifiedBy"?: model.IdcsLastModifiedBy;
  /**
   * Each value of this attribute specifies an operation that only an internal client may perform on this particular resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsPreventedOperations"?: Array<PasswordPolicy.IdcsPreventedOperations>;
  /**
   * A list of tags on this resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "tags"?: Array<model.Tags>;
  /**
   * A boolean flag indicating this resource in the process of being deleted. Usually set to true when synchronous deletion of the resource would take too long.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "deleteInProgress"?: boolean;
  /**
   * The release number when the resource was upgraded.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsLastUpgradedInRelease"?: string;
  /**
   * OCI Domain Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "domainOcid"?: string;
  /**
   * OCI Compartment Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "compartmentOcid"?: string;
  /**
   * OCI Tenant Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tenancyOcid"?: string;
  /**
   * An identifier for the Resource as defined by the Service Consumer. The externalId may simplify identification of the Resource between Service Consumer and Service Provider by allowing the Consumer to refer to the Resource with its own identifier, obviating the need to store a local mapping between the local identifier of the Resource and the identifier used by the Service Provider. Each Resource MAY include a non-empty externalId value. The value of the externalId attribute is always issued by the Service Consumer and can never be specified by the Service Provider. The Service Provider MUST always interpret the externalId as scoped to the Service Consumer's tenant.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "externalId"?: string;
  /**
   * A String that is the name of the policy to display to the user. This is the only mandatory attribute for a password policy.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: server
   */
  "name": string;
  /**
   * A String that describes the password policy
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "description"?: string;
  /**
   * The maximum password length (in characters). A value of 0 or no value indicates no maximum length restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxLength"?: number;
  /**
   * The minimum password length (in characters). A value of 0 or no value indicates no minimum length restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minLength"?: number;
  /**
   * The minimum number of alphabetic characters in a password.  A value of 0 or no value indicates no minimum alphas restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minAlphas"?: number;
  /**
   * The minimum number of numeric characters in a password.  A value of 0 or no value indicates no minimum numeric character restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minNumerals"?: number;
  /**
   * The minimum number of a combination of alphabetic and numeric characters in a password.  A value of 0 or no value indicates no minimum alphanumeric character restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minAlphaNumerals"?: number;
  /**
   * The minimum number of special characters in a password. A value of 0 or no value indicates no minimum special characters restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minSpecialChars"?: number;
  /**
   * The maximum number of special characters in a password.  A value of 0 or no value indicates no maximum special characters restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSpecialChars"?: number;
  /**
   * The minimum number of lowercase alphabetic characters in a password.  A value of 0 or no value indicates no minimum lowercase restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minLowerCase"?: number;
  /**
   * The minimum number of uppercase alphabetic characters in a password. A value of 0 or no value indicates no minimum uppercase restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minUpperCase"?: number;
  /**
   * The minimum number of unique characters in a password.  A value of 0 or no value indicates no minimum unique characters restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minUniqueChars"?: number;
  /**
   * The maximum number of repeated characters allowed in a password.  A value of 0 or no value indicates no such restriction.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxRepeatedChars"?: number;
  /**
   * Indicates that the password must begin with an alphabetic character
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "startsWithAlphabet"?: boolean;
  /**
   * Indicates a sequence of characters that match the user's first name of given name cannot be the password. Password validation against policy will be ignored if length of first name is less than or equal to 3 characters.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "firstNameDisallowed"?: boolean;
  /**
   * Indicates a sequence of characters that match the user's last name of given name cannot be the password. Password validation against policy will be ignored if length of last name is less than or equal to 3 characters.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "lastNameDisallowed"?: boolean;
  /**
   * Indicates a sequence of characters that match the username cannot be the password. Password validation against policy will be ignored if length of user name is less than or equal to 3 characters.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "userNameDisallowed"?: boolean;
  /**
   * Minimum time after which the user can resubmit the reset password request
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minPasswordAge"?: number;
  /**
   * The number of days after which the password expires automatically
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "passwordExpiresAfter"?: number;
  /**
   * An integer indicating the number of days before which the user should be warned about password expiry.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "passwordExpireWarning"?: number;
  /**
   * A String value whose contents indicate a set of characters that must appear, in any sequence, in a password value
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "requiredChars"?: string;
  /**
   * A String value whose contents indicate a set of characters that cannot appear, in any sequence, in a password value
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "disallowedChars"?: string;
  /**
   * A String value whose contents indicate a set of characters that can appear, in any sequence, in a password value
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "allowedChars"?: string;
  /**
   * A String value whose contents indicate a set of substrings that cannot appear, in any sequence, in a password value
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "disallowedSubstrings"?: Array<string>;
  /**
   * Indicates whether the password can match a dictionary word
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "dictionaryWordDisallowed"?: boolean;
  /**
   * A Reference value that contains the URI of a dictionary of words not allowed to appear within a password value
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "dictionaryLocation"?: string;
  /**
   * A delimiter used to separate characters in the dictionary file
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "dictionaryDelimiter"?: string;
  /**
   * An integer that represents the maximum number of failed logins before an account is locked
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxIncorrectAttempts"?: number;
  /**
   * The time period in minutes to lock out a user account when the threshold of invalid login attempts is reached. The available range is from 5 through 1440 minutes (24 hours).
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lockoutDuration"?: number;
  /**
   * The number of passwords that will be kept in history that may not be used as a password
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numPasswordsInHistory"?: number;
  /**
   * Indicates whether the password policy is configured as Simple, Standard, or Custom.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "passwordStrength"?: PasswordPolicy.PasswordStrength;
  /**
   * Indicates whether all of the users should be forced to reset their password on the next login (to comply with new password policy changes)
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: writeOnly
   *  - required: false
   *  - returned: never
   *  - type: boolean
   *  - uniqueness: none
   */
  "forcePasswordReset"?: boolean;
  /**
   * A list of groups that the password policy belongs to.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCompositeKey: [value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "groups"?: Array<model.PasswordPolicyGroups>;
  /**
   * Password policy priority
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - idcsMinValue: 1
   *  - uniqueness: server Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority"?: number;
  /**
   * List of password policy rules that have values set. This map of stringKey:stringValue pairs can be used to aid users while setting/resetting password
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCompositeKey: [key]
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "configuredPasswordPolicyRules"?: Array<model.PasswordPolicyConfiguredPasswordPolicyRules>;
}

export namespace PasswordPolicy {
  export enum IdcsPreventedOperations {
    Replace = "replace",
    Update = "update",
    Delete = "delete",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PasswordStrength {
    Simple = "Simple",
    Standard = "Standard",
    Custom = "Custom",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PasswordPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getJsonObj(item);
            })
          : undefined,

        "groups": obj.groups
          ? obj.groups.map(item => {
              return model.PasswordPolicyGroups.getJsonObj(item);
            })
          : undefined,

        "configuredPasswordPolicyRules": obj.configuredPasswordPolicyRules
          ? obj.configuredPasswordPolicyRules.map(item => {
              return model.PasswordPolicyConfiguredPasswordPolicyRules.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PasswordPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getDeserializedJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getDeserializedJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getDeserializedJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getDeserializedJsonObj(item);
            })
          : undefined,

        "groups": obj.groups
          ? obj.groups.map(item => {
              return model.PasswordPolicyGroups.getDeserializedJsonObj(item);
            })
          : undefined,

        "configuredPasswordPolicyRules": obj.configuredPasswordPolicyRules
          ? obj.configuredPasswordPolicyRules.map(item => {
              return model.PasswordPolicyConfiguredPasswordPolicyRules.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
