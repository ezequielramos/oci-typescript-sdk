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
 * Details of the Sql tuning set.
 */
export interface SqlTuningSet {
  /**
   * The unique Sql tuning set identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "id"?: number;
  /**
   * The owner of the Sql tuning set.
   */
  "owner": string;
  /**
   * The name of the Sql tuning set.
   */
  "name": string;
  /**
   * Number of statements in the Sql tuning set Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "statementCount"?: number;
  /**
   * The created time of the Sql tuning set.
   */
  "timeCreated"?: Date;
  /**
   * The description of the Sql tuning set.
   */
  "description"?: string;
  /**
   * Last modified time of the Sql tuning set.
   */
  "timeLastModified"?: Date;
  /**
   * Current status of the Sql tuning set.
   */
  "status"?: model.SqlTuningSetStatusTypes;
  /**
   * Name of the Sql tuning set scheduler job.
   */
  "scheduledJobName"?: string;
  /**
   * Latest execution error of the plsql that was submitted as a scheduler job.
   */
  "errorMessage"?: string;
  /**
   * In OCI database management, there is a limit to fetch only 2000 rows.
   * This flag indicates whether all Sql statements of this Sql tuning set matching the filter criteria are fetched or not.
   * Possible values are 'Yes' or 'No'
   *   - Yes - All Sql statements matching the filter criteria are fetched.
   *   - No  - There are more Sql statements matching the fitler criteria.
   *           User should fine tune the filter criteria to narrow down the result set.
   *
   */
  "allSqlStatementsFetched"?: string;
  /**
   * A list of the Sqls associated with the Sql tuning set.
   */
  "sqlList"?: Array<model.SqlInSqlTuningSet>;
}

export namespace SqlTuningSet {
  export function getJsonObj(obj: SqlTuningSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "sqlList": obj.sqlList
          ? obj.sqlList.map(item => {
              return model.SqlInSqlTuningSet.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "sqlList": obj.sqlList
          ? obj.sqlList.map(item => {
              return model.SqlInSqlTuningSet.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
