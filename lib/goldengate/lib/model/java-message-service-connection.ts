/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Represents the metadata of a Java Message Service Connection.
 *
 */
export interface JavaMessageServiceConnection extends model.Connection {
  /**
   * The Java Message Service technology type.
   *
   */
  "technologyType": JavaMessageServiceConnection.TechnologyType;
  /**
   * If set to true, Java Naming and Directory Interface (JNDI) properties should be provided.
   *
   */
  "shouldUseJndi": boolean;
  /**
   * The Connection Factory can be looked up using this name.
   * e.g.: 'ConnectionFactory'
   *
   */
  "jndiConnectionFactory"?: string;
  /**
   * The URL that Java Message Service will use to contact the JNDI provider.
   * e.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000'
   *
   */
  "jndiProviderUrl"?: string;
  /**
   * The implementation of javax.naming.spi.InitialContextFactory interface
   * that the client uses to obtain initial naming context.
   * e.g.: 'org.apache.activemq.jndi.ActiveMQInitialContextFactory'
   *
   */
  "jndiInitialContextFactory"?: string;
  /**
   * Specifies the identity of the principal (user) to be authenticated.
   * e.g.: 'admin2'
   *
   */
  "jndiSecurityPrincipal"?: string;
  /**
   * Connectin URL of the Java Message Service, specifying the protocol, host, and port.
   * e.g.: 'mq://myjms.host.domain:7676'
   *
   */
  "connectionUrl"?: string;
  /**
   * The of Java class implementing javax.jms.ConnectionFactory interface
   * supplied by the Java Message Service provider.
   * e.g.: 'com.stc.jmsjca.core.JConnectionFactoryXA'
   *
   */
  "connectionFactory"?: string;
  /**
   * The username Oracle GoldenGate uses to connect to the Java Message Service.
   * This username must already exist and be available by the Java Message Service to be connected to.
   *
   */
  "username"?: string;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace JavaMessageServiceConnection {
  export enum TechnologyType {
    OracleWeblogicJms = "ORACLE_WEBLOGIC_JMS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JavaMessageServiceConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getJsonObj(obj) as JavaMessageServiceConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "JAVA_MESSAGE_SERVICE";
  export function getDeserializedJsonObj(
    obj: JavaMessageServiceConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as JavaMessageServiceConnection)),
      ...{}
    };

    return jsonObj;
  }
}
