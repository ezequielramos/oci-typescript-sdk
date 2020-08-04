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
 * Details of a Maintenance Run.
 *
 */
export interface MaintenanceRunSummary {
  /**
   * The OCID of the Maintenance Run.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the Maintenance Run.
   */
  "displayName": string;
  /**
   * The text describing this Maintenance Run.
   */
  "description"?: string;
  /**
   * The current state of the Maintenance Run.
   */
  "lifecycleState": MaintenanceRunSummary.LifecycleState;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Maintenance Run is scheduled for.
   */
  "timeScheduled": Date;
  /**
   * The date and time the Maintenance Run starts.
   */
  "timeStarted"?: Date;
  /**
   * The date and time the Maintenance Run was completed.
   */
  "timeEnded"?: Date;
  /**
   * The type of the target resource on which the Maintenance Run occurs.
   */
  "targetResourceType"?: MaintenanceRunSummary.TargetResourceType;
  /**
   * The ID of the target resource on which the Maintenance Run occurs.
   */
  "targetResourceId"?: string;
  /**
   * Maintenance type.
   */
  "maintenanceType"?: MaintenanceRunSummary.MaintenanceType;
  /**
   * Maintenance sub-type.
   */
  "maintenanceSubtype"?: MaintenanceRunSummary.MaintenanceSubtype;
}

export namespace MaintenanceRunSummary {
  export enum LifecycleState {
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Skipped = "SKIPPED",
    Failed = "FAILED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TargetResourceType {
    AutonomousExadataInfrastructure = "AUTONOMOUS_EXADATA_INFRASTRUCTURE",
    AutonomousContainerDatabase = "AUTONOMOUS_CONTAINER_DATABASE",
    ExadataDbSystem = "EXADATA_DB_SYSTEM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceType {
    Planned = "PLANNED",
    Unplanned = "UNPLANNED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceSubtype {
    Quarterly = "QUARTERLY",
    Hardware = "HARDWARE",
    Critical = "CRITICAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MaintenanceRunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
