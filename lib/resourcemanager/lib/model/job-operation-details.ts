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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Job details that are specific to the operation type.
 *
 */
export interface JobOperationDetails {
  "operation": string;
}

export namespace JobOperationDetails {
  export function getJsonObj(obj: JobOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "IMPORT_TF_STATE":
          return model.ImportTfStateJobOperationDetails.getJsonObj(
            <model.ImportTfStateJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN":
          return model.PlanJobOperationDetails.getJsonObj(
            <model.PlanJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY":
          return model.ApplyJobOperationDetails.getJsonObj(
            <model.ApplyJobOperationDetails>(<object>jsonObj),
            true
          );
        case "DESTROY":
          return model.DestroyJobOperationDetails.getJsonObj(
            <model.DestroyJobOperationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.operation);
      }
    }
    return jsonObj;
  }
}
