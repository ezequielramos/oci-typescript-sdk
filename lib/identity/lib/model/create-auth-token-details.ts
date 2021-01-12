/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

export interface CreateAuthTokenDetails {
  /**
   * The description you assign to the auth token during creation. Does not have to be unique, and it's changeable.
   *
   */
  "description": string;
}

export namespace CreateAuthTokenDetails {
  export function getJsonObj(obj: CreateAuthTokenDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
