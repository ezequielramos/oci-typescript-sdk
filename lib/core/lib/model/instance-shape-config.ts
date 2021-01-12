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
 * The shape configuration for an instance. The shape configuration determines
 * the resources allocated to an instance.
 *
 */
export interface InstanceShapeConfig {
  /**
   * The total number of OCPUs available to the instance.
   *
   */
  "ocpus"?: number;
  /**
   * The total amount of memory available to the instance, in gigabytes.
   *
   */
  "memoryInGBs"?: number;
  /**
   * A short description of the instance's processor (CPU).
   *
   */
  "processorDescription"?: string;
  /**
   * The networking bandwidth available to the instance, in gigabits per second.
   *
   */
  "networkingBandwidthInGbps"?: number;
  /**
   * The maximum number of VNIC attachments for the instance.
   *
   */
  "maxVnicAttachments"?: number;
  /**
   * The number of GPUs available to the instance.
   *
   */
  "gpus"?: number;
  /**
    * A short description of the instance's graphics processing unit (GPU).
* <p>
If the instance does not have any GPUs, this field is `null`.
* 
    */
  "gpuDescription"?: string;
  /**
   * The number of local disks available to the instance.
   *
   */
  "localDisks"?: number;
  /**
    * The aggregate size of all local disks, in gigabytes.
* <p>
If the instance does not have any local disks, this field is `null`.
* 
    */
  "localDisksTotalSizeInGBs"?: number;
  /**
    * A short description of the local disks available to this instance.
* <p>
If the instance does not have any local disks, this field is `null`.
* 
    */
  "localDiskDescription"?: string;
}

export namespace InstanceShapeConfig {
  export function getJsonObj(obj: InstanceShapeConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
