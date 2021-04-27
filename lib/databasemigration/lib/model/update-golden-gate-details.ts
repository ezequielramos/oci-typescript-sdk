/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Details about Oracle GoldenGate Microservices. If an empty object is specified, the stored Golden Gate details will be removed.
 *
 */
export interface UpdateGoldenGateDetails {
  "hub"?: model.UpdateGoldenGateHub;
  "settings"?: model.UpdateGoldenGateSettings;
}

export namespace UpdateGoldenGateDetails {
  export function getJsonObj(obj: UpdateGoldenGateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "hub": obj.hub ? model.UpdateGoldenGateHub.getJsonObj(obj.hub) : undefined,
        "settings": obj.settings
          ? model.UpdateGoldenGateSettings.getJsonObj(obj.settings)
          : undefined
      }
    };

    return jsonObj;
  }
}
