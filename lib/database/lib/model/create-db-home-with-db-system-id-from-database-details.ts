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
 * Note that a valid `dbSystemId` value must be supplied for the `CreateDbHomeWithDbSystemIdFromDatabase` API operation to successfully complete.
 *
 */
export interface CreateDbHomeWithDbSystemIdFromDatabaseDetails extends model.CreateDbHomeBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId": string;
  "database": model.CreateDatabaseFromAnotherDatabaseDetails;

  "source": string;
}

export namespace CreateDbHomeWithDbSystemIdFromDatabaseDetails {
  export function getJsonObj(
    obj: CreateDbHomeWithDbSystemIdFromDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbHomeBase.getJsonObj(
            obj
          ) as CreateDbHomeWithDbSystemIdFromDatabaseDetails)),
      ...{
        "database": obj.database
          ? model.CreateDatabaseFromAnotherDatabaseDetails.getJsonObj(obj.database)
          : undefined
      }
    };

    return jsonObj;
  }
  export const source = "DATABASE";
}
