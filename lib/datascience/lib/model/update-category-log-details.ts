/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * The log details for each category for update.
 */
export interface UpdateCategoryLogDetails {
  "access"?: model.LogDetails;
  "predict"?: model.LogDetails;
}

export namespace UpdateCategoryLogDetails {
  export function getJsonObj(obj: UpdateCategoryLogDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "access": obj.access ? model.LogDetails.getJsonObj(obj.access) : undefined,
        "predict": obj.predict ? model.LogDetails.getJsonObj(obj.predict) : undefined
      }
    };

    return jsonObj;
  }
}
