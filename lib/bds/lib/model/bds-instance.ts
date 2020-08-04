/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Description of the BDS instance
 */
export interface BdsInstance {
  /**
   * The OCID of the BDS resource
   */
  "id": string;
  /**
   * The OCID of the compartment
   */
  "compartmentId": string;
  /**
   * Name of the BDS instance
   */
  "displayName": string;
  /**
   * The state of the BDS instance
   */
  "lifecycleState": BdsInstance.LifecycleState;
  /**
   * Version of the Hadoop distribution
   */
  "clusterVersion"?: BdsInstance.ClusterVersion;
  /**
   * Boolean flag specifying whether or not the cluster is HA
   */
  "isHighAvailability": boolean;
  /**
   * Boolean flag specifying whether or not the cluster should be setup as secure.
   */
  "isSecure": boolean;
  /**
   * Boolean flag specifying whether we configure Cloud SQL or not
   */
  "isCloudSqlConfigured": boolean;
  /**
   * Additional configuration of customer's network.
   */
  "networkConfig"?: model.NetworkConfig;
  /**
   * Specific info about a Hadoop cluster
   */
  "clusterDetails"?: model.ClusterDetails;
  /**
   * The list of nodes in the BDS instance
   */
  "nodes": Array<model.Node>;
  /**
   * The information about added Cloud SQL capability
   */
  "cloudSqlDetails"?: model.CloudSqlDetails;
  /**
   * The user who created the BDS instance.
   */
  "createdBy"?: string;
  /**
   * The time the BDS instance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the BDS instance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Number of nodes that forming the cluster
   */
  "numberOfNodes": number;
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

export namespace BdsInstance {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    UpdatingInfra = "UPDATING_INFRA",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED",
    Resuming = "RESUMING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ClusterVersion {
    Cdh5 = "CDH5",
    Cdh6 = "CDH6",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BdsInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfig": obj.networkConfig
          ? model.NetworkConfig.getJsonObj(obj.networkConfig)
          : undefined,
        "clusterDetails": obj.clusterDetails
          ? model.ClusterDetails.getJsonObj(obj.clusterDetails)
          : undefined,
        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.Node.getJsonObj(item);
            })
          : undefined,
        "cloudSqlDetails": obj.cloudSqlDetails
          ? model.CloudSqlDetails.getJsonObj(obj.cloudSqlDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
