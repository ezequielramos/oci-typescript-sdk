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
 * Represents a data source in the Data Integration service.
 */
export interface DataAsset {
  /**
   * Generated key that can be used in API calls to identify data asset.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  "nativeTypeSystem"?: model.TypeSystem;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  "parentRef"?: model.ParentReference;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };

  "modelType": string;
}

export namespace DataAsset {
  export function getJsonObj(obj: DataAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getJsonObj(obj.nativeTypeSystem)
          : undefined,

        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_DATA_ASSET":
          return model.DataAssetFromJdbc.getJsonObj(
            <model.DataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.DataAssetFromOracleDetails.getJsonObj(
            <model.DataAssetFromOracleDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.DataAssetFromAdwcDetails.getJsonObj(
            <model.DataAssetFromAdwcDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.DataAssetFromObjectStorageDetails.getJsonObj(
            <model.DataAssetFromObjectStorageDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.DataAssetFromAtpDetails.getJsonObj(
            <model.DataAssetFromAtpDetails>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.DataAssetFromMySQL.getJsonObj(
            <model.DataAssetFromMySQL>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
