/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Updates the Exadata infrastructure.
 *
 */
export interface UpdateExadataInfrastructureDetails {
  /**
   * The IP address for the first control plane server.
   */
  "cloudControlPlaneServer1"?: string;
  /**
   * The IP address for the second control plane server.
   */
  "cloudControlPlaneServer2"?: string;
  /**
   * The netmask for the control plane network.
   */
  "netmask"?: string;
  /**
   * The gateway for the control plane network.
   */
  "gateway"?: string;
  /**
   * The CIDR block for the Exadata administration network.
   */
  "adminNetworkCIDR"?: string;
  /**
   * The CIDR block for the Exadata InfiniBand interconnect.
   */
  "infiniBandNetworkCIDR"?: string;
  /**
   * The corporate network proxy for access to the control plane network.
   */
  "corporateProxy"?: string;
  /**
   * The list of contacts for the Exadata Infrastructure.
   */
  "contacts"?: Array<model.ExadataInfrastructureContact>;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dnsServer"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntpServer"?: Array<string>;
  /**
   * The time zone of the Exadata infrastructure. For details, see [Exadata Infrastructure Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   *
   */
  "timeZone"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateExadataInfrastructureDetails {
  export function getJsonObj(obj: UpdateExadataInfrastructureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "contacts": obj.contacts
          ? obj.contacts.map(item => {
              return model.ExadataInfrastructureContact.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
