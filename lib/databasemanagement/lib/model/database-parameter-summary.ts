/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A summary of the database parameter.
 */
export interface DatabaseParameterSummary {
  /**
   * The parameter name.
   */
  "name": string;
  /**
   * The parameter type.
   */
  "type": DatabaseParameterSummary.Type;
  /**
   * The parameter value.
   */
  "value": string;
  /**
   * The parameter value in a user-friendly format. For example, if the `value` property shows the value 262144 for a big integer parameter, then the `displayValue` property will show the value 256K.
   *
   */
  "displayValue": string;
  /**
   * The parameter number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "number"?: number;
  /**
   * Indicates whether the parameter is set to the default value (`TRUE`) or the parameter value was specified in the parameter file (`FALSE`).
   *
   */
  "isDefault"?: boolean;
  /**
   * Indicates whether the parameter can be changed with `ALTER SESSION` (`TRUE`) or not (`FALSE`)
   *
   */
  "isSessionModifiable"?: boolean;
  /**
   * Indicates whether the parameter can be changed with `ALTER SYSTEM` and when the change takes effect:
   * - IMMEDIATE: Parameter can be changed with `ALTER SYSTEM` regardless of the type of parameter file used to start the instance. The change takes effect immediately.
   * - DEFERRED: Parameter can be changed with `ALTER SYSTEM` regardless of the type of parameter file used to start the instance. The change takes effect in subsequent sessions.
   * - FALSE: Parameter cannot be changed with `ALTER SYSTEM` unless a server parameter file was used to start the instance. The change takes effect in subsequent instances.
   *
   */
  "isSystemModifiable"?: DatabaseParameterSummary.IsSystemModifiable;
  /**
   * Indicates whether the parameter can be modified on a per-PDB basis (`TRUE`) or not (`FALSE`). In a non-CDB, the value of this property is `null`.
   *
   */
  "isPdbModifiable"?: boolean;
  /**
   * For parameters that can be changed with `ALTER SYSTEM`, indicates whether the value of the parameter can be different for every instance (`TRUE`) or whether the parameter must have the same value for all Real Application Clusters instances (`FALSE`). For other parameters, this is always `FALSE`.
   *
   */
  "isInstanceModifiable"?: boolean;
  /**
   * Indicates how the parameter was modified. If an `ALTER SYSTEM` was performed, the value will be `MODIFIED`.
   *
   */
  "isModified"?: DatabaseParameterSummary.IsModified;
  /**
   * Indicates whether Oracle adjusted the input value to a more suitable value.
   */
  "isAdjusted"?: boolean;
  /**
   * Indicates whether the parameter has been deprecated (`TRUE`) or not (`FALSE`).
   */
  "isDeprecated"?: boolean;
  /**
   * Indicates whether the parameter is a basic parameter (`TRUE`) or not (`FALSE`).
   */
  "isBasic"?: boolean;
  /**
   * The description of the parameter.
   */
  "description"?: string;
  /**
   * The position (ordinal number) of the parameter value. Useful only for parameters whose values are lists of strings.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ordinal"?: number;
  /**
   * The comments associated with the most recent update.
   */
  "updateComment"?: string;
  /**
   * The ID of the database container to which the data pertains.
   * Possible values include:
   * - `0`: This value is used for data that pertain to the entire CDB. This value is also used for data in non-CDBs.
   * - `1`: This value is used for data that pertain to only the root container.
   * - `n`: Where n is the applicable container ID for the data.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "containerId"?: number;
  /**
   * The parameter category.
   */
  "category"?: string;
  /**
   * Applicable in case of Oracle Real Application Clusters (Oracle RAC) databases.
   * A `UNIQUE` parameter is one which is unique to each Oracle Real Application
   * Clusters (Oracle RAC) instance. For example, the parameter `INSTANCE_NUMBER`
   * must have different values in each instance. An `IDENTICAL` parameter must
   * have the same value for every instance. For example, the parameter
   * `DB_BLOCK_SIZE` must have the same value in all instances.
   *
   */
  "constraint"?: DatabaseParameterSummary.Constraint;
  /**
   * The database instance SID for which the parameter is defined.
   */
  "sid"?: string;
  /**
   * Indicates whether the parameter was specified in the server parameter file (`TRUE`) or not (`FALSE`). Applicable only when the parameter source is `SPFILE`.
   *
   */
  "isSpecified"?: boolean;
  /**
   * A list of allowed values for this parameter.
   */
  "allowedValues"?: Array<model.AllowedParameterValue>;
}

export namespace DatabaseParameterSummary {
  export enum Type {
    Boolean = "BOOLEAN",
    String = "STRING",
    Integer = "INTEGER",
    Filename = "FILENAME",
    BigInteger = "BIG_INTEGER",
    Reserved = "RESERVED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IsSystemModifiable {
    Immediate = "IMMEDIATE",
    Deferred = "DEFERRED",
    False = "FALSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IsModified {
    Modified = "MODIFIED",
    False = "FALSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Constraint {
    Unique = "UNIQUE",
    Identical = "IDENTICAL",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseParameterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "allowedValues": obj.allowedValues
          ? obj.allowedValues.map(item => {
              return model.AllowedParameterValue.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseParameterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "allowedValues": obj.allowedValues
          ? obj.allowedValues.map(item => {
              return model.AllowedParameterValue.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
