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
 * The details including name, description for the folder, which is a container of other folders, tasks and dataflows.
 */
export interface FolderDetails {
  /**
   * Generated key that can be used in API calls to identify folder.
   */
  "key": string;
  /**
   * The type of the object.
   */
  "modelType": string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * A user defined description for the folder.
   */
  "description"?: string;
  /**
   * The category name.
   */
  "categoryName"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion": number;
  "registryMetadata"?: model.RegistryMetadata;
}

export namespace FolderDetails {
  export function getJsonObj(obj: FolderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
