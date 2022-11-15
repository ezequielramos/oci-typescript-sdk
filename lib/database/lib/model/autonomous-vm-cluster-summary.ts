/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the Autonomous VM cluster.
 *
 */
export interface AutonomousVmClusterSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous VM cluster.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The date and time that the Autonomous VM cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * The current state of the Autonomous VM cluster.
   */
  "lifecycleState": AutonomousVmClusterSummary.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time zone to use for the Autonomous VM cluster. For details, see [DB System Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster network.
   */
  "vmClusterNetworkId": string;
  /**
   * If true, database backup on local Exadata storage is configured for the Autonomous VM cluster. If false, database backup on local Exadata storage is not available in the Autonomous VM cluster.
   *
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * The number of enabled CPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpusEnabled"?: number;
  /**
   * The number of enabled OCPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpusEnabled"?: number;
  /**
   * The numnber of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * The total number of Autonomous Container Databases that can be created. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
   * The amount of memory (in GBs) enabled per each OCPU core. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
  /**
   * The number of CPU cores enabled per VM cluster node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCountPerNode"?: number;
  /**
   * The data disk group size allocated for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The total data storage allocated in TBs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The total data storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * **Deprecated.** Use `availableAutonomousDataStorageSizeInTBs` for Autonomous Databases' data storage availability in TBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableDataStorageSizeInTBs"?: number;
  /**
   * The Oracle license model that applies to the Autonomous VM cluster. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: AutonomousVmClusterSummary.LicenseModel;
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
   * CPU cores that continue to be included in the count of OCPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available OCPUs at its parent AVMC level by restarting the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * The number of Autonomous Container Databases that can be created with the currently available local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableContainerDatabases"?: number;
  /**
   * The data disk group size available for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableAutonomousDataStorageSizeInTBs"?: number;
  /**
   * The SCAN Listener TLS port number. Default value is 2484. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTls"?: number;
  /**
   * The SCAN Listener Non TLS port number. Default value is 1521. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortNonTls"?: number;
  /**
   * Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster. Default is TLS.
   */
  "isMtlsEnabled"?: boolean;
}

export namespace AutonomousVmClusterSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousVmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousVmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
}
