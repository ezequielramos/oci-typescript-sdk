/**
 * Java Management Service Query API
 * API for the Java Management Service. Use this API to view and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateFleet = "CREATE_FLEET",
  DeleteFleet = "DELETE_FLEET",
  MoveFleet = "MOVE_FLEET",
  UpdateFleet = "UPDATE_FLEET",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): object {
    return { obj };
  }
}
