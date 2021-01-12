/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * A summary of a DB System.
 *
 */
export interface DbSystemSummary {
  /**
   * The OCID of the DB System.
   */
  "id": string;
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName": string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the compartment the DB System belongs in.
   */
  "compartmentId"?: string;
  /**
   * If the DB System has an Analytics Cluster attached.
   *
   */
  "isAnalyticsClusterAttached"?: boolean;
  "analyticsCluster"?: model.AnalyticsClusterSummary;
  /**
   * The Availability Domain where the primary DB System should be located.
   *
   */
  "availabilityDomain"?: string;
  /**
   * The name of the Fault Domain the DB System is located in.
   *
   */
  "faultDomain"?: string;
  /**
   * The network endpoints available for this DB System.
   *
   */
  "endpoints"?: Array<model.DbSystemEndpoint>;
  /**
   * The current state of the DB System.
   */
  "lifecycleState": string;
  /**
   * Name of the MySQL Version in use for the DB System.
   */
  "mysqlVersion": string;
  /**
   * The date and time the DB System was created.
   */
  "timeCreated": Date;
  /**
   * The time the DB System was last updated.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DbSystemSummary {
  export function getJsonObj(obj: DbSystemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "analyticsCluster": obj.analyticsCluster
          ? model.AnalyticsClusterSummary.getJsonObj(obj.analyticsCluster)
          : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
