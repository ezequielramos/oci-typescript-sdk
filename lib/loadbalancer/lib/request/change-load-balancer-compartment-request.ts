/**
 *
 *
 * OpenAPI spec version: 20170115
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
export interface ChangeLoadBalancerCompartmentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the load balancer to move.
   */
  "loadBalancerId": string;
  /**
   * The configuration details for moving a load balancer to a different compartment.
   */
  "changeLoadBalancerCompartmentDetails": model.ChangeLoadBalancerCompartmentDetails;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations (e.g., if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * may be rejected).
   *
   */
  "opcRetryToken"?: string;
  /**
 * For optimistic concurrency control. Set the if-match parameter to the value of the ETag from a
* previous GET or POST response for that resource. The resource is moved only if the ETag you
* provide matches the resource's current ETag value.
* <p>
Example: `example-etag`
* 
 */
  "ifMatch"?: string;
}
