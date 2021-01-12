/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Credentials to access the Oracle Integration application in the source environment. Application Migration connects to the
 * application in the source environment with the supplied credentials.
 *
 */
export interface OicDiscoveryDetails extends model.DiscoveryDetails {
  /**
   * Application administrator username to access the Oracle Integration Classic instance in the source environment.
   */
  "serviceInstanceUser": string;
  /**
   * Password for this user.
   */
  "serviceInstancePassword": string;

  "type": string;
}

export namespace OicDiscoveryDetails {
  export function getJsonObj(obj: OicDiscoveryDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DiscoveryDetails.getJsonObj(obj) as OicDiscoveryDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OIC";
}
