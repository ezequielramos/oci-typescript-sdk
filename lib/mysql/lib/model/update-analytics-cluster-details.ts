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
 * Details about the Analytics Cluster properties to be updated.
 *
 */
export interface UpdateAnalyticsClusterDetails {
  /**
   * A change to the shape of the nodes in the Analytics Cluster will
   * result in the entire cluster being torn down and re-created with
   * Compute instances of the new Shape. This may result in significant
   * downtime for the analytics capability while the Analytics Cluster is
   * re-provisioned.
   *
   */
  "shapeName"?: string;
  /**
   * A change to the number of nodes in the Analytics Cluster will result
   * in the entire cluster being torn down and re-created with the new
   * cluster of nodes. This may result in a significant downtime for the
   * analytics capability while the Analytics Cluster is
   * re-provisioned.
   *
   */
  "clusterSize"?: number;
}

export namespace UpdateAnalyticsClusterDetails {
  export function getJsonObj(obj: UpdateAnalyticsClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
