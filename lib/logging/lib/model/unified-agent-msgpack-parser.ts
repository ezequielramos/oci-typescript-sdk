/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, agent configurations, log data models,
continuous queries, and managed continuous queries.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * msgpack parser.
 */
export interface UnifiedAgentMsgpackParser extends model.UnifiedAgentParser {
  "parserType": string;
}

export namespace UnifiedAgentMsgpackParser {
  export function getJsonObj(obj: UnifiedAgentMsgpackParser, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getJsonObj(obj) as UnifiedAgentMsgpackParser)),
      ...{}
    };

    return jsonObj;
  }
  export const parserType = "MSGPACK";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentMsgpackParser,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getDeserializedJsonObj(obj) as UnifiedAgentMsgpackParser)),
      ...{}
    };

    return jsonObj;
  }
}
