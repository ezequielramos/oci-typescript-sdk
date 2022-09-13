/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Details of Artifact source
 */
export interface ArtifactExportDetails {
  "artifactSourceType": string;
}

export namespace ArtifactExportDetails {
  export function getJsonObj(obj: ArtifactExportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "artifactSourceType" in obj && obj.artifactSourceType) {
      switch (obj.artifactSourceType) {
        case "ORACLE_OBJECT_STORAGE":
          return model.ArtifactExportDetailsObjectStorage.getJsonObj(
            <model.ArtifactExportDetailsObjectStorage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.artifactSourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ArtifactExportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "artifactSourceType" in obj && obj.artifactSourceType) {
      switch (obj.artifactSourceType) {
        case "ORACLE_OBJECT_STORAGE":
          return model.ArtifactExportDetailsObjectStorage.getDeserializedJsonObj(
            <model.ArtifactExportDetailsObjectStorage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.artifactSourceType}`);
      }
    }
    return jsonObj;
  }
}
