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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Options for defining the availability of a VM instance after a maintenance event that impacts the underlying hardware.
 *
 */
export interface UpdateInstanceAvailabilityConfigDetails {
  /**
   * The lifecycle state for an instance when it is recovered after infrastructure maintenance.
   * * `RESTORE_INSTANCE` - The instance is restored to the lifecycle state it was in before the maintenance event.
   * If the instance was running, it is automatically rebooted. This is the default action when a value is not set.
   * * `STOP_INSTANCE` - The instance is recovered in the stopped state.
   *
   */
  "recoveryAction"?: UpdateInstanceAvailabilityConfigDetails.RecoveryAction;
}

export namespace UpdateInstanceAvailabilityConfigDetails {
  export enum RecoveryAction {
    RestoreInstance = "RESTORE_INSTANCE",
    StopInstance = "STOP_INSTANCE"
  }

  export function getJsonObj(obj: UpdateInstanceAvailabilityConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
