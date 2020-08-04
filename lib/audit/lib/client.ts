/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AuditApiKeys {}

export class AuditClient {
  protected static serviceEndpointTemplate = "https://audit.{region}.oraclecloud.com";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20190901";
    if (this.logger) this.logger.info(`AuditClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      AuditClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      AuditClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Sets the client configuration for the client
   */
  public set clientConfiguration(clientConfiguration: common.ClientConfiguration) {
    this._clientConfiguration = clientConfiguration;
  }

  /**
   * Get the configuration
   * @param GetConfigurationRequest
   * @return GetConfigurationResponse
   * @throws OciError when an error occurs
   */
  public async getConfiguration(
    getConfigurationRequest: requests.GetConfigurationRequest
  ): Promise<responses.GetConfigurationResponse> {
    if (this.logger) this.logger.debug("Calling operation AuditClient#getConfiguration.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": getConfigurationRequest.compartmentId
    };

    let headerParams = {};

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configuration",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getConfigurationRequest.retryConfiguration
    );
    const response = await retrier.makeServiceCall(() => this._httpClient.send(request));
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "configuration",
        bodyModel: "model.Configuration",
        responseHeaders: []
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Returns all the audit events processed for the specified compartment within the specified
   * time range.
   *
   * @param ListEventsRequest
   * @return ListEventsResponse
   * @throws OciError when an error occurs
   */
  public async listEvents(
    listEventsRequest: requests.ListEventsRequest
  ): Promise<responses.ListEventsResponse> {
    if (this.logger) this.logger.debug("Calling operation AuditClient#listEvents.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listEventsRequest.compartmentId,
      "startTime": listEventsRequest.startTime,
      "endTime": listEventsRequest.endTime,
      "page": listEventsRequest.page
    };

    let headerParams = {
      "opc-request-id": listEventsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/auditEvents",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listEventsRequest.retryConfiguration
    );
    const response = await retrier.makeServiceCall(() => this._httpClient.send(request));
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListEventsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "AuditEvent[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.AuditEvent objects
   * contained in responses from the listEvents operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllEvents(
    request: requests.ListEventsRequest
  ): AsyncIterableIterator<models.AuditEvent> {
    return paginateRecords(request, req => this.listEvents(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listEvents operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllEventsResponses(
    request: requests.ListEventsRequest
  ): AsyncIterableIterator<responses.ListEventsResponse> {
    return paginateResponses(request, req => this.listEvents(req));
  }

  /**
   * Update the configuration
   * @param UpdateConfigurationRequest
   * @return UpdateConfigurationResponse
   * @throws OciError when an error occurs
   */
  public async updateConfiguration(
    updateConfigurationRequest: requests.UpdateConfigurationRequest
  ): Promise<responses.UpdateConfigurationResponse> {
    if (this.logger) this.logger.debug("Calling operation AuditClient#updateConfiguration.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": updateConfigurationRequest.compartmentId
    };

    let headerParams = {};

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configuration",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateConfigurationRequest.updateConfigurationDetails,
        "UpdateConfigurationDetails",
        models.UpdateConfigurationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateConfigurationRequest.retryConfiguration
    );
    const response = await retrier.makeServiceCall(() => this._httpClient.send(request));
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateConfigurationResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }
}
