/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Product items of the invoice
 */
export interface InvoiceLineSummary {
  /**
   * Product of the item
   */
  "product": string;
  /**
   * Product of the item
   */
  "orderNo"?: string;
  /**
   * Part number
   */
  "partNumber"?: string;
  /**
   * Start date
   */
  "timeStart"?: Date;
  /**
   * End date
   */
  "timeEnd"?: Date;
  /**
   * Quantity of the ordered product Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantity"?: number;
  /**
   * Unit price of the ordered product Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "netUnitPrice"?: number;
  /**
   * Total price of the ordered product (Net unit price x quantity) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalPrice"?: number;
  "currency"?: model.Currency;
}

export namespace InvoiceLineSummary {
  export function getJsonObj(obj: InvoiceLineSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getJsonObj(obj.currency) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoiceLineSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getDeserializedJsonObj(obj.currency) : undefined
      }
    };

    return jsonObj;
  }
}
