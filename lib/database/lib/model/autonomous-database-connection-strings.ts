/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Connection strings to connect to an Oracle Autonomous Database.
 *
 */
export interface AutonomousDatabaseConnectionStrings {
  /**
   * The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements.
   */
  "high"?: string;
  /**
   * The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements.
   */
  "medium"?: string;
  /**
   * The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
   */
  "low"?: string;
  /**
   * The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
   */
  "dedicated"?: string;
  /**
   * Returns all connection strings that can be used to connect to the Autonomous Database.
   * For more information, please see [Predefined Database Service Names for Autonomous Transaction Processing](https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/connect-predefined.html#GUID-9747539B-FD46-44F1-8FF8-F5AC650F15BE)
   *
   */
  "allConnectionStrings"?: { [key: string]: string };
}

export namespace AutonomousDatabaseConnectionStrings {
  export function getJsonObj(obj: AutonomousDatabaseConnectionStrings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
