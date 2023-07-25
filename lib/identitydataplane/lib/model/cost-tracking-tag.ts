/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
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

export interface CostTrackingTag {
  /**
   * The tag namespace id.
   */
  "tagNamespaceId": string;
  /**
   * The tag namespace name.
   */
  "tagNamespaceName": string;
  /**
   * The tag definition id.
   */
  "tagDefinitionId": string;
  /**
   * The tag definition name.
   */
  "tagDefinitionName": string;
}

export namespace CostTrackingTag {
  export function getJsonObj(obj: CostTrackingTag): object {
    const jsonObj = {
      ...obj,
      ...{
        "Tag_Namespace_Id": obj.tagNamespaceId,

        "Tag_Namespace_Name": obj.tagNamespaceName,

        "Tag_Definition_Id": obj.tagDefinitionId,

        "Tag_Definition_Name": obj.tagDefinitionName
      }
    };

    delete (jsonObj as Partial<CostTrackingTag>).tagNamespaceId;
    delete (jsonObj as Partial<CostTrackingTag>).tagNamespaceName;
    delete (jsonObj as Partial<CostTrackingTag>).tagDefinitionId;
    delete (jsonObj as Partial<CostTrackingTag>).tagDefinitionName;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CostTrackingTag): object {
    const jsonObj = {
      ...obj,
      ...{
        "tagNamespaceId": (obj as any)["Tag_Namespace_Id"],

        "tagNamespaceName": (obj as any)["Tag_Namespace_Name"],

        "tagDefinitionId": (obj as any)["Tag_Definition_Id"],

        "tagDefinitionName": (obj as any)["Tag_Definition_Name"]
      }
    };

    delete (jsonObj as any)["Tag_Namespace_Id"];
    delete (jsonObj as any)["Tag_Namespace_Name"];
    delete (jsonObj as any)["Tag_Definition_Id"];
    delete (jsonObj as any)["Tag_Definition_Name"];

    return jsonObj;
  }
}
