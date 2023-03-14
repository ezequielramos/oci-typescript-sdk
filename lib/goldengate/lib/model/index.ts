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

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as CancelDeploymentBackupDetails from "./cancel-deployment-backup-details";
export import CancelDeploymentBackupDetails = CancelDeploymentBackupDetails.CancelDeploymentBackupDetails;
import * as CancelDeploymentBackupType from "./cancel-deployment-backup-type";
export import CancelDeploymentBackupType = CancelDeploymentBackupType.CancelDeploymentBackupType;
import * as CancelSnoozeDeploymentUpgradeDetails from "./cancel-snooze-deployment-upgrade-details";
export import CancelSnoozeDeploymentUpgradeDetails = CancelSnoozeDeploymentUpgradeDetails.CancelSnoozeDeploymentUpgradeDetails;
import * as CancelSnoozeDeploymentUpgradeType from "./cancel-snooze-deployment-upgrade-type";
export import CancelSnoozeDeploymentUpgradeType = CancelSnoozeDeploymentUpgradeType.CancelSnoozeDeploymentUpgradeType;
import * as ChangeConnectionCompartmentDetails from "./change-connection-compartment-details";
export import ChangeConnectionCompartmentDetails = ChangeConnectionCompartmentDetails.ChangeConnectionCompartmentDetails;
import * as ChangeDatabaseRegistrationCompartmentDetails from "./change-database-registration-compartment-details";
export import ChangeDatabaseRegistrationCompartmentDetails = ChangeDatabaseRegistrationCompartmentDetails.ChangeDatabaseRegistrationCompartmentDetails;
import * as ChangeDeploymentBackupCompartmentDetails from "./change-deployment-backup-compartment-details";
export import ChangeDeploymentBackupCompartmentDetails = ChangeDeploymentBackupCompartmentDetails.ChangeDeploymentBackupCompartmentDetails;
import * as ChangeDeploymentCompartmentDetails from "./change-deployment-compartment-details";
export import ChangeDeploymentCompartmentDetails = ChangeDeploymentCompartmentDetails.ChangeDeploymentCompartmentDetails;
import * as CollectDeploymentDiagnosticDetails from "./collect-deployment-diagnostic-details";
export import CollectDeploymentDiagnosticDetails = CollectDeploymentDiagnosticDetails.CollectDeploymentDiagnosticDetails;
import * as Connection from "./connection";
export import Connection = Connection.Connection;
import * as ConnectionAssignment from "./connection-assignment";
export import ConnectionAssignment = ConnectionAssignment.ConnectionAssignment;
import * as ConnectionAssignmentCollection from "./connection-assignment-collection";
export import ConnectionAssignmentCollection = ConnectionAssignmentCollection.ConnectionAssignmentCollection;
import * as ConnectionAssignmentSummary from "./connection-assignment-summary";
export import ConnectionAssignmentSummary = ConnectionAssignmentSummary.ConnectionAssignmentSummary;
import * as ConnectionCollection from "./connection-collection";
export import ConnectionCollection = ConnectionCollection.ConnectionCollection;
import * as ConnectionSummary from "./connection-summary";
export import ConnectionSummary = ConnectionSummary.ConnectionSummary;
import * as ConnectionType from "./connection-type";
export import ConnectionType = ConnectionType.ConnectionType;
import * as CreateConnectionAssignmentDetails from "./create-connection-assignment-details";
export import CreateConnectionAssignmentDetails = CreateConnectionAssignmentDetails.CreateConnectionAssignmentDetails;
import * as CreateConnectionDetails from "./create-connection-details";
export import CreateConnectionDetails = CreateConnectionDetails.CreateConnectionDetails;
import * as CreateDatabaseRegistrationDetails from "./create-database-registration-details";
export import CreateDatabaseRegistrationDetails = CreateDatabaseRegistrationDetails.CreateDatabaseRegistrationDetails;
import * as CreateDeploymentBackupDetails from "./create-deployment-backup-details";
export import CreateDeploymentBackupDetails = CreateDeploymentBackupDetails.CreateDeploymentBackupDetails;
import * as CreateDeploymentDetails from "./create-deployment-details";
export import CreateDeploymentDetails = CreateDeploymentDetails.CreateDeploymentDetails;
import * as CreateMaintenanceWindowDetails from "./create-maintenance-window-details";
export import CreateMaintenanceWindowDetails = CreateMaintenanceWindowDetails.CreateMaintenanceWindowDetails;
import * as CreateOggDeploymentDetails from "./create-ogg-deployment-details";
export import CreateOggDeploymentDetails = CreateOggDeploymentDetails.CreateOggDeploymentDetails;
import * as DatabaseRegistration from "./database-registration";
export import DatabaseRegistration = DatabaseRegistration.DatabaseRegistration;
import * as DatabaseRegistrationCollection from "./database-registration-collection";
export import DatabaseRegistrationCollection = DatabaseRegistrationCollection.DatabaseRegistrationCollection;
import * as DatabaseRegistrationSummary from "./database-registration-summary";
export import DatabaseRegistrationSummary = DatabaseRegistrationSummary.DatabaseRegistrationSummary;
import * as Day from "./day";
export import Day = Day.Day;
import * as Deployment from "./deployment";
export import Deployment = Deployment.Deployment;
import * as DeploymentBackup from "./deployment-backup";
export import DeploymentBackup = DeploymentBackup.DeploymentBackup;
import * as DeploymentBackupCollection from "./deployment-backup-collection";
export import DeploymentBackupCollection = DeploymentBackupCollection.DeploymentBackupCollection;
import * as DeploymentBackupSummary from "./deployment-backup-summary";
export import DeploymentBackupSummary = DeploymentBackupSummary.DeploymentBackupSummary;
import * as DeploymentBackupType from "./deployment-backup-type";
export import DeploymentBackupType = DeploymentBackupType.DeploymentBackupType;
import * as DeploymentCollection from "./deployment-collection";
export import DeploymentCollection = DeploymentCollection.DeploymentCollection;
import * as DeploymentDiagnosticData from "./deployment-diagnostic-data";
export import DeploymentDiagnosticData = DeploymentDiagnosticData.DeploymentDiagnosticData;
import * as DeploymentDiagnosticState from "./deployment-diagnostic-state";
export import DeploymentDiagnosticState = DeploymentDiagnosticState.DeploymentDiagnosticState;
import * as DeploymentMessageCollection from "./deployment-message-collection";
export import DeploymentMessageCollection = DeploymentMessageCollection.DeploymentMessageCollection;
import * as DeploymentSummary from "./deployment-summary";
export import DeploymentSummary = DeploymentSummary.DeploymentSummary;
import * as DeploymentType from "./deployment-type";
export import DeploymentType = DeploymentType.DeploymentType;
import * as DeploymentTypeCollection from "./deployment-type-collection";
export import DeploymentTypeCollection = DeploymentTypeCollection.DeploymentTypeCollection;
import * as DeploymentTypeSummary from "./deployment-type-summary";
export import DeploymentTypeSummary = DeploymentTypeSummary.DeploymentTypeSummary;
import * as DeploymentUpgrade from "./deployment-upgrade";
export import DeploymentUpgrade = DeploymentUpgrade.DeploymentUpgrade;
import * as DeploymentUpgradeCollection from "./deployment-upgrade-collection";
export import DeploymentUpgradeCollection = DeploymentUpgradeCollection.DeploymentUpgradeCollection;
import * as DeploymentUpgradeLifecycleState from "./deployment-upgrade-lifecycle-state";
export import DeploymentUpgradeLifecycleState = DeploymentUpgradeLifecycleState.DeploymentUpgradeLifecycleState;
import * as DeploymentUpgradeSummary from "./deployment-upgrade-summary";
export import DeploymentUpgradeSummary = DeploymentUpgradeSummary.DeploymentUpgradeSummary;
import * as DeploymentUpgradeType from "./deployment-upgrade-type";
export import DeploymentUpgradeType = DeploymentUpgradeType.DeploymentUpgradeType;
import * as DeploymentVersionCollection from "./deployment-version-collection";
export import DeploymentVersionCollection = DeploymentVersionCollection.DeploymentVersionCollection;
import * as DeploymentVersionSummary from "./deployment-version-summary";
export import DeploymentVersionSummary = DeploymentVersionSummary.DeploymentVersionSummary;
import * as DeploymentWalletExistsDetails from "./deployment-wallet-exists-details";
export import DeploymentWalletExistsDetails = DeploymentWalletExistsDetails.DeploymentWalletExistsDetails;
import * as DeploymentWalletExistsResponseDetails from "./deployment-wallet-exists-response-details";
export import DeploymentWalletExistsResponseDetails = DeploymentWalletExistsResponseDetails.DeploymentWalletExistsResponseDetails;
import * as DeploymentWalletOperationType from "./deployment-wallet-operation-type";
export import DeploymentWalletOperationType = DeploymentWalletOperationType.DeploymentWalletOperationType;
import * as DeploymentWalletStatus from "./deployment-wallet-status";
export import DeploymentWalletStatus = DeploymentWalletStatus.DeploymentWalletStatus;
import * as DeploymentWalletsOperationCollection from "./deployment-wallets-operation-collection";
export import DeploymentWalletsOperationCollection = DeploymentWalletsOperationCollection.DeploymentWalletsOperationCollection;
import * as DeploymentWalletsOperationSummary from "./deployment-wallets-operation-summary";
export import DeploymentWalletsOperationSummary = DeploymentWalletsOperationSummary.DeploymentWalletsOperationSummary;
import * as ExportDeploymentWalletDetails from "./export-deployment-wallet-details";
export import ExportDeploymentWalletDetails = ExportDeploymentWalletDetails.ExportDeploymentWalletDetails;
import * as ImportDeploymentWalletDetails from "./import-deployment-wallet-details";
export import ImportDeploymentWalletDetails = ImportDeploymentWalletDetails.ImportDeploymentWalletDetails;
import * as IngressIpDetails from "./ingress-ip-details";
export import IngressIpDetails = IngressIpDetails.IngressIpDetails;
import * as KafkaBootstrapServer from "./kafka-bootstrap-server";
export import KafkaBootstrapServer = KafkaBootstrapServer.KafkaBootstrapServer;
import * as LicenseModel from "./license-model";
export import LicenseModel = LicenseModel.LicenseModel;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as LifecycleSubState from "./lifecycle-sub-state";
export import LifecycleSubState = LifecycleSubState.LifecycleSubState;
import * as MaintenanceActionType from "./maintenance-action-type";
export import MaintenanceActionType = MaintenanceActionType.MaintenanceActionType;
import * as MaintenanceWindow from "./maintenance-window";
export import MaintenanceWindow = MaintenanceWindow.MaintenanceWindow;
import * as MessageSummary from "./message-summary";
export import MessageSummary = MessageSummary.MessageSummary;
import * as NameValuePair from "./name-value-pair";
export import NameValuePair = NameValuePair.NameValuePair;
import * as OggDeployment from "./ogg-deployment";
export import OggDeployment = OggDeployment.OggDeployment;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as ReleaseType from "./release-type";
export import ReleaseType = ReleaseType.ReleaseType;
import * as RestoreDeploymentDetails from "./restore-deployment-details";
export import RestoreDeploymentDetails = RestoreDeploymentDetails.RestoreDeploymentDetails;
import * as RestoreDeploymentType from "./restore-deployment-type";
export import RestoreDeploymentType = RestoreDeploymentType.RestoreDeploymentType;
import * as RollbackDeploymentUpgradeDetails from "./rollback-deployment-upgrade-details";
export import RollbackDeploymentUpgradeDetails = RollbackDeploymentUpgradeDetails.RollbackDeploymentUpgradeDetails;
import * as RollbackDeploymentUpgradeType from "./rollback-deployment-upgrade-type";
export import RollbackDeploymentUpgradeType = RollbackDeploymentUpgradeType.RollbackDeploymentUpgradeType;
import * as SnoozeDeploymentUpgradeDetails from "./snooze-deployment-upgrade-details";
export import SnoozeDeploymentUpgradeDetails = SnoozeDeploymentUpgradeDetails.SnoozeDeploymentUpgradeDetails;
import * as SnoozeDeploymentUpgradeType from "./snooze-deployment-upgrade-type";
export import SnoozeDeploymentUpgradeType = SnoozeDeploymentUpgradeType.SnoozeDeploymentUpgradeType;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as StartDeploymentDetails from "./start-deployment-details";
export import StartDeploymentDetails = StartDeploymentDetails.StartDeploymentDetails;
import * as StartDeploymentType from "./start-deployment-type";
export import StartDeploymentType = StartDeploymentType.StartDeploymentType;
import * as StopDeploymentDetails from "./stop-deployment-details";
export import StopDeploymentDetails = StopDeploymentDetails.StopDeploymentDetails;
import * as StopDeploymentType from "./stop-deployment-type";
export import StopDeploymentType = StopDeploymentType.StopDeploymentType;
import * as TechnologyType from "./technology-type";
export import TechnologyType = TechnologyType.TechnologyType;
import * as TrailFileCollection from "./trail-file-collection";
export import TrailFileCollection = TrailFileCollection.TrailFileCollection;
import * as TrailFileSummary from "./trail-file-summary";
export import TrailFileSummary = TrailFileSummary.TrailFileSummary;
import * as TrailSequenceCollection from "./trail-sequence-collection";
export import TrailSequenceCollection = TrailSequenceCollection.TrailSequenceCollection;
import * as TrailSequenceSummary from "./trail-sequence-summary";
export import TrailSequenceSummary = TrailSequenceSummary.TrailSequenceSummary;
import * as UpdateConnectionDetails from "./update-connection-details";
export import UpdateConnectionDetails = UpdateConnectionDetails.UpdateConnectionDetails;
import * as UpdateDatabaseRegistrationDetails from "./update-database-registration-details";
export import UpdateDatabaseRegistrationDetails = UpdateDatabaseRegistrationDetails.UpdateDatabaseRegistrationDetails;
import * as UpdateDeploymentBackupDetails from "./update-deployment-backup-details";
export import UpdateDeploymentBackupDetails = UpdateDeploymentBackupDetails.UpdateDeploymentBackupDetails;
import * as UpdateDeploymentDetails from "./update-deployment-details";
export import UpdateDeploymentDetails = UpdateDeploymentDetails.UpdateDeploymentDetails;
import * as UpdateMaintenanceWindowDetails from "./update-maintenance-window-details";
export import UpdateMaintenanceWindowDetails = UpdateMaintenanceWindowDetails.UpdateMaintenanceWindowDetails;
import * as UpdateOggDeploymentDetails from "./update-ogg-deployment-details";
export import UpdateOggDeploymentDetails = UpdateOggDeploymentDetails.UpdateOggDeploymentDetails;
import * as UpgradeDeploymentDetails from "./upgrade-deployment-details";
export import UpgradeDeploymentDetails = UpgradeDeploymentDetails.UpgradeDeploymentDetails;
import * as UpgradeDeploymentType from "./upgrade-deployment-type";
export import UpgradeDeploymentType = UpgradeDeploymentType.UpgradeDeploymentType;
import * as UpgradeDeploymentUpgradeDetails from "./upgrade-deployment-upgrade-details";
export import UpgradeDeploymentUpgradeDetails = UpgradeDeploymentUpgradeDetails.UpgradeDeploymentUpgradeDetails;
import * as UpgradeDeploymentUpgradeType from "./upgrade-deployment-upgrade-type";
export import UpgradeDeploymentUpgradeType = UpgradeDeploymentUpgradeType.UpgradeDeploymentUpgradeType;
import * as WalletExistsDeploymentType from "./wallet-exists-deployment-type";
export import WalletExistsDeploymentType = WalletExistsDeploymentType.WalletExistsDeploymentType;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;

import * as AzureDataLakeStorageConnection from "./azure-data-lake-storage-connection";
export import AzureDataLakeStorageConnection = AzureDataLakeStorageConnection.AzureDataLakeStorageConnection;
import * as AzureDataLakeStorageConnectionSummary from "./azure-data-lake-storage-connection-summary";
export import AzureDataLakeStorageConnectionSummary = AzureDataLakeStorageConnectionSummary.AzureDataLakeStorageConnectionSummary;
import * as AzureSynapseConnection from "./azure-synapse-connection";
export import AzureSynapseConnection = AzureSynapseConnection.AzureSynapseConnection;
import * as AzureSynapseConnectionSummary from "./azure-synapse-connection-summary";
export import AzureSynapseConnectionSummary = AzureSynapseConnectionSummary.AzureSynapseConnectionSummary;
import * as CreateAzureDataLakeStorageConnectionDetails from "./create-azure-data-lake-storage-connection-details";
export import CreateAzureDataLakeStorageConnectionDetails = CreateAzureDataLakeStorageConnectionDetails.CreateAzureDataLakeStorageConnectionDetails;
import * as CreateAzureSynapseConnectionDetails from "./create-azure-synapse-connection-details";
export import CreateAzureSynapseConnectionDetails = CreateAzureSynapseConnectionDetails.CreateAzureSynapseConnectionDetails;
import * as CreateGoldenGateConnectionDetails from "./create-golden-gate-connection-details";
export import CreateGoldenGateConnectionDetails = CreateGoldenGateConnectionDetails.CreateGoldenGateConnectionDetails;
import * as CreateKafkaConnectionDetails from "./create-kafka-connection-details";
export import CreateKafkaConnectionDetails = CreateKafkaConnectionDetails.CreateKafkaConnectionDetails;
import * as CreateKafkaSchemaRegistryConnectionDetails from "./create-kafka-schema-registry-connection-details";
export import CreateKafkaSchemaRegistryConnectionDetails = CreateKafkaSchemaRegistryConnectionDetails.CreateKafkaSchemaRegistryConnectionDetails;
import * as CreateMysqlConnectionDetails from "./create-mysql-connection-details";
export import CreateMysqlConnectionDetails = CreateMysqlConnectionDetails.CreateMysqlConnectionDetails;
import * as CreateOciObjectStorageConnectionDetails from "./create-oci-object-storage-connection-details";
export import CreateOciObjectStorageConnectionDetails = CreateOciObjectStorageConnectionDetails.CreateOciObjectStorageConnectionDetails;
import * as CreateOracleConnectionDetails from "./create-oracle-connection-details";
export import CreateOracleConnectionDetails = CreateOracleConnectionDetails.CreateOracleConnectionDetails;
import * as CreatePostgresqlConnectionDetails from "./create-postgresql-connection-details";
export import CreatePostgresqlConnectionDetails = CreatePostgresqlConnectionDetails.CreatePostgresqlConnectionDetails;
import * as DefaultCancelDeploymentBackupDetails from "./default-cancel-deployment-backup-details";
export import DefaultCancelDeploymentBackupDetails = DefaultCancelDeploymentBackupDetails.DefaultCancelDeploymentBackupDetails;
import * as DefaultCancelSnoozeDeploymentUpgradeDetails from "./default-cancel-snooze-deployment-upgrade-details";
export import DefaultCancelSnoozeDeploymentUpgradeDetails = DefaultCancelSnoozeDeploymentUpgradeDetails.DefaultCancelSnoozeDeploymentUpgradeDetails;
import * as DefaultDeploymentWalletExistsDetails from "./default-deployment-wallet-exists-details";
export import DefaultDeploymentWalletExistsDetails = DefaultDeploymentWalletExistsDetails.DefaultDeploymentWalletExistsDetails;
import * as DefaultRestoreDeploymentDetails from "./default-restore-deployment-details";
export import DefaultRestoreDeploymentDetails = DefaultRestoreDeploymentDetails.DefaultRestoreDeploymentDetails;
import * as DefaultRollbackDeploymentUpgradeDetails from "./default-rollback-deployment-upgrade-details";
export import DefaultRollbackDeploymentUpgradeDetails = DefaultRollbackDeploymentUpgradeDetails.DefaultRollbackDeploymentUpgradeDetails;
import * as DefaultSnoozeDeploymentUpgradeDetails from "./default-snooze-deployment-upgrade-details";
export import DefaultSnoozeDeploymentUpgradeDetails = DefaultSnoozeDeploymentUpgradeDetails.DefaultSnoozeDeploymentUpgradeDetails;
import * as DefaultStartDeploymentDetails from "./default-start-deployment-details";
export import DefaultStartDeploymentDetails = DefaultStartDeploymentDetails.DefaultStartDeploymentDetails;
import * as DefaultStopDeploymentDetails from "./default-stop-deployment-details";
export import DefaultStopDeploymentDetails = DefaultStopDeploymentDetails.DefaultStopDeploymentDetails;
import * as DefaultUpgradeDeploymentUpgradeDetails from "./default-upgrade-deployment-upgrade-details";
export import DefaultUpgradeDeploymentUpgradeDetails = DefaultUpgradeDeploymentUpgradeDetails.DefaultUpgradeDeploymentUpgradeDetails;
import * as GoldenGateConnection from "./golden-gate-connection";
export import GoldenGateConnection = GoldenGateConnection.GoldenGateConnection;
import * as GoldenGateConnectionSummary from "./golden-gate-connection-summary";
export import GoldenGateConnectionSummary = GoldenGateConnectionSummary.GoldenGateConnectionSummary;
import * as KafkaConnection from "./kafka-connection";
export import KafkaConnection = KafkaConnection.KafkaConnection;
import * as KafkaConnectionSummary from "./kafka-connection-summary";
export import KafkaConnectionSummary = KafkaConnectionSummary.KafkaConnectionSummary;
import * as KafkaSchemaRegistryConnection from "./kafka-schema-registry-connection";
export import KafkaSchemaRegistryConnection = KafkaSchemaRegistryConnection.KafkaSchemaRegistryConnection;
import * as KafkaSchemaRegistryConnectionSummary from "./kafka-schema-registry-connection-summary";
export import KafkaSchemaRegistryConnectionSummary = KafkaSchemaRegistryConnectionSummary.KafkaSchemaRegistryConnectionSummary;
import * as MysqlConnection from "./mysql-connection";
export import MysqlConnection = MysqlConnection.MysqlConnection;
import * as MysqlConnectionSummary from "./mysql-connection-summary";
export import MysqlConnectionSummary = MysqlConnectionSummary.MysqlConnectionSummary;
import * as OciObjectStorageConnection from "./oci-object-storage-connection";
export import OciObjectStorageConnection = OciObjectStorageConnection.OciObjectStorageConnection;
import * as OciObjectStorageConnectionSummary from "./oci-object-storage-connection-summary";
export import OciObjectStorageConnectionSummary = OciObjectStorageConnectionSummary.OciObjectStorageConnectionSummary;
import * as OracleConnection from "./oracle-connection";
export import OracleConnection = OracleConnection.OracleConnection;
import * as OracleConnectionSummary from "./oracle-connection-summary";
export import OracleConnectionSummary = OracleConnectionSummary.OracleConnectionSummary;
import * as PostgresqlConnection from "./postgresql-connection";
export import PostgresqlConnection = PostgresqlConnection.PostgresqlConnection;
import * as PostgresqlConnectionSummary from "./postgresql-connection-summary";
export import PostgresqlConnectionSummary = PostgresqlConnectionSummary.PostgresqlConnectionSummary;
import * as UpdateAzureDataLakeStorageConnectionDetails from "./update-azure-data-lake-storage-connection-details";
export import UpdateAzureDataLakeStorageConnectionDetails = UpdateAzureDataLakeStorageConnectionDetails.UpdateAzureDataLakeStorageConnectionDetails;
import * as UpdateAzureSynapseConnectionDetails from "./update-azure-synapse-connection-details";
export import UpdateAzureSynapseConnectionDetails = UpdateAzureSynapseConnectionDetails.UpdateAzureSynapseConnectionDetails;
import * as UpdateGoldenGateConnectionDetails from "./update-golden-gate-connection-details";
export import UpdateGoldenGateConnectionDetails = UpdateGoldenGateConnectionDetails.UpdateGoldenGateConnectionDetails;
import * as UpdateKafkaConnectionDetails from "./update-kafka-connection-details";
export import UpdateKafkaConnectionDetails = UpdateKafkaConnectionDetails.UpdateKafkaConnectionDetails;
import * as UpdateKafkaSchemaRegistryConnectionDetails from "./update-kafka-schema-registry-connection-details";
export import UpdateKafkaSchemaRegistryConnectionDetails = UpdateKafkaSchemaRegistryConnectionDetails.UpdateKafkaSchemaRegistryConnectionDetails;
import * as UpdateMysqlConnectionDetails from "./update-mysql-connection-details";
export import UpdateMysqlConnectionDetails = UpdateMysqlConnectionDetails.UpdateMysqlConnectionDetails;
import * as UpdateOciObjectStorageConnectionDetails from "./update-oci-object-storage-connection-details";
export import UpdateOciObjectStorageConnectionDetails = UpdateOciObjectStorageConnectionDetails.UpdateOciObjectStorageConnectionDetails;
import * as UpdateOracleConnectionDetails from "./update-oracle-connection-details";
export import UpdateOracleConnectionDetails = UpdateOracleConnectionDetails.UpdateOracleConnectionDetails;
import * as UpdatePostgresqlConnectionDetails from "./update-postgresql-connection-details";
export import UpdatePostgresqlConnectionDetails = UpdatePostgresqlConnectionDetails.UpdatePostgresqlConnectionDetails;
import * as UpgradeDeploymentCurrentReleaseDetails from "./upgrade-deployment-current-release-details";
export import UpgradeDeploymentCurrentReleaseDetails = UpgradeDeploymentCurrentReleaseDetails.UpgradeDeploymentCurrentReleaseDetails;
import * as UpgradeDeploymentSpecificReleaseDetails from "./upgrade-deployment-specific-release-details";
export import UpgradeDeploymentSpecificReleaseDetails = UpgradeDeploymentSpecificReleaseDetails.UpgradeDeploymentSpecificReleaseDetails;
