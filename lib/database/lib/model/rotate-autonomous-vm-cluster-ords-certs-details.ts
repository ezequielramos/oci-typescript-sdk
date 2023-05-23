/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The details for configuring the SSL certificates on Autonomous VM Cluster
 *
 */
export interface RotateAutonomousVmClusterOrdsCertsDetails {
  /**
   * Specify SYSTEM to use Oracle-managed certificates. Specify BYOC when you want to bring your own certificate.
   */
  "certificateGenerationType": RotateAutonomousVmClusterOrdsCertsDetails.CertificateGenerationType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the certificate to use.
   *
   */
  "certificateId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the certificate authority.
   *
   */
  "certificateAuthorityId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the certificate bundle.
   *
   */
  "caBundleId"?: string;
}

export namespace RotateAutonomousVmClusterOrdsCertsDetails {
  export enum CertificateGenerationType {
    System = "SYSTEM",
    Byoc = "BYOC"
  }

  export function getJsonObj(obj: RotateAutonomousVmClusterOrdsCertsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RotateAutonomousVmClusterOrdsCertsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
