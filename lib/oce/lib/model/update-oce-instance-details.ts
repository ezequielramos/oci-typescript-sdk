/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * The information to be updated.
 */
export interface UpdateOceInstanceDetails {
  /**
   * OceInstance description
   */
  "description"?: string;
  /**
   * Web Application Firewall(WAF) primary domain
   */
  "wafPrimaryDomain"?: string;
  /**
   * Flag indicating whether the instance license is new cloud or bring your own license
   */
  "instanceLicenseType"?: model.LicenseType;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateOceInstanceDetails {
  export function getJsonObj(obj: UpdateOceInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
