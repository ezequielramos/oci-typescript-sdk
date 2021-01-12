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
 * LogAnalyticsSourceExtendedFieldDefinition
 */
export interface LogAnalyticsSourceExtendedFieldDefinition {
  "field"?: model.LogAnalyticsField;
  /**
   * display regular expression
   */
  "displayRegularExpression"?: string;
  /**
   * extended fields
   */
  "extendedFields"?: Array<model.LogAnalyticsExtendedField>;
  /**
   * base field internal name
   */
  "baseFieldName"?: string;
  /**
   * base field log text
   */
  "baseFieldLogText"?: string;
  /**
   * conditional data type
   */
  "conditionDataType"?: string;
  /**
   * conditional field
   */
  "conditionField"?: string;
  /**
   * conditional operator
   */
  "conditionOperator"?: string;
  /**
   * conditional value
   */
  "conditionValue"?: string;
  /**
   * converted regular expression
   */
  "convertedRegularExpression"?: string;
  /**
   * enabled
   */
  "isEnabled"?: boolean;
  /**
   * id
   */
  "extendedFieldDefinitionId"?: number;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * regular expression
   */
  "regularExpression"?: string;
  /**
   * source Id
   */
  "sourceId"?: number;
  /**
   * last updated date
   */
  "timeUpdated"?: Date;
}

export namespace LogAnalyticsSourceExtendedFieldDefinition {
  export function getJsonObj(obj: LogAnalyticsSourceExtendedFieldDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "field": obj.field ? model.LogAnalyticsField.getJsonObj(obj.field) : undefined,

        "extendedFields": obj.extendedFields
          ? obj.extendedFields.map(item => {
              return model.LogAnalyticsExtendedField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
