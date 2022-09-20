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

/**
 * A top-level container to track all aspects of a long-running migration workflow to OCI.
 */
export interface Migration {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Migration Identifier that can be renamed
   */
  "displayName"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The current state of migration.
   */
  "lifecycleState": Migration.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, it can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time when the migration project was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time when the migration project was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Replication schedule identifier
   */
  "replicationScheduleId"?: string;
  /**
   * Indicates whether migration is marked as completed.
   */
  "isCompleted"?: boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. It exists only for cross-compatibility.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Migration {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    NeedsAttention = "NEEDS_ATTENTION",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Migration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Migration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
