/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Summary information for a software package
 */
export interface SoftwarePackageSummary {
  /**
   * Package name
   */
  "displayName": string;
  /**
   * Unique identifier for the package. NOTE - This is not an OCID
   */
  "name": string;
  /**
   * Type of the package
   */
  "type": string;
  /**
   * Version of the package
   */
  "version": string;
  /**
   * the architecture for which this software was built
   */
  "architecture"?: string;
  /**
   * checksum of the package
   */
  "checksum"?: string;
  /**
   * type of the checksum
   */
  "checksumType"?: string;
}

export namespace SoftwarePackageSummary {
  export function getJsonObj(obj: SoftwarePackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
