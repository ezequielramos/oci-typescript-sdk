/**
 *
 *
 * OpenAPI spec version: 20181116
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListWafBlockedRequestsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the WAAS policy.
   */
  "waasPolicyId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * A filter that limits returned events to those occurring on or after a date and time, specified in RFC 3339 format. If unspecified, defaults to 30 minutes before receipt of the request.
   */
  "timeObservedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that limits returned events to those occurring before a date and time, specified in RFC 3339 format.
   */
  "timeObservedLessThan"?: Date;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * Filter stats by the Web Application Firewall feature that triggered the block action. If unspecified, data for all WAF features will be returned.
   */
  "wafFeature"?: Array<ListWafBlockedRequestsRequest.WafFeature>;
}

export namespace ListWafBlockedRequestsRequest {
  export enum WafFeature {
    ProtectionRules = "PROTECTION_RULES",
    JsChallenge = "JS_CHALLENGE",
    AccessRules = "ACCESS_RULES",
    ThreatFeeds = "THREAT_FEEDS",
    HumanInteractionChallenge = "HUMAN_INTERACTION_CHALLENGE",
    DeviceFingerprintChallenge = "DEVICE_FINGERPRINT_CHALLENGE",
    Captcha = "CAPTCHA",
    AddressRateLimiting = "ADDRESS_RATE_LIMITING"
  }
}
