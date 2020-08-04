/**
 *
 *
 * OpenAPI spec version: 20160918
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
export interface DeleteObjectRequest extends common.BaseRequest {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespaceName": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: `my-new-bucket1`
   *
   */
  "bucketName": string;
  /**
   * The name of the object. Avoid entering confidential information.
   * Example: `test/object1.log`
   *
   */
  "objectName": string;
  /**
   * The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object.
   * For uploading a part, this is the entity tag of the target part.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
  /**
   * VersionId used to identify a particular version of the object
   */
  "versionId"?: string;
}
