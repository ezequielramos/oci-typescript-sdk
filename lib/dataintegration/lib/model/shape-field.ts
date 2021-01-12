/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The shape field object.
 */
export interface ShapeField extends model.TypedObject {
  /**
   * The reference to the type.
   */
  "type"?: string;
  /**
   * Labels are keywords or labels that you can add to data assets, dataflows etc. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;
  "nativeShapeField"?: model.NativeShapeField;

  "modelType": string;
}

export namespace ShapeField {
  export function getJsonObj(obj: ShapeField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as ShapeField)),
      ...{
        "nativeShapeField": obj.nativeShapeField
          ? model.NativeShapeField.getJsonObj(obj.nativeShapeField)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SHAPE_FIELD";
}
