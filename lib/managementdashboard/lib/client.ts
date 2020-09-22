/**
 * ManagementDashboard API
 * Management Dashboard micro-service provides a set of CRUD, import, export, and compartment related APIs (such as change compartment)   to support dashboard and saved search metadata preservation.  These APIs are mainly for client UIs, for various UI activities such as get list of all saved searches in a compartment, create a dashboard, open a saved search, etc.  Use export to retrieve  dashboards and their saved searches, then edit the Json if necessary (for example change compartmentIds), then import the result to  destination dashboard service.
APIs validate all required properties to ensure properties are present and have correct type and values.
    

 * OpenAPI spec version: 20200901
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

export enum DashxApisApiKeys {}

export class DashxApisClient {
  protected static serviceEndpointTemplate =
    "https://managementdashboards.{region}.oci.{secondLevelDomain}";
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
    this._endpoint = this._endpoint + "/20200901";
    if (this.logger) this.logger.info(`DashxApisClient endpoint set to ${this._endpoint}`);
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
      DashxApisClient.serviceEndpointTemplate,
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
      DashxApisClient.serviceEndpointTemplate,
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
   * Move the dashboard from existing compartment to a new compartment.
   *
   * @param ChangeManagementDashboardsCompartmentRequest
   * @return ChangeManagementDashboardsCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeManagementDashboardsCompartment(
    changeManagementDashboardsCompartmentRequest: requests.ChangeManagementDashboardsCompartmentRequest
  ): Promise<responses.ChangeManagementDashboardsCompartmentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#changeManagementDashboardsCompartment.");
    const pathParams = {
      "{managementDashboardId}": changeManagementDashboardsCompartmentRequest.managementDashboardId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeManagementDashboardsCompartmentRequest.ifMatch,
      "opc-retry-token": changeManagementDashboardsCompartmentRequest.opcRetryToken,
      "opc-request-id": changeManagementDashboardsCompartmentRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/{managementDashboardId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeManagementDashboardsCompartmentRequest.changeManagementDashboardsCompartmentDetails,
        "ChangeManagementDashboardsCompartmentDetails",
        models.ChangeManagementDashboardsCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeManagementDashboardsCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeManagementDashboardsCompartmentResponse>{},
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
    } catch (err) {
      throw err;
    }
  }

  /**
   * Move the saved search from existing compartment to a new compartment.
   *
   * @param ChangeManagementSavedSearchesCompartmentRequest
   * @return ChangeManagementSavedSearchesCompartmentResponse
   * @throws OciError when an error occurs
   */
  public async changeManagementSavedSearchesCompartment(
    changeManagementSavedSearchesCompartmentRequest: requests.ChangeManagementSavedSearchesCompartmentRequest
  ): Promise<responses.ChangeManagementSavedSearchesCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation DashxApisClient#changeManagementSavedSearchesCompartment."
      );
    const pathParams = {
      "{managementSavedSearchId}":
        changeManagementSavedSearchesCompartmentRequest.managementSavedSearchId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeManagementSavedSearchesCompartmentRequest.ifMatch,
      "opc-retry-token": changeManagementSavedSearchesCompartmentRequest.opcRetryToken,
      "opc-request-id": changeManagementSavedSearchesCompartmentRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches/{managementSavedSearchId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeManagementSavedSearchesCompartmentRequest.changeManagementSavedSearchesCompartmentDetails,
        "ChangeManagementSavedSearchesCompartmentDetails",
        models.ChangeManagementSavedSearchesCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeManagementSavedSearchesCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeManagementSavedSearchesCompartmentResponse>{},
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
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new dashboard.  Limit for number of saved searches in a dashboard is 20.
   *
   * @param CreateManagementDashboardRequest
   * @return CreateManagementDashboardResponse
   * @throws OciError when an error occurs
   */
  public async createManagementDashboard(
    createManagementDashboardRequest: requests.CreateManagementDashboardRequest
  ): Promise<responses.CreateManagementDashboardResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#createManagementDashboard.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createManagementDashboardRequest.opcRetryToken,
      "opc-request-id": createManagementDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createManagementDashboardRequest.createManagementDashboardDetails,
        "CreateManagementDashboardDetails",
        models.CreateManagementDashboardDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createManagementDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateManagementDashboardResponse>{},
        body: await response.json(),
        bodyKey: "managementDashboard",
        bodyModel: "model.ManagementDashboard",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Creates a new saved search.
   *
   * @param CreateManagementSavedSearchRequest
   * @return CreateManagementSavedSearchResponse
   * @throws OciError when an error occurs
   */
  public async createManagementSavedSearch(
    createManagementSavedSearchRequest: requests.CreateManagementSavedSearchRequest
  ): Promise<responses.CreateManagementSavedSearchResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#createManagementSavedSearch.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createManagementSavedSearchRequest.opcRetryToken,
      "opc-request-id": createManagementSavedSearchRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createManagementSavedSearchRequest.createManagementSavedSearchDetails,
        "CreateManagementSavedSearchDetails",
        models.CreateManagementSavedSearchDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createManagementSavedSearchRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateManagementSavedSearchResponse>{},
        body: await response.json(),
        bodyKey: "managementSavedSearch",
        bodyModel: "model.ManagementSavedSearch",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Deletes a Dashboard by id.
   * @param DeleteManagementDashboardRequest
   * @return DeleteManagementDashboardResponse
   * @throws OciError when an error occurs
   */
  public async deleteManagementDashboard(
    deleteManagementDashboardRequest: requests.DeleteManagementDashboardRequest
  ): Promise<responses.DeleteManagementDashboardResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#deleteManagementDashboard.");
    const pathParams = {
      "{managementDashboardId}": deleteManagementDashboardRequest.managementDashboardId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteManagementDashboardRequest.ifMatch,
      "opc-request-id": deleteManagementDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/{managementDashboardId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteManagementDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteManagementDashboardResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Deletes a saved search by Id
   * @param DeleteManagementSavedSearchRequest
   * @return DeleteManagementSavedSearchResponse
   * @throws OciError when an error occurs
   */
  public async deleteManagementSavedSearch(
    deleteManagementSavedSearchRequest: requests.DeleteManagementSavedSearchRequest
  ): Promise<responses.DeleteManagementSavedSearchResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#deleteManagementSavedSearch.");
    const pathParams = {
      "{managementSavedSearchId}": deleteManagementSavedSearchRequest.managementSavedSearchId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteManagementSavedSearchRequest.ifMatch,
      "opc-request-id": deleteManagementSavedSearchRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches/{managementSavedSearchId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteManagementSavedSearchRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteManagementSavedSearchResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Exports an array of dashboards and their saved searches.
   * @param ExportDashboardRequest
   * @return ExportDashboardResponse
   * @throws OciError when an error occurs
   */
  public async exportDashboard(
    exportDashboardRequest: requests.ExportDashboardRequest
  ): Promise<responses.ExportDashboardResponse> {
    if (this.logger) this.logger.debug("Calling operation DashxApisClient#exportDashboard.");
    const pathParams = {
      "{exportDashboardId}": exportDashboardRequest.exportDashboardId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": exportDashboardRequest.opcRetryToken,
      "opc-request-id": exportDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/actions/exportDashboard/{exportDashboardId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      exportDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ExportDashboardResponse>{},
        body: await response.json(),
        bodyKey: "managementDashboardExportDetails",
        bodyModel: "model.ManagementDashboardExportDetails",
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Get a Dashboard and its saved searches by id.  Deleted or unauthorized saved searches are marked by tile's state property.
   * @param GetManagementDashboardRequest
   * @return GetManagementDashboardResponse
   * @throws OciError when an error occurs
   */
  public async getManagementDashboard(
    getManagementDashboardRequest: requests.GetManagementDashboardRequest
  ): Promise<responses.GetManagementDashboardResponse> {
    if (this.logger) this.logger.debug("Calling operation DashxApisClient#getManagementDashboard.");
    const pathParams = {
      "{managementDashboardId}": getManagementDashboardRequest.managementDashboardId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": getManagementDashboardRequest.opcRetryToken,
      "opc-request-id": getManagementDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/{managementDashboardId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getManagementDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetManagementDashboardResponse>{},
        body: await response.json(),
        bodyKey: "managementDashboard",
        bodyModel: "model.ManagementDashboard",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Get a saved search by Id.
   * @param GetManagementSavedSearchRequest
   * @return GetManagementSavedSearchResponse
   * @throws OciError when an error occurs
   */
  public async getManagementSavedSearch(
    getManagementSavedSearchRequest: requests.GetManagementSavedSearchRequest
  ): Promise<responses.GetManagementSavedSearchResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#getManagementSavedSearch.");
    const pathParams = {
      "{managementSavedSearchId}": getManagementSavedSearchRequest.managementSavedSearchId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": getManagementSavedSearchRequest.opcRetryToken,
      "opc-request-id": getManagementSavedSearchRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches/{managementSavedSearchId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getManagementSavedSearchRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetManagementSavedSearchResponse>{},
        body: await response.json(),
        bodyKey: "managementSavedSearch",
        bodyModel: "model.ManagementSavedSearch",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Import an array of dashboards and their saved searches.
   *
   * @param ImportDashboardRequest
   * @return ImportDashboardResponse
   * @throws OciError when an error occurs
   */
  public async importDashboard(
    importDashboardRequest: requests.ImportDashboardRequest
  ): Promise<responses.ImportDashboardResponse> {
    if (this.logger) this.logger.debug("Calling operation DashxApisClient#importDashboard.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": importDashboardRequest.ifMatch,
      "opc-retry-token": importDashboardRequest.opcRetryToken,
      "opc-request-id": importDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/actions/importDashboard",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        importDashboardRequest.managementDashboardImportDetails,
        "ManagementDashboardImportDetails",
        models.ManagementDashboardImportDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      importDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ImportDashboardResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Gets list of dashboards and their saved searches for compartment with pagination.  Returned properties are a summary.
   * @param ListManagementDashboardsRequest
   * @return ListManagementDashboardsResponse
   * @throws OciError when an error occurs
   */
  public async listManagementDashboards(
    listManagementDashboardsRequest: requests.ListManagementDashboardsRequest
  ): Promise<responses.ListManagementDashboardsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#listManagementDashboards.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listManagementDashboardsRequest.compartmentId,
      "displayName": listManagementDashboardsRequest.displayName,
      "limit": listManagementDashboardsRequest.limit,
      "page": listManagementDashboardsRequest.page,
      "sortOrder": listManagementDashboardsRequest.sortOrder,
      "sortBy": listManagementDashboardsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listManagementDashboardsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listManagementDashboardsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListManagementDashboardsResponse>{},
        body: await response.json(),
        bodyKey: "managementDashboardCollection",
        bodyModel: "model.ManagementDashboardCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Gets list of saved searches with pagination.  Returned properties are a summary.
   * @param ListManagementSavedSearchesRequest
   * @return ListManagementSavedSearchesResponse
   * @throws OciError when an error occurs
   */
  public async listManagementSavedSearches(
    listManagementSavedSearchesRequest: requests.ListManagementSavedSearchesRequest
  ): Promise<responses.ListManagementSavedSearchesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#listManagementSavedSearches.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listManagementSavedSearchesRequest.compartmentId,
      "displayName": listManagementSavedSearchesRequest.displayName,
      "limit": listManagementSavedSearchesRequest.limit,
      "page": listManagementSavedSearchesRequest.page,
      "sortOrder": listManagementSavedSearchesRequest.sortOrder,
      "sortBy": listManagementSavedSearchesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listManagementSavedSearchesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listManagementSavedSearchesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListManagementSavedSearchesResponse>{},
        body: await response.json(),
        bodyKey: "managementSavedSearchCollection",
        bodyModel: "model.ManagementSavedSearchCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Updates an existing dashboard identified by id path parameter.  Limit for number of saved searches in a dashboard is 20.
   *
   * @param UpdateManagementDashboardRequest
   * @return UpdateManagementDashboardResponse
   * @throws OciError when an error occurs
   */
  public async updateManagementDashboard(
    updateManagementDashboardRequest: requests.UpdateManagementDashboardRequest
  ): Promise<responses.UpdateManagementDashboardResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#updateManagementDashboard.");
    const pathParams = {
      "{managementDashboardId}": updateManagementDashboardRequest.managementDashboardId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateManagementDashboardRequest.ifMatch,
      "opc-retry-token": updateManagementDashboardRequest.opcRetryToken,
      "opc-request-id": updateManagementDashboardRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementDashboards/{managementDashboardId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateManagementDashboardRequest.updateManagementDashboardDetails,
        "UpdateManagementDashboardDetails",
        models.UpdateManagementDashboardDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateManagementDashboardRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateManagementDashboardResponse>{},
        body: await response.json(),
        bodyKey: "managementDashboard",
        bodyModel: "model.ManagementDashboard",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Update an existing saved search.  Id cannot be updated.
   *
   * @param UpdateManagementSavedSearchRequest
   * @return UpdateManagementSavedSearchResponse
   * @throws OciError when an error occurs
   */
  public async updateManagementSavedSearch(
    updateManagementSavedSearchRequest: requests.UpdateManagementSavedSearchRequest
  ): Promise<responses.UpdateManagementSavedSearchResponse> {
    if (this.logger)
      this.logger.debug("Calling operation DashxApisClient#updateManagementSavedSearch.");
    const pathParams = {
      "{managementSavedSearchId}": updateManagementSavedSearchRequest.managementSavedSearchId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateManagementSavedSearchRequest.ifMatch,
      "opc-retry-token": updateManagementSavedSearchRequest.opcRetryToken,
      "opc-request-id": updateManagementSavedSearchRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/managementSavedSearches/{managementSavedSearchId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateManagementSavedSearchRequest.updateManagementSavedSearchDetails,
        "UpdateManagementSavedSearchDetails",
        models.UpdateManagementSavedSearchDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateManagementSavedSearchRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateManagementSavedSearchResponse>{},
        body: await response.json(),
        bodyKey: "managementSavedSearch",
        bodyModel: "model.ManagementSavedSearch",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
}
