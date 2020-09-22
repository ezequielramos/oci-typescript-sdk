/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AnnouncementApiKeys {}

export class AnnouncementClient {
  protected static serviceEndpointTemplate = "https://announcements.{region}.{secondLevelDomain}";
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
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180904";
    if (this.logger) this.logger.info(`AnnouncementClient endpoint set to ${this._endpoint}`);
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
      AnnouncementClient.serviceEndpointTemplate,
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
      AnnouncementClient.serviceEndpointTemplate,
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
   * Gets the details of a specific announcement.
   *
   * @param GetAnnouncementRequest
   * @return GetAnnouncementResponse
   * @throws OciError when an error occurs
   */
  public async getAnnouncement(
    getAnnouncementRequest: requests.GetAnnouncementRequest
  ): Promise<responses.GetAnnouncementResponse> {
    if (this.logger) this.logger.debug("Calling operation AnnouncementClient#getAnnouncement.");
    const pathParams = {
      "{announcementId}": getAnnouncementRequest.announcementId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAnnouncementRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/announcements/{announcementId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getAnnouncementRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAnnouncementResponse>{},
        body: await response.json(),
        bodyKey: "announcement",
        bodyModel: "model.Announcement",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets information about whether a specific announcement was acknowledged by a user.
   *
   * @param GetAnnouncementUserStatusRequest
   * @return GetAnnouncementUserStatusResponse
   * @throws OciError when an error occurs
   */
  public async getAnnouncementUserStatus(
    getAnnouncementUserStatusRequest: requests.GetAnnouncementUserStatusRequest
  ): Promise<responses.GetAnnouncementUserStatusResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AnnouncementClient#getAnnouncementUserStatus.");
    const pathParams = {
      "{announcementId}": getAnnouncementUserStatusRequest.announcementId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAnnouncementUserStatusRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/announcements/{announcementId}/userStatus",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getAnnouncementUserStatusRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAnnouncementUserStatusResponse>{},
        body: await response.json(),
        bodyKey: "announcementUserStatusDetails",
        bodyModel: "model.AnnouncementUserStatusDetails",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a list of announcements for the current tenancy.
   *
   * @param ListAnnouncementsRequest
   * @return ListAnnouncementsResponse
   * @throws OciError when an error occurs
   */
  public async listAnnouncements(
    listAnnouncementsRequest: requests.ListAnnouncementsRequest
  ): Promise<responses.ListAnnouncementsResponse> {
    if (this.logger) this.logger.debug("Calling operation AnnouncementClient#listAnnouncements.");
    const pathParams = {};

    const queryParams = {
      "limit": listAnnouncementsRequest.limit,
      "page": listAnnouncementsRequest.page,
      "compartmentId": listAnnouncementsRequest.compartmentId,
      "announcementType": listAnnouncementsRequest.announcementType,
      "lifecycleState": listAnnouncementsRequest.lifecycleState,
      "isBanner": listAnnouncementsRequest.isBanner,
      "sortBy": listAnnouncementsRequest.sortBy,
      "sortOrder": listAnnouncementsRequest.sortOrder,
      "timeOneEarliestTime": listAnnouncementsRequest.timeOneEarliestTime,
      "timeOneLatestTime": listAnnouncementsRequest.timeOneLatestTime
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listAnnouncementsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/announcements",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listAnnouncementsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAnnouncementsResponse>{},
        body: await response.json(),
        bodyKey: "announcementsCollection",
        bodyModel: "model.AnnouncementsCollection",
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
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates the status of the specified announcement with regard to whether it has been marked as read.
   *
   * @param UpdateAnnouncementUserStatusRequest
   * @return UpdateAnnouncementUserStatusResponse
   * @throws OciError when an error occurs
   */
  public async updateAnnouncementUserStatus(
    updateAnnouncementUserStatusRequest: requests.UpdateAnnouncementUserStatusRequest
  ): Promise<responses.UpdateAnnouncementUserStatusResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AnnouncementClient#updateAnnouncementUserStatus.");
    const pathParams = {
      "{announcementId}": updateAnnouncementUserStatusRequest.announcementId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateAnnouncementUserStatusRequest.ifMatch,
      "opc-request-id": updateAnnouncementUserStatusRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/announcements/{announcementId}/userStatus",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateAnnouncementUserStatusRequest.statusDetails,
        "AnnouncementUserStatusDetails",
        models.AnnouncementUserStatusDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateAnnouncementUserStatusRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateAnnouncementUserStatusResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
