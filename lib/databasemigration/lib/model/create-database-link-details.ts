/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Optional details for creating a network database link from OCI database to on-premise database.
 *
 */
export interface CreateDatabaseLinkDetails {
  /**
   * Name of database link from OCI database to on-premise database. ODMS will create link, if the link does not already exist.
   *
   */
  "name": string;
}

export namespace CreateDatabaseLinkDetails {
  export function getJsonObj(obj: CreateDatabaseLinkDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
