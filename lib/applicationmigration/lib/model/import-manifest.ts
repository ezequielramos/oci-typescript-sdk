/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Manifest describing details about an import source
 */
export interface ImportManifest {
  /**
   * the version of the export tool that was used to generate the manifest
   */
  "version"?: string;
  /**
   * the type of application that the export tool was executed against to generate this manifest
   */
  "exportType"?: string;
  /**
   * application specific details as parsed from various sources of the application that was exported
   */
  "exportDetails"?: any;
  /**
   * when this manifest was generated
   */
  "timestamp"?: Date;
  /**
   * the MD5 hash of the export artifact archive that was produced by the export tool and should be used with this manifest
   */
  "md5"?: string;
  /**
   * a sha1 hash of all the fields of this manifest (excluding the signature)
   */
  "signature"?: string;
}

export namespace ImportManifest {
  export function getJsonObj(obj: ImportManifest): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportManifest): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
