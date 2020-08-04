/**
 *
 *
 * OpenAPI spec version: 20180401
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListMetricsRequest extends common.BaseRequest {
  /**
 * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the
* resources monitored by the metric that you are searching for. Use tenancyId to search in
* the root compartment.
* <p>
Example: `ocid1.compartment.oc1..exampleuniqueID`
* 
 */
  "compartmentId": string;
  /**
   * The dimensions used to filter metrics.
   */
  "listMetricsDetails": model.ListMetricsDetails;
  /**
   * Customer part of the request identifier token. If you need to contact Oracle about a particular
   * request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call. 
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Default: 1000
* <p>
Example: 500
* 
 */
  "limit"?: number;
  /**
   * When true, returns resources from all compartments and subcompartments. The parameter can
   * only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment).
   * A true value requires the user to have tenancy-level permissions. If this requirement is not met,
   * then the call is rejected. When false, returns resources from only the compartment specified in
   * compartmentId. Default is false.
   *
   */
  "compartmentIdInSubtree"?: boolean;
}
