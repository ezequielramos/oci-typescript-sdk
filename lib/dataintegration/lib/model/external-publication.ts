/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The external published object contains the audit summary information and the definition of the task.
 */
export interface ExternalPublication {
  /**
   * The unique OCID of the identifier that is returned after creating the Oracle Cloud Infrastructure Data Flow application.
   */
  "applicationId"?: string;
  /**
   * The OCID of the compartment where the application is created in the Oracle Cloud Infrastructure Data Flow Service.
   */
  "applicationCompartmentId"?: string;
  /**
   * The name of the application.
   */
  "displayName"?: string;
  "resourceConfiguration"?: model.ResourceConfiguration;
  "configurationDetails"?: model.ConfigurationDetails;
  /**
   * The status of the publishing action to Oracle Cloud Infrastructure Data Flow.
   */
  "status"?: ExternalPublication.Status;
  /**
   * The error of the published object in the application.
   */
  "errorMessage"?: string;
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object type.
   */
  "modelType"?: string;
  /**
   * This is a version number that is used by the service to upgrade objects if needed through releases of the service.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects. Other values are reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "parentRef"?: model.ParentReference;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };
}

export namespace ExternalPublication {
  export enum Status {
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    Publishing = "PUBLISHING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalPublication): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceConfiguration": obj.resourceConfiguration
          ? model.ResourceConfiguration.getJsonObj(obj.resourceConfiguration)
          : undefined,
        "configurationDetails": obj.configurationDetails
          ? model.ConfigurationDetails.getJsonObj(obj.configurationDetails)
          : undefined,

        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
}
