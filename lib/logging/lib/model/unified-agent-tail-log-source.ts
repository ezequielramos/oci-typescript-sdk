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
 * Tail log source object.
 */
export interface UnifiedAgentTailLogSource extends model.UnifiedAgentLoggingSource {
  /**
   * Absolute paths for log source files. Wildcard can be used.
   */
  "paths": Array<string>;
  "parser"?:
    | model.UnifiedAgentMultilineGrokParser
    | model.UnifiedJSONParser
    | model.UnifiedAgentGrokParser
    | model.UnifiedAgentNoneParser
    | model.UnifiedAgentSyslogParser
    | model.UnifiedAgentAuditdParser
    | model.UnifiedAgentApache2Parser
    | model.UnifiedAgentRegexParser
    | model.UnifiedAgentMultilineParser
    | model.UnifiedAgentTsvParser
    | model.UnifiedAgentCriParser
    | model.UnifiedAgentApacheErrorParser
    | model.UnifiedAgentMsgpackParser
    | model.UnifiedAgentCsvParser;

  "sourceType": string;
}

export namespace UnifiedAgentTailLogSource {
  export function getJsonObj(obj: UnifiedAgentTailLogSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentLoggingSource.getJsonObj(obj) as UnifiedAgentTailLogSource)),
      ...{
        "parser": obj.parser ? model.UnifiedAgentParser.getJsonObj(obj.parser) : undefined
      }
    };

    return jsonObj;
  }
  export const sourceType = "LOG_TAIL";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentTailLogSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentLoggingSource.getDeserializedJsonObj(
            obj
          ) as UnifiedAgentTailLogSource)),
      ...{
        "parser": obj.parser
          ? model.UnifiedAgentParser.getDeserializedJsonObj(obj.parser)
          : undefined
      }
    };

    return jsonObj;
  }
}
