/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
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
 * Details for moving a Knowledge Base.
 */
export interface ChangeKnowledgeBaseCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment to which the resource must be moved.
   */
  "compartmentId": string;
}

export namespace ChangeKnowledgeBaseCompartmentDetails {
  export function getJsonObj(obj: ChangeKnowledgeBaseCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeKnowledgeBaseCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
