/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage CLASSIFY command.
 *
 */
export interface ClassifyCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * Value specified in CLASSIFY command in queryString if set limits the results returned to top N.
   *
   */
  "topCount"?: number;
  /**
   * Value specified in CLASSIFY command in queryString if set limits the results returned to bottom N.
   *
   */
  "bottomCount"?: number;
  /**
   * Fields specified in CLASSIFY command in queryString if set include / exclude fields in correlate results.
   *
   */
  "correlate"?: Array<model.FieldsAddRemoveField>;

  "name": string;
}

export namespace ClassifyCommandDescriptor {
  export function getJsonObj(obj: ClassifyCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as ClassifyCommandDescriptor)),
      ...{
        "correlate": obj.correlate
          ? obj.correlate.map(item => {
              return model.FieldsAddRemoveField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const name = "CLASSIFY";
}
