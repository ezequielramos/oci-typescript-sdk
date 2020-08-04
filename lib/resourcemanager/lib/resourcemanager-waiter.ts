/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ResourceManagerClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ResourceManagerWaiter {
  public constructor(
    private client: ResourceManagerClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forConfigurationSourceProvider till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConfigurationSourceProviderResponse
   */
  public async forConfigurationSourceProvider(
    request: serviceRequests.GetConfigurationSourceProviderRequest,
    ...targetStates: models.ConfigurationSourceProvider.LifecycleState[]
  ): Promise<serviceResponses.GetConfigurationSourceProviderResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getConfigurationSourceProvider(request),
      response => targetStates.exists(response.configurationSourceProvider.lifecycleState)
    );
  }

  /**
   * Waits forJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobResponse
   */
  public async forJob(
    request: serviceRequests.GetJobRequest,
    ...targetStates: models.Job.LifecycleState[]
  ): Promise<serviceResponses.GetJobResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getJob(request),
      response => targetStates.exists(response.job.lifecycleState)
    );
  }

  /**
   * Waits forStack till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetStackResponse | null (null in case of 404 response)
   */
  public async forStack(
    request: serviceRequests.GetStackRequest,
    ...targetStates: models.Stack.LifecycleState[]
  ): Promise<serviceResponses.GetStackResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getStack(request),
      response => targetStates.exists(response.stack.lifecycleState),
      targetStates.includes(models.Stack.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
