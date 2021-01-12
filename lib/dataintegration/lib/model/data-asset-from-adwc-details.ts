/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details for the Autonomous Data Warehouse data asset type.
 */
export interface DataAssetFromAdwcDetails extends model.DataAsset {
  /**
   * The Autonomous Data Warehouse instance service name.
   */
  "serviceName"?: string;
  /**
   * Array of service names that are available for selection in the serviceName property.
   */
  "serviceNames"?: Array<string>;
  /**
   * The Autonomous Data Warehouse driver class.
   */
  "driverClass"?: string;
  "defaultConnection"?: model.ConnectionFromAdwcDetails;

  "modelType": string;
}

export namespace DataAssetFromAdwcDetails {
  export function getJsonObj(obj: DataAssetFromAdwcDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DataAsset.getJsonObj(obj) as DataAssetFromAdwcDetails)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionFromAdwcDetails.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ADWC_DATA_ASSET";
}
