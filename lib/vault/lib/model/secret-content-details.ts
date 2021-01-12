/**
 * Secrets Management API
 * API for managing secrets.
 * OpenAPI spec version: 20180608
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
 * The content of the secret and metadata to help identify it.
 */
export interface SecretContentDetails {
  /**
   * Names should be unique within a secret. Valid characters are uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
   */
  "name"?: string;
  /**
   * The rotation state of the secret content. The default is `CURRENT`, meaning that the secret is currently in use. A secret version
   * that you mark as `PENDING` is staged and available for use, but you don't yet want to rotate it into current, active use. For example,
   * you might create or update a secret and mark its rotation state as `PENDING` if you haven't yet updated the secret on the target system.
   * When creating a secret, only the value `CURRENT` is applicable, although the value `LATEST` is also automatically applied. When updating
   * a secret, you can specify a version's rotation state as either `CURRENT` or `PENDING`.
   *
   */
  "stage"?: SecretContentDetails.Stage;

  "contentType": string;
}

export namespace SecretContentDetails {
  export enum Stage {
    Current = "CURRENT",
    Pending = "PENDING"
  }

  export function getJsonObj(obj: SecretContentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("contentType" in obj && obj.contentType) {
      switch (obj.contentType) {
        case "BASE64":
          return model.Base64SecretContentDetails.getJsonObj(
            <model.Base64SecretContentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.contentType);
      }
    }
    return jsonObj;
  }
}
