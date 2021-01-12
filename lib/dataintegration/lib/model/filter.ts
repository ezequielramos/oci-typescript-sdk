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
 * The information about the filter object.
 */
export interface Filter extends model.Operator {
  "filterCondition"?: model.Expression;

  "modelType": string;
}

export namespace Filter {
  export function getJsonObj(obj: Filter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Filter)),
      ...{
        "filterCondition": obj.filterCondition
          ? model.Expression.getJsonObj(obj.filterCondition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FILTER_OPERATOR";
}
