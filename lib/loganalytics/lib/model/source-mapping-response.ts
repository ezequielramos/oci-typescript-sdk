/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Response object containing match status and parsed representation of log data.
 */
export interface SourceMappingResponse {
  /**
   * Parsed representation of the log file.
   */
  "parsedResponse": Array<model.ParsedContent>;
}

export namespace SourceMappingResponse {
  export function getJsonObj(obj: SourceMappingResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "parsedResponse": obj.parsedResponse
          ? obj.parsedResponse.map(item => {
              return model.ParsedContent.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceMappingResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "parsedResponse": obj.parsedResponse
          ? obj.parsedResponse.map(item => {
              return model.ParsedContent.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
