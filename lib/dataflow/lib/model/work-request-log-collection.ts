/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * Results of a query for a list of work request logs. Contains WorkRequestLog items.
 *
 */
export interface WorkRequestLogCollection {
  /**
   * A list of work request logs.
   *
   */
  "items": Array<model.WorkRequestLog>;
}

export namespace WorkRequestLogCollection {
  export function getJsonObj(obj: WorkRequestLogCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLog.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
