/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateModelResponse from "./activate-model-response";
export import ActivateModelResponse = ActivateModelResponse.ActivateModelResponse;
import * as ActivateModelDeploymentResponse from "./activate-model-deployment-response";
export import ActivateModelDeploymentResponse = ActivateModelDeploymentResponse.ActivateModelDeploymentResponse;
import * as ActivateNotebookSessionResponse from "./activate-notebook-session-response";
export import ActivateNotebookSessionResponse = ActivateNotebookSessionResponse.ActivateNotebookSessionResponse;
import * as CancelJobRunResponse from "./cancel-job-run-response";
export import CancelJobRunResponse = CancelJobRunResponse.CancelJobRunResponse;
import * as CancelWorkRequestResponse from "./cancel-work-request-response";
export import CancelWorkRequestResponse = CancelWorkRequestResponse.CancelWorkRequestResponse;
import * as ChangeJobCompartmentResponse from "./change-job-compartment-response";
export import ChangeJobCompartmentResponse = ChangeJobCompartmentResponse.ChangeJobCompartmentResponse;
import * as ChangeJobRunCompartmentResponse from "./change-job-run-compartment-response";
export import ChangeJobRunCompartmentResponse = ChangeJobRunCompartmentResponse.ChangeJobRunCompartmentResponse;
import * as ChangeModelCompartmentResponse from "./change-model-compartment-response";
export import ChangeModelCompartmentResponse = ChangeModelCompartmentResponse.ChangeModelCompartmentResponse;
import * as ChangeModelDeploymentCompartmentResponse from "./change-model-deployment-compartment-response";
export import ChangeModelDeploymentCompartmentResponse = ChangeModelDeploymentCompartmentResponse.ChangeModelDeploymentCompartmentResponse;
import * as ChangeNotebookSessionCompartmentResponse from "./change-notebook-session-compartment-response";
export import ChangeNotebookSessionCompartmentResponse = ChangeNotebookSessionCompartmentResponse.ChangeNotebookSessionCompartmentResponse;
import * as ChangeProjectCompartmentResponse from "./change-project-compartment-response";
export import ChangeProjectCompartmentResponse = ChangeProjectCompartmentResponse.ChangeProjectCompartmentResponse;
import * as CreateJobResponse from "./create-job-response";
export import CreateJobResponse = CreateJobResponse.CreateJobResponse;
import * as CreateJobArtifactResponse from "./create-job-artifact-response";
export import CreateJobArtifactResponse = CreateJobArtifactResponse.CreateJobArtifactResponse;
import * as CreateJobRunResponse from "./create-job-run-response";
export import CreateJobRunResponse = CreateJobRunResponse.CreateJobRunResponse;
import * as CreateModelResponse from "./create-model-response";
export import CreateModelResponse = CreateModelResponse.CreateModelResponse;
import * as CreateModelArtifactResponse from "./create-model-artifact-response";
export import CreateModelArtifactResponse = CreateModelArtifactResponse.CreateModelArtifactResponse;
import * as CreateModelDeploymentResponse from "./create-model-deployment-response";
export import CreateModelDeploymentResponse = CreateModelDeploymentResponse.CreateModelDeploymentResponse;
import * as CreateModelProvenanceResponse from "./create-model-provenance-response";
export import CreateModelProvenanceResponse = CreateModelProvenanceResponse.CreateModelProvenanceResponse;
import * as CreateNotebookSessionResponse from "./create-notebook-session-response";
export import CreateNotebookSessionResponse = CreateNotebookSessionResponse.CreateNotebookSessionResponse;
import * as CreateProjectResponse from "./create-project-response";
export import CreateProjectResponse = CreateProjectResponse.CreateProjectResponse;
import * as DeactivateModelResponse from "./deactivate-model-response";
export import DeactivateModelResponse = DeactivateModelResponse.DeactivateModelResponse;
import * as DeactivateModelDeploymentResponse from "./deactivate-model-deployment-response";
export import DeactivateModelDeploymentResponse = DeactivateModelDeploymentResponse.DeactivateModelDeploymentResponse;
import * as DeactivateNotebookSessionResponse from "./deactivate-notebook-session-response";
export import DeactivateNotebookSessionResponse = DeactivateNotebookSessionResponse.DeactivateNotebookSessionResponse;
import * as DeleteJobResponse from "./delete-job-response";
export import DeleteJobResponse = DeleteJobResponse.DeleteJobResponse;
import * as DeleteJobRunResponse from "./delete-job-run-response";
export import DeleteJobRunResponse = DeleteJobRunResponse.DeleteJobRunResponse;
import * as DeleteModelResponse from "./delete-model-response";
export import DeleteModelResponse = DeleteModelResponse.DeleteModelResponse;
import * as DeleteModelDeploymentResponse from "./delete-model-deployment-response";
export import DeleteModelDeploymentResponse = DeleteModelDeploymentResponse.DeleteModelDeploymentResponse;
import * as DeleteNotebookSessionResponse from "./delete-notebook-session-response";
export import DeleteNotebookSessionResponse = DeleteNotebookSessionResponse.DeleteNotebookSessionResponse;
import * as DeleteProjectResponse from "./delete-project-response";
export import DeleteProjectResponse = DeleteProjectResponse.DeleteProjectResponse;
import * as GetJobResponse from "./get-job-response";
export import GetJobResponse = GetJobResponse.GetJobResponse;
import * as GetJobArtifactContentResponse from "./get-job-artifact-content-response";
export import GetJobArtifactContentResponse = GetJobArtifactContentResponse.GetJobArtifactContentResponse;
import * as GetJobRunResponse from "./get-job-run-response";
export import GetJobRunResponse = GetJobRunResponse.GetJobRunResponse;
import * as GetModelResponse from "./get-model-response";
export import GetModelResponse = GetModelResponse.GetModelResponse;
import * as GetModelArtifactContentResponse from "./get-model-artifact-content-response";
export import GetModelArtifactContentResponse = GetModelArtifactContentResponse.GetModelArtifactContentResponse;
import * as GetModelDeploymentResponse from "./get-model-deployment-response";
export import GetModelDeploymentResponse = GetModelDeploymentResponse.GetModelDeploymentResponse;
import * as GetModelProvenanceResponse from "./get-model-provenance-response";
export import GetModelProvenanceResponse = GetModelProvenanceResponse.GetModelProvenanceResponse;
import * as GetNotebookSessionResponse from "./get-notebook-session-response";
export import GetNotebookSessionResponse = GetNotebookSessionResponse.GetNotebookSessionResponse;
import * as GetProjectResponse from "./get-project-response";
export import GetProjectResponse = GetProjectResponse.GetProjectResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as HeadJobArtifactResponse from "./head-job-artifact-response";
export import HeadJobArtifactResponse = HeadJobArtifactResponse.HeadJobArtifactResponse;
import * as HeadModelArtifactResponse from "./head-model-artifact-response";
export import HeadModelArtifactResponse = HeadModelArtifactResponse.HeadModelArtifactResponse;
import * as ListFastLaunchJobConfigsResponse from "./list-fast-launch-job-configs-response";
export import ListFastLaunchJobConfigsResponse = ListFastLaunchJobConfigsResponse.ListFastLaunchJobConfigsResponse;
import * as ListJobRunsResponse from "./list-job-runs-response";
export import ListJobRunsResponse = ListJobRunsResponse.ListJobRunsResponse;
import * as ListJobShapesResponse from "./list-job-shapes-response";
export import ListJobShapesResponse = ListJobShapesResponse.ListJobShapesResponse;
import * as ListJobsResponse from "./list-jobs-response";
export import ListJobsResponse = ListJobsResponse.ListJobsResponse;
import * as ListModelDeploymentShapesResponse from "./list-model-deployment-shapes-response";
export import ListModelDeploymentShapesResponse = ListModelDeploymentShapesResponse.ListModelDeploymentShapesResponse;
import * as ListModelDeploymentsResponse from "./list-model-deployments-response";
export import ListModelDeploymentsResponse = ListModelDeploymentsResponse.ListModelDeploymentsResponse;
import * as ListModelsResponse from "./list-models-response";
export import ListModelsResponse = ListModelsResponse.ListModelsResponse;
import * as ListNotebookSessionShapesResponse from "./list-notebook-session-shapes-response";
export import ListNotebookSessionShapesResponse = ListNotebookSessionShapesResponse.ListNotebookSessionShapesResponse;
import * as ListNotebookSessionsResponse from "./list-notebook-sessions-response";
export import ListNotebookSessionsResponse = ListNotebookSessionsResponse.ListNotebookSessionsResponse;
import * as ListProjectsResponse from "./list-projects-response";
export import ListProjectsResponse = ListProjectsResponse.ListProjectsResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as UpdateJobResponse from "./update-job-response";
export import UpdateJobResponse = UpdateJobResponse.UpdateJobResponse;
import * as UpdateJobRunResponse from "./update-job-run-response";
export import UpdateJobRunResponse = UpdateJobRunResponse.UpdateJobRunResponse;
import * as UpdateModelResponse from "./update-model-response";
export import UpdateModelResponse = UpdateModelResponse.UpdateModelResponse;
import * as UpdateModelDeploymentResponse from "./update-model-deployment-response";
export import UpdateModelDeploymentResponse = UpdateModelDeploymentResponse.UpdateModelDeploymentResponse;
import * as UpdateModelProvenanceResponse from "./update-model-provenance-response";
export import UpdateModelProvenanceResponse = UpdateModelProvenanceResponse.UpdateModelProvenanceResponse;
import * as UpdateNotebookSessionResponse from "./update-notebook-session-response";
export import UpdateNotebookSessionResponse = UpdateNotebookSessionResponse.UpdateNotebookSessionResponse;
import * as UpdateProjectResponse from "./update-project-response";
export import UpdateProjectResponse = UpdateProjectResponse.UpdateProjectResponse;
