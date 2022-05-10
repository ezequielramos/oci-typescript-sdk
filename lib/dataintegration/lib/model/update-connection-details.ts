/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Properties used in connection update operations.
 */
export interface UpdateConnectionDetails {
  /**
   * Generated key that can be used in API calls to identify connection. On scenarios where reference to the connection is needed, a value can be passed in create.
   */
  "key": string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description for the connection.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion": number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The properties for the connection.
   */
  "connectionProperties"?: Array<model.ConnectionProperty>;
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace UpdateConnectionDetails {
  export function getJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getJsonObj(item);
            })
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.UpdateConnectionFromJdbc.getJsonObj(
            <model.UpdateConnectionFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.UpdateConnectionFromObjectStorage.getJsonObj(
            <model.UpdateConnectionFromObjectStorage>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.UpdateConnectionFromBICC.getJsonObj(
            <model.UpdateConnectionFromBICC>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.UpdateConnectionFromAmazonS3.getJsonObj(
            <model.UpdateConnectionFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.UpdateConnectionFromAtp.getJsonObj(
            <model.UpdateConnectionFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.UpdateConnectionFromOracle.getJsonObj(
            <model.UpdateConnectionFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.UpdateConnectionFromAdwc.getJsonObj(
            <model.UpdateConnectionFromAdwc>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.UpdateConnectionFromBIP.getJsonObj(
            <model.UpdateConnectionFromBIP>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.UpdateConnectionFromMySQL.getJsonObj(
            <model.UpdateConnectionFromMySQL>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getDeserializedJsonObj(item);
            })
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.UpdateConnectionFromJdbc.getDeserializedJsonObj(
            <model.UpdateConnectionFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.UpdateConnectionFromObjectStorage.getDeserializedJsonObj(
            <model.UpdateConnectionFromObjectStorage>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.UpdateConnectionFromBICC.getDeserializedJsonObj(
            <model.UpdateConnectionFromBICC>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.UpdateConnectionFromAmazonS3.getDeserializedJsonObj(
            <model.UpdateConnectionFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.UpdateConnectionFromAtp.getDeserializedJsonObj(
            <model.UpdateConnectionFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.UpdateConnectionFromOracle.getDeserializedJsonObj(
            <model.UpdateConnectionFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.UpdateConnectionFromAdwc.getDeserializedJsonObj(
            <model.UpdateConnectionFromAdwc>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.UpdateConnectionFromBIP.getDeserializedJsonObj(
            <model.UpdateConnectionFromBIP>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.UpdateConnectionFromMySQL.getDeserializedJsonObj(
            <model.UpdateConnectionFromMySQL>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
