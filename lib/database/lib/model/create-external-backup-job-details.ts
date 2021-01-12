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

export interface CreateExternalBackupJobDetails {
  /**
   * The targeted availability domain for the backup.
   */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment where this backup should be created.
   */
  "compartmentId": string;
  /**
   * A user-friendly name for the backup. This name does not have to be unique.
   */
  "displayName": string;
  /**
   * A valid Oracle Database version.
   */
  "dbVersion": string;
  /**
   * The name of the database from which the backup is being taken.
   */
  "dbName": string;
  /**
   * The `DB_UNIQUE_NAME` of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The pluggable database name.
   */
  "pdbName"?: string;
  /**
   * The `DBID` of the Oracle Database being backed up.
   */
  "externalDatabaseIdentifier": number;
  /**
   * The character set for the database.
   */
  "characterSet": string;
  /**
   * The national character set for the database.
   */
  "ncharacterSet": string;
  /**
   * The mode (single instance or RAC) of the database being backed up.
   */
  "databaseMode": CreateExternalBackupJobDetails.DatabaseMode;
  /**
   * The Oracle Database edition to use for creating a database from this standalone backup.
   * Note that 2-node RAC DB systems require Enterprise Edition - Extreme Performance.
   *
   */
  "databaseEdition": CreateExternalBackupJobDetails.DatabaseEdition;
}

export namespace CreateExternalBackupJobDetails {
  export enum DatabaseMode {
    Si = "SI",
    Rac = "RAC"
  }

  export enum DatabaseEdition {
    StandardEdition = "STANDARD_EDITION",
    EnterpriseEdition = "ENTERPRISE_EDITION",
    EnterpriseEditionHighPerformance = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    EnterpriseEditionExtremePerformance = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE"
  }

  export function getJsonObj(obj: CreateExternalBackupJobDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
