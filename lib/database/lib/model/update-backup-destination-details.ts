/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * For a RECOVERY_APPLIANCE backup destination, used to update the connection string and/or the list of VPC users.
 * For an NFS backup destination, there are 2 mount types - Self mount used for non-autonomous ExaCC and automated mount used for autonomous on ExaCC.
 *
 */
export interface UpdateBackupDestinationDetails {
  /**
   * For a RECOVERY_APPLIANCE backup destination, the Virtual Private Catalog (VPC) users that are used to access the Recovery Appliance.
   */
  "vpcUsers"?: Array<string>;
  /**
   * For a RECOVERY_APPLIANCE backup destination, the connection string for connecting to the Recovery Appliance.
   */
  "connectionString"?: string;
  /**
   * The local directory path on each VM cluster node where the NFS server location is mounted. The local directory path and the NFS server location must each be the same across all of the VM cluster nodes. Ensure that the NFS mount is maintained continuously on all of the VM cluster nodes.
   *
   */
  "localMountPointPath"?: string;
  /**
   * NFS Mount type for backup destination.
   */
  "nfsMountType"?: UpdateBackupDestinationDetails.NfsMountType;
  /**
   * IP addresses for NFS Auto mount.
   */
  "nfsServer"?: Array<string>;
  /**
   * Specifies the directory on which to mount the file system
   */
  "nfsServerExport"?: string;
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
}

export namespace UpdateBackupDestinationDetails {
  export enum NfsMountType {
    SelfMount = "SELF_MOUNT",
    AutomatedMount = "AUTOMATED_MOUNT"
  }

  export function getJsonObj(obj: UpdateBackupDestinationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
