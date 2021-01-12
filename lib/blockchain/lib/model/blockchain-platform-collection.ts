/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * Result of a platform list or search. Contains BlockchainPlatformSummary
 */
export interface BlockchainPlatformCollection {
  /**
   * Collection of BlockchainPlatformSummary
   */
  "items": Array<model.BlockchainPlatformSummary>;
}

export namespace BlockchainPlatformCollection {
  export function getJsonObj(obj: BlockchainPlatformCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.BlockchainPlatformSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
