/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define a request to create a cluster kubeconfig.
 */
export interface CreateClusterKubeconfigContentDetails {
  /**
   * The version of the kubeconfig token. Supported value 2.0.0
   *
   */
  "tokenVersion"?: string;
  /**
   * Deprecated. This field is no longer used.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "expiration"?: number;
  /**
   * The endpoint to target. A cluster may have multiple endpoints exposed but the kubeconfig can only target one at a time.
   */
  "endpoint"?: CreateClusterKubeconfigContentDetails.Endpoint;
}

export namespace CreateClusterKubeconfigContentDetails {
  export enum Endpoint {
    LegacyKubernetes = "LEGACY_KUBERNETES",
    PublicEndpoint = "PUBLIC_ENDPOINT",
    PrivateEndpoint = "PRIVATE_ENDPOINT"
  }

  export function getJsonObj(obj: CreateClusterKubeconfigContentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
