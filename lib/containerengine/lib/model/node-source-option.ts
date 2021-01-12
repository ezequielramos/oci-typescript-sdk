/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The source option for the node.
 */
export interface NodeSourceOption {
  /**
   * The user-friendly name of the entity corresponding to the OCID.
   *
   */
  "sourceName"?: string;

  "sourceType": string;
}

export namespace NodeSourceOption {
  export function getJsonObj(obj: NodeSourceOption): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "IMAGE":
          return model.NodeSourceViaImageOption.getJsonObj(
            <model.NodeSourceViaImageOption>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
