/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The filter for GitLab events.
 */
export interface DevopsCodeRepositoryFilter extends model.Filter {
  /**
   * The events only support PUSH.
   */
  "events"?: Array<DevopsCodeRepositoryFilter.Events>;
  "include"?: model.DevopsCodeRepositoryFilterAttributes;
  "exclude"?: model.DevopsCodeRepositoryFilterExclusionAttributes;

  "triggerSource": string;
}

export namespace DevopsCodeRepositoryFilter {
  export enum Events {
    Push = "PUSH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DevopsCodeRepositoryFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Filter.getJsonObj(obj) as DevopsCodeRepositoryFilter)),
      ...{
        "include": obj.include
          ? model.DevopsCodeRepositoryFilterAttributes.getJsonObj(obj.include)
          : undefined,
        "exclude": obj.exclude
          ? model.DevopsCodeRepositoryFilterExclusionAttributes.getJsonObj(obj.exclude)
          : undefined
      }
    };

    return jsonObj;
  }
  export const triggerSource = "DEVOPS_CODE_REPOSITORY";
  export function getDeserializedJsonObj(
    obj: DevopsCodeRepositoryFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Filter.getDeserializedJsonObj(obj) as DevopsCodeRepositoryFilter)),
      ...{
        "include": obj.include
          ? model.DevopsCodeRepositoryFilterAttributes.getDeserializedJsonObj(obj.include)
          : undefined,
        "exclude": obj.exclude
          ? model.DevopsCodeRepositoryFilterExclusionAttributes.getDeserializedJsonObj(obj.exclude)
          : undefined
      }
    };

    return jsonObj;
  }
}
