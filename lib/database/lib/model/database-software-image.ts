/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Database software images are created by specifying a patch set, one-off patches and patches for the database home (listed by `ls inventory`).
 *
 */
export interface DatabaseSoftwareImage {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database software image.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The database version with which the database software image is to be built.
   */
  "databaseVersion": string;
  /**
   * The user-friendly name for the database software image. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The current state of the database software image.
   */
  "lifecycleState": DatabaseSoftwareImage.LifecycleState;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the database software image was created.
   */
  "timeCreated": Date;
  /**
   * The type of software image. Can be grid or database.
   */
  "imageType": DatabaseSoftwareImage.ImageType;
  /**
   * To what shape the image is meant for.
   */
  "imageShapeFamily": DatabaseSoftwareImage.ImageShapeFamily;
  /**
   * The PSU or PBP or Release Updates. To get a list of supported versions, use the {@link #listDbVersions(ListDbVersionsRequest) listDbVersions} operation.
   */
  "patchSet": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * List of one-off patches for Database Homes.
   */
  "databaseSoftwareImageIncludedPatches"?: Array<string>;
  /**
   * The patches included in the image and the version of the image
   */
  "includedPatchesSummary"?: string;
  /**
   * List of one-off patches for Database Homes.
   */
  "databaseSoftwareImageOneOffPatches"?: Array<string>;
  /**
   * output from lsinventory which will get passed as a string
   */
  "lsInventory"?: string;
  /**
   * True if this Database software image is supported for Upgrade.
   */
  "isUpgradeSupported"?: boolean;
}

export namespace DatabaseSoftwareImage {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ImageType {
    GridImage = "GRID_IMAGE",
    DatabaseImage = "DATABASE_IMAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ImageShapeFamily {
    VmBmShape = "VM_BM_SHAPE",
    ExadataShape = "EXADATA_SHAPE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseSoftwareImage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
