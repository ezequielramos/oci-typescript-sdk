/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Property details for the configuration source.
 *
 */
export interface CreateConfigSourceDetails {
  /**
   * File path to the directory from which Terraform runs.
   * If not specified, the root directory is used.
   *
   */
  "workingDirectory"?: string;

  "configSourceType": string;
}

export namespace CreateConfigSourceDetails {
  export function getJsonObj(obj: CreateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configSourceType" in obj && obj.configSourceType) {
      switch (obj.configSourceType) {
        case "ZIP_UPLOAD":
          return model.CreateZipUploadConfigSourceDetails.getJsonObj(
            <model.CreateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "GIT_CONFIG_SOURCE":
          return model.CreateGitConfigSourceDetails.getJsonObj(
            <model.CreateGitConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configSourceType);
      }
    }
    return jsonObj;
  }
}
