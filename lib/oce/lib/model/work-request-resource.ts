/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
 *
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
 * A resource created or operated on by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type the work request is affects.
   */
  "entityType": string;
  /**
   * The way in which this resource is affected by the work tracked in the work request.
   * A resource being created, updated, or deleted will remain in the IN_PROGRESS state until
   * work is complete for that resource at which point it will transition to CREATED, UPDATED,
   * or DELETED, respectively.
   *
   */
  "actionType": WorkRequestResource.ActionType;
  /**
   * The identifier of the resource the work request affects.
   */
  "identifier": string;
  /**
   * The URI path that the user can do a GET on to access the resource metadata
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export enum ActionType {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
