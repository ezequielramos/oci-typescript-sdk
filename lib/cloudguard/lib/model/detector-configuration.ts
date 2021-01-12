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
 * A single configuration applied to a detector
 */
export interface DetectorConfiguration {
  /**
   * Unique name of the configuration
   */
  "configKey": string;
  /**
   * configuration name
   */
  "name": string;
  /**
   * configuration value
   */
  "value"?: string;
  /**
   * configuration data type
   */
  "dataType"?: string;
  /**
   * List of configuration values
   */
  "values"?: Array<model.ConfigValue>;
}

export namespace DetectorConfiguration {
  export function getJsonObj(obj: DetectorConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "values": obj.values
          ? obj.values.map(item => {
              return model.ConfigValue.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
