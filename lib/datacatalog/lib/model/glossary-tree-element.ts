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
 * Glossary tree element with child terms.
 */
export interface GlossaryTreeElement {
  /**
   * An array of child terms.
   */
  "childTerms"?: Array<model.GlossaryTreeElement>;
  /**
   * Unique term key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the term.
   */
  "description"?: string;
  /**
   * Unique id of the parent glossary.
   */
  "glossaryKey"?: string;
  /**
   * URI to the term instance in the API.
   */
  "uri"?: string;
  /**
   * This terms parent term key. Will be null if the term has no parent term.
   */
  "parentTermKey"?: string;
  /**
   * Indicates whether a term may contain child terms.
   */
  "isAllowedToHaveChildTerms"?: boolean;
  /**
   * Absolute path of the term.
   */
  "path"?: string;
  /**
   * The date and time the term was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Status of the approval process workflow for this business term in the glossary.
   */
  "workflowStatus"?: model.TermWorkflowStatus;
  /**
   * The number of objects tagged with this term.
   */
  "associatedObjectCount"?: number;
  /**
   * State of the term.
   */
  "lifecycleState"?: model.LifecycleState;
}

export namespace GlossaryTreeElement {
  export function getJsonObj(obj: GlossaryTreeElement): object {
    const jsonObj = {
      ...obj,
      ...{
        "childTerms": obj.childTerms
          ? obj.childTerms.map(item => {
              return model.GlossaryTreeElement.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
