/**
 * Work Requests API
 * Many of the API operations that you use to create and configure Compute resources do not take effect
immediately. In these cases, the operation spawns an asynchronous workflow to fulfill the request.
Work requests provide visibility into the status of these in-progress, long-running workflows.

For more information about work requests and the operations that spawn work requests, see
[Viewing the State of a Compute Work Request](/iaas/Content/Compute/Tasks/viewingworkrequestcompute.htm).

 * OpenAPI spec version: 20160918
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
import { WorkRequestWaiter } from "./workrequest-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum WorkRequestApiKeys {}

export class WorkRequestClient {
  protected static serviceEndpointTemplate = "https://iaas.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": WorkRequestWaiter;
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
    this._endpoint = this._endpoint + "/20160918";
    if (this.logger) this.logger.info(`WorkRequestClient endpoint set to ${this._endpoint}`);
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
      WorkRequestClient.serviceEndpointTemplate,
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
      WorkRequestClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new WorkRequestWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): WorkRequestWaiter {
    this._waiters = new WorkRequestWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): WorkRequestWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Sets the client configuration for the client
   */
  public set clientConfiguration(clientConfiguration: common.ClientConfiguration) {
    this._clientConfiguration = clientConfiguration;
  }

  /**
   * Gets the details of a work request.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#getWorkRequest.");
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getWorkRequestRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: "model.WorkRequest",
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
   * Gets the errors for a work request.
   *
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation WorkRequestClient#listWorkRequestErrors.");
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "limit": listWorkRequestErrorsRequest.limit,
      "page": listWorkRequestErrorsRequest.page,
      "sortOrder": listWorkRequestErrorsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestErrorsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestError[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrors(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<models.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrorsResponses(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Gets the logs for a work request.
   *
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#listWorkRequestLogs.");
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "limit": listWorkRequestLogsRequest.limit,
      "page": listWorkRequestLogsRequest.page,
      "sortOrder": listWorkRequestLogsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestLogsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestLogEntry[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogs(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<models.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogsResponses(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Lists the work requests in a compartment or for a specified resource.
   *
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#listWorkRequests.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "resourceId": listWorkRequestsRequest.resourceId,
      "limit": listWorkRequestsRequest.limit,
      "page": listWorkRequestsRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "WorkRequestSummary[]",
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
   * Creates a new async iterator which will iterate over the models.WorkRequestSummary objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequests(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<models.WorkRequestSummary> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestsResponses(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }
}
