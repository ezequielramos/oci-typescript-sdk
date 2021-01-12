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
 * LogAnalyticsLookup
 */
export interface LogAnalyticsLookup {
  /**
   * active edit version
   */
  "activeEditVersion"?: number;
  /**
   * canonical link
   */
  "canonicalLink"?: string;
  /**
   * description
   */
  "description"?: string;
  /**
   * edit version
   */
  "editVersion"?: number;
  /**
   * fields
   */
  "fields"?: Array<model.LookupField>;
  /**
   * lookupReference
   */
  "lookupReference"?: number;
  /**
   * iname
   */
  "name"?: string;
  /**
   * is built in
   */
  "isBuiltIn"?: number;
  /**
   * is hidden
   */
  "isHidden"?: boolean;
  /**
   * name
   */
  "lookupDisplayName"?: string;
  "referringSources"?: model.AutoLookups;
  "statusSummary"?: model.StatusSummary;
  /**
   * last updated date
   */
  "timeUpdated"?: Date;
}

export namespace LogAnalyticsLookup {
  export function getJsonObj(obj: LogAnalyticsLookup): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LookupField.getJsonObj(item);
            })
          : undefined,

        "referringSources": obj.referringSources
          ? model.AutoLookups.getJsonObj(obj.referringSources)
          : undefined,
        "statusSummary": obj.statusSummary
          ? model.StatusSummary.getJsonObj(obj.statusSummary)
          : undefined
      }
    };

    return jsonObj;
  }
}
