/**
 * Search Service API
 * Search for resources in your cloud network.
 * OpenAPI spec version: 20180409
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
 * Contains search context, such as highlighting, for found resources.
 */
export interface SearchContext {
  /**
   * Describes what in each field matched the search criteria by showing highlighted values, but only for free text searches or for structured
   * queries that use a MATCHING clause. The list of strings represents fragments of values that matched the query conditions. Highlighted
   * values are wrapped with &lt;h1&gt;..&lt;/h1&gt; tags. All values are HTML-encoded (except &lt;h1&gt; tags).
   *
   */
  "highlights"?: { [key: string]: Array<string> };
}

export namespace SearchContext {
  export function getJsonObj(obj: SearchContext): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
