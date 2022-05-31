/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
 *
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
 * An Application Dependency resource creates a Vulnerability Audit.
 */
export interface ApplicationDependency {
  /**
   * Unique Group Artifact Version (GAV) identifier (Group:Artifact:Version), e.g. org.graalvm.nativeimage:svm:21.1.0.
   */
  "gav": string;
  /**
   * Unique identifier of an Application Dependency node, e.g. nodeId1.
   */
  "nodeId": string;
  /**
   * List of (Application Dependencies) node identifiers on which this node depends.
   */
  "applicationDependencyNodeIds": Array<string>;
}

export namespace ApplicationDependency {
  export function getJsonObj(obj: ApplicationDependency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationDependency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
