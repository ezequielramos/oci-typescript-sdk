/**
 * ManagementDashboard API
 * API for the Management Dashboard micro-service. Use this API for dashboard and saved search metadata preservation and to perform  tasks such as creating a dashboard, creating a saved search, and obtaining a list of dashboards and saved searches in a compartment.
    

 * OpenAPI spec version: 20200901
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
 * Compartment to which the saved search is being moved.
 */
export interface ChangeManagementSavedSearchesCompartmentDetails {
  /**
   * OCID of the compartment to which the saved search is being moved.
   */
  "compartmentId": string;
}

export namespace ChangeManagementSavedSearchesCompartmentDetails {
  export function getJsonObj(obj: ChangeManagementSavedSearchesCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
