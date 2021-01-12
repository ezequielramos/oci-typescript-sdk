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
 * The `InstanceConsoleConnection` API provides you with console access to dbnode
 * enabling you to troubleshoot malfunctioning dbnode.
 *
 */
export interface ConsoleConnectionSummary {
  /**
   * The OCID of the console connection.
   */
  "id": string;
  /**
   * The OCID of the compartment to contain the console connection.
   */
  "compartmentId": string;
  /**
   * The OCID of the database node.
   */
  "dbNodeId": string;
  /**
   * The SSH connection string for the console connection.
   */
  "connectionString": string;
  /**
   * The SSH public key fingerprint for the console connection.
   */
  "fingerprint": string;
  /**
   * The current state of the console connection.
   */
  "lifecycleState": ConsoleConnectionSummary.LifecycleState;
}

export namespace ConsoleConnectionSummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ConsoleConnectionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
