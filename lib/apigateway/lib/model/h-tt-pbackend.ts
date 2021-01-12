/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Send the request to an HTTP backend.
 *
 */
export interface HTTPBackend extends model.ApiSpecificationRouteBackend {
  "url": string;
  /**
   * Defines a timeout for establishing a connection with a proxied server.
   *
   */
  "connectTimeoutInSeconds"?: number;
  /**
   * Defines a timeout for reading a response from the proxied server.
   *
   */
  "readTimeoutInSeconds"?: number;
  /**
   * Defines a timeout for transmitting a request to the proxied server.
   *
   */
  "sendTimeoutInSeconds"?: number;
  /**
   * Defines whether or not to uphold SSL verification.
   *
   */
  "isSslVerifyDisabled"?: boolean;

  "type": string;
}

export namespace HTTPBackend {
  export function getJsonObj(obj: HTTPBackend, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getJsonObj(obj) as HTTPBackend)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "HTTP_BACKEND";
}
