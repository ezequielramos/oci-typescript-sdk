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
 * LogAnalyticsSource
 */
export interface LogAnalyticsSource {
  /**
   * alert conditions
   */
  "labelConditions"?: Array<model.LogAnalyticsSourceLabelCondition>;
  /**
   * association count
   */
  "associationCount"?: number;
  /**
   * association entity
   */
  "associationEntity"?: Array<model.LogAnalyticsAssociation>;
  /**
   * data filter definitions
   */
  "dataFilterDefinitions"?: Array<model.LogAnalyticsSourceDataFilter>;
  /**
   * DB credential
   */
  "databaseCredential"?: string;
  /**
   * extended field definition
   */
  "extendedFieldDefinitions"?: Array<model.LogAnalyticsSourceExtendedFieldDefinition>;
  /**
   * is for cloud flag
   */
  "isForCloud"?: boolean;
  /**
   * labels
   */
  "labels"?: Array<model.LogAnalyticsLabelView>;
  /**
   * metric definitions
   */
  "metricDefinitions"?: Array<model.LogAnalyticsMetric>;
  /**
   * metric source map
   */
  "metrics"?: Array<model.LogAnalyticsSourceMetric>;
  /**
   * out-of-the-box source parser list
   */
  "oobParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * parameters
   */
  "parameters"?: Array<model.LogAnalyticsParameter>;
  /**
   * pattern count
   */
  "patternCount"?: number;
  /**
   * patterns
   */
  "patterns"?: Array<model.LogAnalyticsSourcePattern>;
  /**
   * description
   */
  "description"?: string;
  /**
   * display name
   */
  "displayName"?: string;
  /**
   * source edit version
   */
  "editVersion"?: number;
  /**
   * source functions
   */
  "functions"?: Array<model.LogAnalyticsSourceFunction>;
  /**
   * source Id
   */
  "sourceId"?: number;
  /**
   * source internal name
   */
  "name"?: string;
  /**
   * is secure content flag
   */
  "isSecureContent"?: boolean;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * parser list
   */
  "parsers"?: Array<model.LogAnalyticsParser>;
  /**
   * rule auto association enabled flag
   */
  "isAutoAssociationEnabled"?: boolean;
  /**
   * rule auto association override
   */
  "isAutoAssociationOverride"?: boolean;
  /**
   * rule Id
   */
  "ruleId"?: number;
  /**
   * source type internal name
   */
  "typeName"?: string;
  /**
   * source type name
   */
  "typeDisplayName"?: string;
  /**
   * source warning configuration
   */
  "warningConfig"?: number;
  /**
   * source metadata fields
   */
  "metadataFields"?: Array<model.LogAnalyticsSourceMetadataField>;
  /**
   * tags
   */
  "labelDefinitions"?: Array<model.LogAnalyticsLabelDefinition>;
  /**
   * Entity types
   */
  "entityTypes"?: Array<model.LogAnalyticsSourceEntityType>;
  /**
   * time zone override
   */
  "isTimezoneOverride"?: boolean;
  /**
   * source parser list
   */
  "userParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * timeUpdated
   */
  "timeUpdated"?: Date;
}

export namespace LogAnalyticsSource {
  export function getJsonObj(obj: LogAnalyticsSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "labelConditions": obj.labelConditions
          ? obj.labelConditions.map(item => {
              return model.LogAnalyticsSourceLabelCondition.getJsonObj(item);
            })
          : undefined,

        "associationEntity": obj.associationEntity
          ? obj.associationEntity.map(item => {
              return model.LogAnalyticsAssociation.getJsonObj(item);
            })
          : undefined,
        "dataFilterDefinitions": obj.dataFilterDefinitions
          ? obj.dataFilterDefinitions.map(item => {
              return model.LogAnalyticsSourceDataFilter.getJsonObj(item);
            })
          : undefined,

        "extendedFieldDefinitions": obj.extendedFieldDefinitions
          ? obj.extendedFieldDefinitions.map(item => {
              return model.LogAnalyticsSourceExtendedFieldDefinition.getJsonObj(item);
            })
          : undefined,

        "labels": obj.labels
          ? obj.labels.map(item => {
              return model.LogAnalyticsLabelView.getJsonObj(item);
            })
          : undefined,
        "metricDefinitions": obj.metricDefinitions
          ? obj.metricDefinitions.map(item => {
              return model.LogAnalyticsMetric.getJsonObj(item);
            })
          : undefined,
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.LogAnalyticsSourceMetric.getJsonObj(item);
            })
          : undefined,
        "oobParsers": obj.oobParsers
          ? obj.oobParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.LogAnalyticsParameter.getJsonObj(item);
            })
          : undefined,

        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.LogAnalyticsSourcePattern.getJsonObj(item);
            })
          : undefined,

        "functions": obj.functions
          ? obj.functions.map(item => {
              return model.LogAnalyticsSourceFunction.getJsonObj(item);
            })
          : undefined,

        "parsers": obj.parsers
          ? obj.parsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,

        "metadataFields": obj.metadataFields
          ? obj.metadataFields.map(item => {
              return model.LogAnalyticsSourceMetadataField.getJsonObj(item);
            })
          : undefined,
        "labelDefinitions": obj.labelDefinitions
          ? obj.labelDefinitions.map(item => {
              return model.LogAnalyticsLabelDefinition.getJsonObj(item);
            })
          : undefined,
        "entityTypes": obj.entityTypes
          ? obj.entityTypes.map(item => {
              return model.LogAnalyticsSourceEntityType.getJsonObj(item);
            })
          : undefined,

        "userParsers": obj.userParsers
          ? obj.userParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
