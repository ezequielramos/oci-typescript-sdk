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
 * The shape configuration of the nodes.
 */
export interface UpdateNodeShapeConfigDetails {
  /**
   * The total number of OCPUs available to each node in the node pool.
   * See [here](https://docs.cloud.oracle.com/en-us/iaas/api/#/en/iaas/20160918/Shape/) for details.
   *
   */
  "ocpus"?: number;
  /**
   * The total amount of memory available to each node, in gigabytes.
   *
   */
  "memoryInGBs"?: number;
}

export namespace UpdateNodeShapeConfigDetails {
  export function getJsonObj(obj: UpdateNodeShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
