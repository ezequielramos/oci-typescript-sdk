/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Properties used in glossary create operations.
 */
export interface CreateGlossaryDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Detailed description of the glossary.
   */
  "description"?: string;
  /**
   * Status of the approval process workflow for this business glossary.
   */
  "workflowStatus"?: model.TermWorkflowStatus;
  /**
   * OCID of the user who is the owner of the glossary.
   */
  "owner"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
}

export namespace CreateGlossaryDetails {
  export function getJsonObj(obj: CreateGlossaryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
