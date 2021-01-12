/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Information derived from parsing a NoSQL SQL statement.
 */
export interface StatementSummary {
  /**
   * The operation represented in the statement, e.g. CREATE_TABLE.
   *
   */
  "operation"?: StatementSummary.Operation;
  /**
   * The table name from the SQL statement.
   */
  "tableName"?: string;
  /**
   * The index name from the SQL statement, if present.
   */
  "indexName"?: string;
  /**
   * True if the statement includes \"IF EXISTS.\"
   */
  "isIfExists"?: boolean;
  /**
   * True if the statement includes \"IF NOT EXISTS.\"
   */
  "isIfNotExists"?: boolean;
  /**
   * If present, indicates a syntax error in the statement.
   */
  "syntaxError"?: string;
}

export namespace StatementSummary {
  export enum Operation {
    CreateTable = "CREATE_TABLE",
    AlterTable = "ALTER_TABLE",
    DropTable = "DROP_TABLE",
    CreateIndex = "CREATE_INDEX",
    DropIndex = "DROP_INDEX",
    Select = "SELECT",
    Update = "UPDATE",
    Insert = "INSERT",
    Delete = "DELETE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StatementSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
