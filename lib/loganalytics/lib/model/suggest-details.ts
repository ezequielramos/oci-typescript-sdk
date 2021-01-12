/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Typeahead input.
 *
 */
export interface SuggestDetails {
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Flag to search all child compartments of the compartment Id specified in the compartmentId query parameter.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Query seeking suggestions for.
   *
   */
  "queryString": string;
  /**
   * Default subsystem to qualify fields with in the queryString if not specified.
   *
   */
  "subSystem": model.SubSystemName;
}

export namespace SuggestDetails {
  export function getJsonObj(obj: SuggestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
