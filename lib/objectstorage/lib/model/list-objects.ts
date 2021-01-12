/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface ListObjects {
  /**
   * An array of object summaries.
   *
   */
  "objects": Array<model.ObjectSummary>;
  /**
   * Prefixes that are common to the results returned by the request if the request specified a delimiter.
   *
   */
  "prefixes"?: Array<string>;
  /**
   * The name of the object to use in the 'start' parameter to obtain the next page of
   * a truncated ListObjects response. Avoid entering confidential information.
   * Example: test/object1.log
   *
   */
  "nextStartWith"?: string;
}

export namespace ListObjects {
  export function getJsonObj(obj: ListObjects): object {
    const jsonObj = {
      ...obj,
      ...{
        "objects": obj.objects
          ? obj.objects.map(item => {
              return model.ObjectSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
