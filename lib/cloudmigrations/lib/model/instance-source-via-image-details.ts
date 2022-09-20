/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface InstanceSourceViaImageDetails extends model.InstanceSourceDetails {
  /**
   * The size of the boot volume in GBs. The minimum value is 50 GB and the maximum value is 32,768 GB (32 TB).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bootVolumeSizeInGBs"?: number;
  /**
   * The OCID of the image used to boot the instance.
   */
  "imageId": string;
  /**
   * The OCID of the key management key to assign as the master encryption key for the boot volume.
   */
  "kmsKeyId"?: string;
  /**
    * The number of volume performance units (VPUs) that will be applied to this volume per GB that
* represents the Block Volume service's elastic performance options.
* See [Block Volume Performance Levels](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.
* <p>
Allowed values:
* <p>
  * `10`: Represents Balanced option.
* <p>
  * `20`: Represents Higher Performance option.
* <p>
  * `30`-`120`: Represents the Ultra High Performance option.
* <p>
For volumes with the auto-tuned performance feature enabled, this is set to the default (minimum) VPUs/GB.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "bootVolumeVpusPerGB"?: number;

  "sourceType": string;
}

export namespace InstanceSourceViaImageDetails {
  export function getJsonObj(
    obj: InstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceSourceDetails.getJsonObj(obj) as InstanceSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "image";
  export function getDeserializedJsonObj(
    obj: InstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceSourceDetails.getDeserializedJsonObj(
            obj
          ) as InstanceSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
}
