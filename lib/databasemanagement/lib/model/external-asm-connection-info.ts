/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details required to connect to an external ASM instance.
 */
export interface ExternalAsmConnectionInfo extends model.ExternalDbSystemConnectionInfo {
  "connectionString": model.AsmConnectionString;
  "connectionCredentials":
    | model.AsmConnectionCredentailsByName
    | model.AsmConnectionCredentialsByDetails;

  "componentType": string;
}

export namespace ExternalAsmConnectionInfo {
  export function getJsonObj(obj: ExternalAsmConnectionInfo, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExternalDbSystemConnectionInfo.getJsonObj(obj) as ExternalAsmConnectionInfo)),
      ...{
        "connectionString": obj.connectionString
          ? model.AsmConnectionString.getJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.AsmConnectionCredentials.getJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export const componentType = "ASM";
  export function getDeserializedJsonObj(
    obj: ExternalAsmConnectionInfo,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExternalDbSystemConnectionInfo.getDeserializedJsonObj(
            obj
          ) as ExternalAsmConnectionInfo)),
      ...{
        "connectionString": obj.connectionString
          ? model.AsmConnectionString.getDeserializedJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.AsmConnectionCredentials.getDeserializedJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
