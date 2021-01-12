/**
 *
 *
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

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/ListObjects.ts.html |here} to see how to use ListObjectsRequest.
 */
export interface ListObjectsRequest extends common.BaseRequest {
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
   * The string to use for matching against the start of object names in a list query.
   */
  "prefix"?: string;
  /**
   * Object names returned by a list query must be greater or equal to this parameter.
   */
  "start"?: string;
  /**
   * Object names returned by a list query must be strictly less than this parameter.
   */
  "end"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * When this parameter is set, only objects whose names do not contain the delimiter character
   * (after an optionally specified prefix) are returned in the objects key of the response body.
   * Scanned objects whose names contain the delimiter have the part of their name up to the first
   * occurrence of the delimiter (including the optional prefix) returned as a set of prefixes.
   * Note that only '/' is a supported delimiter character at this time.
   *
   */
  "delimiter"?: string;
  /**
   * Object summary in list of objects includes the 'name' field. This parameter can also include 'size'
   * (object size in bytes), 'etag', 'md5', 'timeCreated' (object creation date and time) and 'timeModified'
   * (object modification date and time).
   * Value of this parameter should be a comma-separated, case-insensitive list of those field names.
   * For example 'name,etag,timeCreated,md5,timeModified'
   *
   */
  "fields"?: ListObjectsRequest.Fields;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
  /**
   * Object names returned by a list query must be greater than this parameter.
   */
  "startAfter"?: string;
}

export namespace ListObjectsRequest {
  export enum Fields {
    Name = "name",
    Size = "size",
    Etag = "etag",
    TimeCreated = "timeCreated",
    Md5 = "md5",
    TimeModified = "timeModified"
  }
}
