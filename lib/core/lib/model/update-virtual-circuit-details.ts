/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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

export interface UpdateVirtualCircuitDetails {
  /**
   * The provisioned data rate of the connection. To get a list of the
   * available bandwidth levels (that is, shapes), see
   * {@link #listFastConnectProviderVirtualCircuitBandwidthShapes(ListFastConnectProviderVirtualCircuitBandwidthShapesRequest) listFastConnectProviderVirtualCircuitBandwidthShapes}.
   * To be updated only by the customer who owns the virtual circuit.
   *
   */
  "bandwidthShapeName"?: string;
  /**
    * An array of mappings, each containing properties for a cross-connect or
* cross-connect group associated with this virtual circuit.
* <p>
The customer and provider can update different properties in the mapping
* depending on the situation. See the description of the
* {@link CrossConnectMapping}.
* 
    */
  "crossConnectMappings"?: Array<model.CrossConnectMapping>;
  /**
   * Deprecated. Instead use `customerAsn`.
   * If you specify values for both, the request will be rejected.
   *
   */
  "customerBgpAsn"?: number;
  /**
    * The BGP ASN of the network at the other end of the BGP
* session from Oracle.
* <p>
If the BGP session is from the customer's edge router to Oracle, the
* required value is the customer's ASN, and it can be updated only
* by the customer.
* <p>
If the BGP session is from the provider's edge router to Oracle, the
* required value is the provider's ASN, and it can be updated only
* by the provider.
* <p>
Can be a 2-byte or 4-byte ASN. Uses \"asplain\" format.
* 
    */
  "customerAsn"?: number;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * A user-friendly name. Does not have to be unique.
* Avoid entering confidential information.
* <p>
To be updated only by the customer who owns the virtual circuit.
* 
    */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The OCID of the {@link Drg}
* that this private virtual circuit uses.
* <p>
To be updated only by the customer who owns the virtual circuit.
* 
    */
  "gatewayId"?: string;
  /**
    * The provider's state in relation to this virtual circuit. Relevant only
* if the customer is using FastConnect via a provider.  ACTIVE
* means the provider has provisioned the virtual circuit from their
* end. INACTIVE means the provider has not yet provisioned the virtual
* circuit, or has de-provisioned it.
* <p>
To be updated only by the provider.
* 
    */
  "providerState"?: UpdateVirtualCircuitDetails.ProviderState;
  /**
   * The service key name offered by the provider (if the customer is connecting via a provider).
   *
   */
  "providerServiceKeyName"?: string;
  /**
    * Provider-supplied reference information about this virtual circuit.
* Relevant only if the customer is using FastConnect via a provider.
* <p>
To be updated only by the provider.
* 
    */
  "referenceComment"?: string;
}

export namespace UpdateVirtualCircuitDetails {
  export enum ProviderState {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
  }

  export function getJsonObj(obj: UpdateVirtualCircuitDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "crossConnectMappings": obj.crossConnectMappings
          ? obj.crossConnectMappings.map(item => {
              return model.CrossConnectMapping.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
