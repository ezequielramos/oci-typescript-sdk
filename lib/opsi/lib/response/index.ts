/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeDatabaseInsightCompartmentResponse from "./change-database-insight-compartment-response";
export import ChangeDatabaseInsightCompartmentResponse = ChangeDatabaseInsightCompartmentResponse.ChangeDatabaseInsightCompartmentResponse;
import * as ChangeEnterpriseManagerBridgeCompartmentResponse from "./change-enterprise-manager-bridge-compartment-response";
export import ChangeEnterpriseManagerBridgeCompartmentResponse = ChangeEnterpriseManagerBridgeCompartmentResponse.ChangeEnterpriseManagerBridgeCompartmentResponse;
import * as ChangeHostInsightCompartmentResponse from "./change-host-insight-compartment-response";
export import ChangeHostInsightCompartmentResponse = ChangeHostInsightCompartmentResponse.ChangeHostInsightCompartmentResponse;
import * as CreateDatabaseInsightResponse from "./create-database-insight-response";
export import CreateDatabaseInsightResponse = CreateDatabaseInsightResponse.CreateDatabaseInsightResponse;
import * as CreateEnterpriseManagerBridgeResponse from "./create-enterprise-manager-bridge-response";
export import CreateEnterpriseManagerBridgeResponse = CreateEnterpriseManagerBridgeResponse.CreateEnterpriseManagerBridgeResponse;
import * as CreateHostInsightResponse from "./create-host-insight-response";
export import CreateHostInsightResponse = CreateHostInsightResponse.CreateHostInsightResponse;
import * as DeleteDatabaseInsightResponse from "./delete-database-insight-response";
export import DeleteDatabaseInsightResponse = DeleteDatabaseInsightResponse.DeleteDatabaseInsightResponse;
import * as DeleteEnterpriseManagerBridgeResponse from "./delete-enterprise-manager-bridge-response";
export import DeleteEnterpriseManagerBridgeResponse = DeleteEnterpriseManagerBridgeResponse.DeleteEnterpriseManagerBridgeResponse;
import * as DeleteHostInsightResponse from "./delete-host-insight-response";
export import DeleteHostInsightResponse = DeleteHostInsightResponse.DeleteHostInsightResponse;
import * as DisableDatabaseInsightResponse from "./disable-database-insight-response";
export import DisableDatabaseInsightResponse = DisableDatabaseInsightResponse.DisableDatabaseInsightResponse;
import * as DisableHostInsightResponse from "./disable-host-insight-response";
export import DisableHostInsightResponse = DisableHostInsightResponse.DisableHostInsightResponse;
import * as EnableDatabaseInsightResponse from "./enable-database-insight-response";
export import EnableDatabaseInsightResponse = EnableDatabaseInsightResponse.EnableDatabaseInsightResponse;
import * as EnableHostInsightResponse from "./enable-host-insight-response";
export import EnableHostInsightResponse = EnableHostInsightResponse.EnableHostInsightResponse;
import * as GetDatabaseInsightResponse from "./get-database-insight-response";
export import GetDatabaseInsightResponse = GetDatabaseInsightResponse.GetDatabaseInsightResponse;
import * as GetEnterpriseManagerBridgeResponse from "./get-enterprise-manager-bridge-response";
export import GetEnterpriseManagerBridgeResponse = GetEnterpriseManagerBridgeResponse.GetEnterpriseManagerBridgeResponse;
import * as GetHostInsightResponse from "./get-host-insight-response";
export import GetHostInsightResponse = GetHostInsightResponse.GetHostInsightResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as IngestDatabaseConfigurationResponse from "./ingest-database-configuration-response";
export import IngestDatabaseConfigurationResponse = IngestDatabaseConfigurationResponse.IngestDatabaseConfigurationResponse;
import * as IngestHostConfigurationResponse from "./ingest-host-configuration-response";
export import IngestHostConfigurationResponse = IngestHostConfigurationResponse.IngestHostConfigurationResponse;
import * as IngestHostMetricsResponse from "./ingest-host-metrics-response";
export import IngestHostMetricsResponse = IngestHostMetricsResponse.IngestHostMetricsResponse;
import * as IngestSqlBucketResponse from "./ingest-sql-bucket-response";
export import IngestSqlBucketResponse = IngestSqlBucketResponse.IngestSqlBucketResponse;
import * as IngestSqlPlanLinesResponse from "./ingest-sql-plan-lines-response";
export import IngestSqlPlanLinesResponse = IngestSqlPlanLinesResponse.IngestSqlPlanLinesResponse;
import * as IngestSqlTextResponse from "./ingest-sql-text-response";
export import IngestSqlTextResponse = IngestSqlTextResponse.IngestSqlTextResponse;
import * as ListDatabaseConfigurationsResponse from "./list-database-configurations-response";
export import ListDatabaseConfigurationsResponse = ListDatabaseConfigurationsResponse.ListDatabaseConfigurationsResponse;
import * as ListDatabaseInsightsResponse from "./list-database-insights-response";
export import ListDatabaseInsightsResponse = ListDatabaseInsightsResponse.ListDatabaseInsightsResponse;
import * as ListEnterpriseManagerBridgesResponse from "./list-enterprise-manager-bridges-response";
export import ListEnterpriseManagerBridgesResponse = ListEnterpriseManagerBridgesResponse.ListEnterpriseManagerBridgesResponse;
import * as ListHostInsightsResponse from "./list-host-insights-response";
export import ListHostInsightsResponse = ListHostInsightsResponse.ListHostInsightsResponse;
import * as ListHostedEntitiesResponse from "./list-hosted-entities-response";
export import ListHostedEntitiesResponse = ListHostedEntitiesResponse.ListHostedEntitiesResponse;
import * as ListImportableEnterpriseManagerEntitiesResponse from "./list-importable-enterprise-manager-entities-response";
export import ListImportableEnterpriseManagerEntitiesResponse = ListImportableEnterpriseManagerEntitiesResponse.ListImportableEnterpriseManagerEntitiesResponse;
import * as ListSqlPlansResponse from "./list-sql-plans-response";
export import ListSqlPlansResponse = ListSqlPlansResponse.ListSqlPlansResponse;
import * as ListSqlSearchesResponse from "./list-sql-searches-response";
export import ListSqlSearchesResponse = ListSqlSearchesResponse.ListSqlSearchesResponse;
import * as ListSqlTextsResponse from "./list-sql-texts-response";
export import ListSqlTextsResponse = ListSqlTextsResponse.ListSqlTextsResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as SummarizeDatabaseInsightResourceCapacityTrendResponse from "./summarize-database-insight-resource-capacity-trend-response";
export import SummarizeDatabaseInsightResourceCapacityTrendResponse = SummarizeDatabaseInsightResourceCapacityTrendResponse.SummarizeDatabaseInsightResourceCapacityTrendResponse;
import * as SummarizeDatabaseInsightResourceForecastTrendResponse from "./summarize-database-insight-resource-forecast-trend-response";
export import SummarizeDatabaseInsightResourceForecastTrendResponse = SummarizeDatabaseInsightResourceForecastTrendResponse.SummarizeDatabaseInsightResourceForecastTrendResponse;
import * as SummarizeDatabaseInsightResourceStatisticsResponse from "./summarize-database-insight-resource-statistics-response";
export import SummarizeDatabaseInsightResourceStatisticsResponse = SummarizeDatabaseInsightResourceStatisticsResponse.SummarizeDatabaseInsightResourceStatisticsResponse;
import * as SummarizeDatabaseInsightResourceUsageResponse from "./summarize-database-insight-resource-usage-response";
export import SummarizeDatabaseInsightResourceUsageResponse = SummarizeDatabaseInsightResourceUsageResponse.SummarizeDatabaseInsightResourceUsageResponse;
import * as SummarizeDatabaseInsightResourceUsageTrendResponse from "./summarize-database-insight-resource-usage-trend-response";
export import SummarizeDatabaseInsightResourceUsageTrendResponse = SummarizeDatabaseInsightResourceUsageTrendResponse.SummarizeDatabaseInsightResourceUsageTrendResponse;
import * as SummarizeDatabaseInsightResourceUtilizationInsightResponse from "./summarize-database-insight-resource-utilization-insight-response";
export import SummarizeDatabaseInsightResourceUtilizationInsightResponse = SummarizeDatabaseInsightResourceUtilizationInsightResponse.SummarizeDatabaseInsightResourceUtilizationInsightResponse;
import * as SummarizeDatabaseInsightTablespaceUsageTrendResponse from "./summarize-database-insight-tablespace-usage-trend-response";
export import SummarizeDatabaseInsightTablespaceUsageTrendResponse = SummarizeDatabaseInsightTablespaceUsageTrendResponse.SummarizeDatabaseInsightTablespaceUsageTrendResponse;
import * as SummarizeHostInsightResourceCapacityTrendResponse from "./summarize-host-insight-resource-capacity-trend-response";
export import SummarizeHostInsightResourceCapacityTrendResponse = SummarizeHostInsightResourceCapacityTrendResponse.SummarizeHostInsightResourceCapacityTrendResponse;
import * as SummarizeHostInsightResourceForecastTrendResponse from "./summarize-host-insight-resource-forecast-trend-response";
export import SummarizeHostInsightResourceForecastTrendResponse = SummarizeHostInsightResourceForecastTrendResponse.SummarizeHostInsightResourceForecastTrendResponse;
import * as SummarizeHostInsightResourceStatisticsResponse from "./summarize-host-insight-resource-statistics-response";
export import SummarizeHostInsightResourceStatisticsResponse = SummarizeHostInsightResourceStatisticsResponse.SummarizeHostInsightResourceStatisticsResponse;
import * as SummarizeHostInsightResourceUsageResponse from "./summarize-host-insight-resource-usage-response";
export import SummarizeHostInsightResourceUsageResponse = SummarizeHostInsightResourceUsageResponse.SummarizeHostInsightResourceUsageResponse;
import * as SummarizeHostInsightResourceUsageTrendResponse from "./summarize-host-insight-resource-usage-trend-response";
export import SummarizeHostInsightResourceUsageTrendResponse = SummarizeHostInsightResourceUsageTrendResponse.SummarizeHostInsightResourceUsageTrendResponse;
import * as SummarizeHostInsightResourceUtilizationInsightResponse from "./summarize-host-insight-resource-utilization-insight-response";
export import SummarizeHostInsightResourceUtilizationInsightResponse = SummarizeHostInsightResourceUtilizationInsightResponse.SummarizeHostInsightResourceUtilizationInsightResponse;
import * as SummarizeSqlInsightsResponse from "./summarize-sql-insights-response";
export import SummarizeSqlInsightsResponse = SummarizeSqlInsightsResponse.SummarizeSqlInsightsResponse;
import * as SummarizeSqlPlanInsightsResponse from "./summarize-sql-plan-insights-response";
export import SummarizeSqlPlanInsightsResponse = SummarizeSqlPlanInsightsResponse.SummarizeSqlPlanInsightsResponse;
import * as SummarizeSqlResponseTimeDistributionsResponse from "./summarize-sql-response-time-distributions-response";
export import SummarizeSqlResponseTimeDistributionsResponse = SummarizeSqlResponseTimeDistributionsResponse.SummarizeSqlResponseTimeDistributionsResponse;
import * as SummarizeSqlStatisticsResponse from "./summarize-sql-statistics-response";
export import SummarizeSqlStatisticsResponse = SummarizeSqlStatisticsResponse.SummarizeSqlStatisticsResponse;
import * as SummarizeSqlStatisticsTimeSeriesResponse from "./summarize-sql-statistics-time-series-response";
export import SummarizeSqlStatisticsTimeSeriesResponse = SummarizeSqlStatisticsTimeSeriesResponse.SummarizeSqlStatisticsTimeSeriesResponse;
import * as SummarizeSqlStatisticsTimeSeriesByPlanResponse from "./summarize-sql-statistics-time-series-by-plan-response";
export import SummarizeSqlStatisticsTimeSeriesByPlanResponse = SummarizeSqlStatisticsTimeSeriesByPlanResponse.SummarizeSqlStatisticsTimeSeriesByPlanResponse;
import * as UpdateDatabaseInsightResponse from "./update-database-insight-response";
export import UpdateDatabaseInsightResponse = UpdateDatabaseInsightResponse.UpdateDatabaseInsightResponse;
import * as UpdateEnterpriseManagerBridgeResponse from "./update-enterprise-manager-bridge-response";
export import UpdateEnterpriseManagerBridgeResponse = UpdateEnterpriseManagerBridgeResponse.UpdateEnterpriseManagerBridgeResponse;
import * as UpdateHostInsightResponse from "./update-host-insight-response";
export import UpdateHostInsightResponse = UpdateHostInsightResponse.UpdateHostInsightResponse;
