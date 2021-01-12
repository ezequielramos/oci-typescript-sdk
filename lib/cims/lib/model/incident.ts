/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details of about the incident object.
 */
export interface Incident {
  /**
   * Unique identifier for the support ticket.
   */
  "key": string;
  /**
   * The OCID of the tenancy.
   */
  "compartmentId"?: string;
  "contactList"?: model.ContactList;
  "tenancyInformation"?: model.TenancyInformation;
  "ticket"?: model.Ticket;
  "incidentType"?: model.IncidentType;
  /**
   * The kind of support ticket, such as a technical support request.
   */
  "problemType"?: model.ProblemType;
  /**
   * The incident referrer. This value is often the URL that the customer used when creating the support ticket.
   */
  "referrer"?: string;
}

export namespace Incident {
  export function getJsonObj(obj: Incident): object {
    const jsonObj = {
      ...obj,
      ...{
        "contactList": obj.contactList ? model.ContactList.getJsonObj(obj.contactList) : undefined,
        "tenancyInformation": obj.tenancyInformation
          ? model.TenancyInformation.getJsonObj(obj.tenancyInformation)
          : undefined,
        "ticket": obj.ticket ? model.Ticket.getJsonObj(obj.ticket) : undefined,
        "incidentType": obj.incidentType
          ? model.IncidentType.getJsonObj(obj.incidentType)
          : undefined
      }
    };

    return jsonObj;
  }
}
