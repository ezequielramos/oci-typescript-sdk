/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Configuration information used by the encryption domain policy.
 */
export interface EncryptionDomainConfig {
  /**
   * Lists IPv4 or IPv6-enabled subnets in your Oracle tenancy.
   */
  "oracleTrafficSelector"?: Array<string>;
  /**
   * Lists IPv4 or IPv6-enabled subnets in your on-premises network.
   */
  "cpeTrafficSelector"?: Array<string>;
}

export namespace EncryptionDomainConfig {
  export function getJsonObj(obj: EncryptionDomainConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EncryptionDomainConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
