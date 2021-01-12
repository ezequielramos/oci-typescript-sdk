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
 * LogAnalyticsExtendedField
 */
export interface LogAnalyticsExtendedField {
  "field"?: model.LogAnalyticsField;
  "extendedFieldDefinition"?: model.LogAnalyticsSourceExtendedFieldDefinition;
  /**
   * Id
   */
  "extendedFieldDefinitionId"?: number;
  /**
   * new field internal name
   */
  "fieldName"?: string;
  /**
   * new field internal display name
   */
  "fieldDisplayName"?: string;
  /**
   * saved regular expression internal name
   */
  "savedRegularExpressionName"?: string;
  /**
   * extended field Id
   */
  "extendedFieldId"?: number;
}

export namespace LogAnalyticsExtendedField {
  export function getJsonObj(obj: LogAnalyticsExtendedField): object {
    const jsonObj = {
      ...obj,
      ...{
        "field": obj.field ? model.LogAnalyticsField.getJsonObj(obj.field) : undefined,
        "extendedFieldDefinition": obj.extendedFieldDefinition
          ? model.LogAnalyticsSourceExtendedFieldDefinition.getJsonObj(obj.extendedFieldDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}
