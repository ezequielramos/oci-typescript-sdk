/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * Options for customers to define the general policy of how compute service perform maintenance on VM instances.
 *
 */
export interface InstanceConfigurationAvailabilityConfig {
  /**
   * Actions customers can specify that would be applied to their instances after scheduled or unexpected host maintenance.
   * * `RESTORE_INSTANCE` - This would be the default action if recoveryAction is not set. VM instances
   * will be restored to the power state it was in before maintenance.
   * * `STOP_INSTANCE` - This action allow customers to have their VM instances be stopped after maintenance.
   *
   */
  "recoveryAction"?: InstanceConfigurationAvailabilityConfig.RecoveryAction;
}

export namespace InstanceConfigurationAvailabilityConfig {
  export enum RecoveryAction {
    RestoreInstance = "RESTORE_INSTANCE",
    StopInstance = "STOP_INSTANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceConfigurationAvailabilityConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
