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
 * Data Transfer Medium details for the Migration.
 *
 */
export interface DataTransferMediumDetails {
  "databaseLinkDetails"?: model.DatabaseLinkDetails;
  "objectStorageDetails"?: model.ObjectStoreBucket;
}

export namespace DataTransferMediumDetails {
  export function getJsonObj(obj: DataTransferMediumDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseLinkDetails": obj.databaseLinkDetails
          ? model.DatabaseLinkDetails.getJsonObj(obj.databaseLinkDetails)
          : undefined,
        "objectStorageDetails": obj.objectStorageDetails
          ? model.ObjectStoreBucket.getJsonObj(obj.objectStorageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
