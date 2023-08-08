/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * The document response for entities detect call.
 */
export interface EntityDocumentResult {
  /**
   * Document unique identifier defined by the user.
   */
  "key": string;
  /**
   * List of detected entities.
   */
  "entities": Array<model.HierarchicalEntity>;
  /**
   * Language code supported
   * - auto : Automatically detect language
   * - ar : Arabic
   * - pt-BR : Brazilian Portuguese
   * - cs : Czech
   * - da : Danish
   * - nl : Dutch
   * - en : English
   * - fi : Finnish
   * - fr : French
   * - fr-CA : Canadian French
   * - de : German
   * - it : Italian
   * - ja : Japanese
   * - ko : Korean
   * - no : Norwegian
   * - pl : Polish
   * - ro : Romanian
   * - zh-CN : Simplified Chinese
   * - es : Spanish
   * - sv : Swedish
   * - zh-TW : Traditional Chinese
   * - tr : Turkish
   * - el : Greek
   * - he : Hebrew
   *
   */
  "languageCode": string;
}

export namespace EntityDocumentResult {
  export function getJsonObj(obj: EntityDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.HierarchicalEntity.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.HierarchicalEntity.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
