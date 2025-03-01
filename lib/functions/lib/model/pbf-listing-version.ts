/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * This represents a version of a PbfListing. Each new update from the publisher or the change in the image will
 * result in the creation of new PbfListingVersion resource creation. This is a sub-resource of a PbfListing.
 *
 */
export interface PbfListingVersion {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * The OCID of the PbfListing this resource version belongs to.
   */
  "pbfListingId": string;
  /**
   * Semantic version
   */
  "name": string;
  /**
   * Details about the required and optional Function configurations needed for proper performance of the PBF.
   *
   */
  "config"?: Array<model.ConfigDetails>;
  "requirements": model.RequirementDetails;
  /**
   * Details changes are included in this version.
   */
  "changeSummary": string;
  /**
   * An array of Trigger. A list of triggers that may activate the PBF.
   */
  "triggers": Array<model.Trigger>;
  /**
   * The time the PbfListingVersion was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The last time the PbfListingVersion was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the PBF resource.
   */
  "lifecycleState": PbfListingVersion.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
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
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace PbfListingVersion {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PbfListingVersion): object {
    const jsonObj = {
      ...obj,
      ...{
        "config": obj.config
          ? obj.config.map(item => {
              return model.ConfigDetails.getJsonObj(item);
            })
          : undefined,
        "requirements": obj.requirements
          ? model.RequirementDetails.getJsonObj(obj.requirements)
          : undefined,

        "triggers": obj.triggers
          ? obj.triggers.map(item => {
              return model.Trigger.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PbfListingVersion): object {
    const jsonObj = {
      ...obj,
      ...{
        "config": obj.config
          ? obj.config.map(item => {
              return model.ConfigDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "requirements": obj.requirements
          ? model.RequirementDetails.getDeserializedJsonObj(obj.requirements)
          : undefined,

        "triggers": obj.triggers
          ? obj.triggers.map(item => {
              return model.Trigger.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
