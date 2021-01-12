/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.015
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

export interface MultipleTransferDevices {
  /**
   * List of TransferDeviceObject's
   */
  "transferDeviceObjects"?: Array<model.TransferDeviceSummary>;
}

export namespace MultipleTransferDevices {
  export function getJsonObj(obj: MultipleTransferDevices): object {
    const jsonObj = {
      ...obj,
      ...{
        "transferDeviceObjects": obj.transferDeviceObjects
          ? obj.transferDeviceObjects.map(item => {
              return model.TransferDeviceSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
