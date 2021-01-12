/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Summary of rules
 */
export interface RuleSummary {
  /**
   * id of the rule
   */
  "id": string;
  /**
   * description of the rule
   */
  "description": string;
  /**
   * List of parameters applicable for rule
   */
  "parameters": Array<model.OperatorSummary>;
}

export namespace RuleSummary {
  export function getJsonObj(obj: RuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.OperatorSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
