/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Information around the set of string values for selector of a dynamic authentication/ routing branch. Selector should match any one of the values present in set of string values.
 */
export interface AnyOfSelectionKey extends model.DynamicSelectionKey {
  /**
   * Information regarding the set of values of selector for which this branch should be selected.
   */
  "values"?: Array<string>;

  "type": string;
}

export namespace AnyOfSelectionKey {
  export function getJsonObj(obj: AnyOfSelectionKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DynamicSelectionKey.getJsonObj(obj) as AnyOfSelectionKey)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ANY_OF";
  export function getDeserializedJsonObj(
    obj: AnyOfSelectionKey,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DynamicSelectionKey.getDeserializedJsonObj(obj) as AnyOfSelectionKey)),
      ...{}
    };

    return jsonObj;
  }
}
