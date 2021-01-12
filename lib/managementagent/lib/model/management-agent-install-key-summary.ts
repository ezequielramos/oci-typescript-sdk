/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * The summary of the Agent Install Key details.
 */
export interface ManagementAgentInstallKeySummary {
  /**
   * Agent Install Key identifier
   */
  "id": string;
  /**
   * Management Agent Install Key Name
   */
  "displayName"?: string;
  /**
   * Principal id of user who created the Agent Install key
   */
  "createdByPrincipalId"?: string;
  /**
   * Total number of install for this keys
   */
  "allowedKeyInstallCount"?: number;
  /**
   * Total number of install for this keys
   */
  "currentKeyInstallCount"?: number;
  /**
   * Status of Key
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time when Management Agent install Key was created. An RFC3339 formatted date time string
   */
  "timeCreated"?: Date;
  /**
   * date after which key would expire after creation
   */
  "timeExpires"?: Date;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
}

export namespace ManagementAgentInstallKeySummary {
  export function getJsonObj(obj: ManagementAgentInstallKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
