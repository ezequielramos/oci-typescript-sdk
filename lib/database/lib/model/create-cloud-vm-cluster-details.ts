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
 * Details for the create cloud VM cluster operation. Applies to Exadata Cloud Service instances only.
 *
 */
export interface CreateCloudVmClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet associated with the cloud VM cluster.
   *
   */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the cloud VM cluster.
   *
   */
  "backupSubnetId": string;
  /**
    * The number of CPU cores to enable for a cloud VM cluster. Valid values depend on the specified shape:
* <p>
- Exadata.Base.48 - Specify a multiple of 2, from 0 to 48.
* - Exadata.Quarter1.84 - Specify a multiple of 2, from 22 to 84.
* - Exadata.Half1.168 - Specify a multiple of 4, from 44 to 168.
* - Exadata.Full1.336 - Specify a multiple of 8, from 88 to 336.
* - Exadata.Quarter2.92 - Specify a multiple of 2, from 0 to 92.
* - Exadata.Half2.184 - Specify a multiple of 4, from 0 to 184.
* - Exadata.Full2.368 - Specify a multiple of 8, from 0 to 368.
* 
    */
  "cpuCoreCount": number;
  /**
   * The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
   *
   */
  "clusterName"?: string;
  /**
   * The percentage assigned to DATA storage (user data and database files).
   * The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 35, 40, 60 and 80. The default is 80 percent assigned to DATA storage. See [Storage Configuration](https://docs.cloud.oracle.com/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
   *
   */
  "dataStoragePercentage"?: number;
  /**
   * The user-friendly name for the cloud VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure resource.
   */
  "cloudExadataInfrastructureId": string;
  /**
    * The hostname for the cloud VM cluster. The hostname must begin with an alphabetic character, and
* can contain alphanumeric characters and hyphens (-). The maximum length of the hostname is 16 characters for bare metal and virtual machine DB systems, and 12 characters for Exadata systems.
* <p>
The maximum length of the combined hostname and domain is 63 characters.
* <p>
**Note:** The hostname must be unique within the subnet. If it is not unique,
* the cloud VM Cluster will fail to provision.
* 
    */
  "hostname": string;
  /**
   * A domain name used for the cloud VM cluster. If the Oracle-provided internet and VCN
   * resolver is enabled for the specified subnet, the domain name for the subnet is used
   * (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
   * Applies to Exadata Cloud Service instances only.
   *
   */
  "domain"?: string;
  /**
   * The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.
   */
  "sshPublicKeys": Array<string>;
  /**
   * The Oracle license model that applies to the cloud VM cluster. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: CreateCloudVmClusterDetails.LicenseModel;
  /**
   * If true, the sparse disk group is configured for the cloud VM cluster. If false, the sparse disk group is not created.
   *
   */
  "isSparseDiskgroupEnabled"?: boolean;
  /**
   * If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster.
   *
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * The time zone to use for the cloud VM cluster. For details, see [Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   *
   */
  "timeZone"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * A valid Oracle Grid Infrastructure (GI) software version.
   */
  "giVersion": string;
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

export namespace CreateCloudVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: CreateCloudVmClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
