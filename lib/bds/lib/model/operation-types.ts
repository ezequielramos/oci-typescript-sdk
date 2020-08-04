/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible operation types.
 **/
export enum OperationTypes {
  CreateBds = "CREATE_BDS",
  UpdateBds = "UPDATE_BDS",
  DeleteBds = "DELETE_BDS",
  AddBlockStorage = "ADD_BLOCK_STORAGE",
  AddWorkerNodes = "ADD_WORKER_NODES",
  AddCloudSql = "ADD_CLOUD_SQL",
  RemoveCloudSql = "REMOVE_CLOUD_SQL",
  ChangeCompartmentForBds = "CHANGE_COMPARTMENT_FOR_BDS",
  ChangeShape = "CHANGE_SHAPE",
  UpdateInfra = "UPDATE_INFRA",
  RestartNode = "RESTART_NODE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): object {
    return { obj };
  }
}
