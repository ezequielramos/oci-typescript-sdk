/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateExadataInfrastructureDetails from "./activate-exadata-infrastructure-details";
export import ActivateExadataInfrastructureDetails = ActivateExadataInfrastructureDetails.ActivateExadataInfrastructureDetails;
import * as AssociatedDatabaseDetails from "./associated-database-details";
export import AssociatedDatabaseDetails = AssociatedDatabaseDetails.AssociatedDatabaseDetails;
import * as AutonomousContainerDatabase from "./autonomous-container-database";
export import AutonomousContainerDatabase = AutonomousContainerDatabase.AutonomousContainerDatabase;
import * as AutonomousContainerDatabaseBackupConfig from "./autonomous-container-database-backup-config";
export import AutonomousContainerDatabaseBackupConfig = AutonomousContainerDatabaseBackupConfig.AutonomousContainerDatabaseBackupConfig;
import * as AutonomousContainerDatabaseDataguardAssociation from "./autonomous-container-database-dataguard-association";
export import AutonomousContainerDatabaseDataguardAssociation = AutonomousContainerDatabaseDataguardAssociation.AutonomousContainerDatabaseDataguardAssociation;
import * as AutonomousContainerDatabaseSummary from "./autonomous-container-database-summary";
export import AutonomousContainerDatabaseSummary = AutonomousContainerDatabaseSummary.AutonomousContainerDatabaseSummary;
import * as AutonomousDataWarehouse from "./autonomous-data-warehouse";
export import AutonomousDataWarehouse = AutonomousDataWarehouse.AutonomousDataWarehouse;
import * as AutonomousDataWarehouseConnectionStrings from "./autonomous-data-warehouse-connection-strings";
export import AutonomousDataWarehouseConnectionStrings = AutonomousDataWarehouseConnectionStrings.AutonomousDataWarehouseConnectionStrings;
import * as AutonomousDataWarehouseSummary from "./autonomous-data-warehouse-summary";
export import AutonomousDataWarehouseSummary = AutonomousDataWarehouseSummary.AutonomousDataWarehouseSummary;
import * as AutonomousDatabase from "./autonomous-database";
export import AutonomousDatabase = AutonomousDatabase.AutonomousDatabase;
import * as AutonomousDatabaseApex from "./autonomous-database-apex";
export import AutonomousDatabaseApex = AutonomousDatabaseApex.AutonomousDatabaseApex;
import * as AutonomousDatabaseBackup from "./autonomous-database-backup";
export import AutonomousDatabaseBackup = AutonomousDatabaseBackup.AutonomousDatabaseBackup;
import * as AutonomousDatabaseBackupConfig from "./autonomous-database-backup-config";
export import AutonomousDatabaseBackupConfig = AutonomousDatabaseBackupConfig.AutonomousDatabaseBackupConfig;
import * as AutonomousDatabaseBackupSummary from "./autonomous-database-backup-summary";
export import AutonomousDatabaseBackupSummary = AutonomousDatabaseBackupSummary.AutonomousDatabaseBackupSummary;
import * as AutonomousDatabaseConnectionStrings from "./autonomous-database-connection-strings";
export import AutonomousDatabaseConnectionStrings = AutonomousDatabaseConnectionStrings.AutonomousDatabaseConnectionStrings;
import * as AutonomousDatabaseConnectionUrls from "./autonomous-database-connection-urls";
export import AutonomousDatabaseConnectionUrls = AutonomousDatabaseConnectionUrls.AutonomousDatabaseConnectionUrls;
import * as AutonomousDatabaseConsoleTokenDetails from "./autonomous-database-console-token-details";
export import AutonomousDatabaseConsoleTokenDetails = AutonomousDatabaseConsoleTokenDetails.AutonomousDatabaseConsoleTokenDetails;
import * as AutonomousDatabaseDataguardAssociation from "./autonomous-database-dataguard-association";
export import AutonomousDatabaseDataguardAssociation = AutonomousDatabaseDataguardAssociation.AutonomousDatabaseDataguardAssociation;
import * as AutonomousDatabaseManualRefreshDetails from "./autonomous-database-manual-refresh-details";
export import AutonomousDatabaseManualRefreshDetails = AutonomousDatabaseManualRefreshDetails.AutonomousDatabaseManualRefreshDetails;
import * as AutonomousDatabaseStandbySummary from "./autonomous-database-standby-summary";
export import AutonomousDatabaseStandbySummary = AutonomousDatabaseStandbySummary.AutonomousDatabaseStandbySummary;
import * as AutonomousDatabaseSummary from "./autonomous-database-summary";
export import AutonomousDatabaseSummary = AutonomousDatabaseSummary.AutonomousDatabaseSummary;
import * as AutonomousDatabaseWallet from "./autonomous-database-wallet";
export import AutonomousDatabaseWallet = AutonomousDatabaseWallet.AutonomousDatabaseWallet;
import * as AutonomousDbPreviewVersionSummary from "./autonomous-db-preview-version-summary";
export import AutonomousDbPreviewVersionSummary = AutonomousDbPreviewVersionSummary.AutonomousDbPreviewVersionSummary;
import * as AutonomousDbVersionSummary from "./autonomous-db-version-summary";
export import AutonomousDbVersionSummary = AutonomousDbVersionSummary.AutonomousDbVersionSummary;
import * as AutonomousExadataInfrastructure from "./autonomous-exadata-infrastructure";
export import AutonomousExadataInfrastructure = AutonomousExadataInfrastructure.AutonomousExadataInfrastructure;
import * as AutonomousExadataInfrastructureShapeSummary from "./autonomous-exadata-infrastructure-shape-summary";
export import AutonomousExadataInfrastructureShapeSummary = AutonomousExadataInfrastructureShapeSummary.AutonomousExadataInfrastructureShapeSummary;
import * as AutonomousExadataInfrastructureSummary from "./autonomous-exadata-infrastructure-summary";
export import AutonomousExadataInfrastructureSummary = AutonomousExadataInfrastructureSummary.AutonomousExadataInfrastructureSummary;
import * as AutonomousPatch from "./autonomous-patch";
export import AutonomousPatch = AutonomousPatch.AutonomousPatch;
import * as AutonomousPatchSummary from "./autonomous-patch-summary";
export import AutonomousPatchSummary = AutonomousPatchSummary.AutonomousPatchSummary;
import * as AutonomousVmCluster from "./autonomous-vm-cluster";
export import AutonomousVmCluster = AutonomousVmCluster.AutonomousVmCluster;
import * as AutonomousVmClusterSummary from "./autonomous-vm-cluster-summary";
export import AutonomousVmClusterSummary = AutonomousVmClusterSummary.AutonomousVmClusterSummary;
import * as Backup from "./backup";
export import Backup = Backup.Backup;
import * as BackupDestination from "./backup-destination";
export import BackupDestination = BackupDestination.BackupDestination;
import * as BackupDestinationDetails from "./backup-destination-details";
export import BackupDestinationDetails = BackupDestinationDetails.BackupDestinationDetails;
import * as BackupDestinationSummary from "./backup-destination-summary";
export import BackupDestinationSummary = BackupDestinationSummary.BackupDestinationSummary;
import * as BackupSummary from "./backup-summary";
export import BackupSummary = BackupSummary.BackupSummary;
import * as ChangeAutonomousVmClusterCompartmentDetails from "./change-autonomous-vm-cluster-compartment-details";
export import ChangeAutonomousVmClusterCompartmentDetails = ChangeAutonomousVmClusterCompartmentDetails.ChangeAutonomousVmClusterCompartmentDetails;
import * as ChangeCloudExadataInfrastructureCompartmentDetails from "./change-cloud-exadata-infrastructure-compartment-details";
export import ChangeCloudExadataInfrastructureCompartmentDetails = ChangeCloudExadataInfrastructureCompartmentDetails.ChangeCloudExadataInfrastructureCompartmentDetails;
import * as ChangeCloudVmClusterCompartmentDetails from "./change-cloud-vm-cluster-compartment-details";
export import ChangeCloudVmClusterCompartmentDetails = ChangeCloudVmClusterCompartmentDetails.ChangeCloudVmClusterCompartmentDetails;
import * as ChangeCompartmentDetails from "./change-compartment-details";
export import ChangeCompartmentDetails = ChangeCompartmentDetails.ChangeCompartmentDetails;
import * as ChangeExadataInfrastructureCompartmentDetails from "./change-exadata-infrastructure-compartment-details";
export import ChangeExadataInfrastructureCompartmentDetails = ChangeExadataInfrastructureCompartmentDetails.ChangeExadataInfrastructureCompartmentDetails;
import * as ChangeKeyStoreCompartmentDetails from "./change-key-store-compartment-details";
export import ChangeKeyStoreCompartmentDetails = ChangeKeyStoreCompartmentDetails.ChangeKeyStoreCompartmentDetails;
import * as ChangeVmClusterCompartmentDetails from "./change-vm-cluster-compartment-details";
export import ChangeVmClusterCompartmentDetails = ChangeVmClusterCompartmentDetails.ChangeVmClusterCompartmentDetails;
import * as CloudExadataInfrastructure from "./cloud-exadata-infrastructure";
export import CloudExadataInfrastructure = CloudExadataInfrastructure.CloudExadataInfrastructure;
import * as CloudExadataInfrastructureSummary from "./cloud-exadata-infrastructure-summary";
export import CloudExadataInfrastructureSummary = CloudExadataInfrastructureSummary.CloudExadataInfrastructureSummary;
import * as CloudVmCluster from "./cloud-vm-cluster";
export import CloudVmCluster = CloudVmCluster.CloudVmCluster;
import * as CloudVmClusterSummary from "./cloud-vm-cluster-summary";
export import CloudVmClusterSummary = CloudVmClusterSummary.CloudVmClusterSummary;
import * as CompleteExternalBackupJobDetails from "./complete-external-backup-job-details";
export import CompleteExternalBackupJobDetails = CompleteExternalBackupJobDetails.CompleteExternalBackupJobDetails;
import * as ConsoleConnection from "./console-connection";
export import ConsoleConnection = ConsoleConnection.ConsoleConnection;
import * as ConsoleConnectionSummary from "./console-connection-summary";
export import ConsoleConnectionSummary = ConsoleConnectionSummary.ConsoleConnectionSummary;
import * as CreateAutonomousContainerDatabaseDetails from "./create-autonomous-container-database-details";
export import CreateAutonomousContainerDatabaseDetails = CreateAutonomousContainerDatabaseDetails.CreateAutonomousContainerDatabaseDetails;
import * as CreateAutonomousDatabaseBackupDetails from "./create-autonomous-database-backup-details";
export import CreateAutonomousDatabaseBackupDetails = CreateAutonomousDatabaseBackupDetails.CreateAutonomousDatabaseBackupDetails;
import * as CreateAutonomousDatabaseBase from "./create-autonomous-database-base";
export import CreateAutonomousDatabaseBase = CreateAutonomousDatabaseBase.CreateAutonomousDatabaseBase;
import * as CreateAutonomousVmClusterDetails from "./create-autonomous-vm-cluster-details";
export import CreateAutonomousVmClusterDetails = CreateAutonomousVmClusterDetails.CreateAutonomousVmClusterDetails;
import * as CreateBackupDestinationDetails from "./create-backup-destination-details";
export import CreateBackupDestinationDetails = CreateBackupDestinationDetails.CreateBackupDestinationDetails;
import * as CreateBackupDetails from "./create-backup-details";
export import CreateBackupDetails = CreateBackupDetails.CreateBackupDetails;
import * as CreateCloudExadataInfrastructureDetails from "./create-cloud-exadata-infrastructure-details";
export import CreateCloudExadataInfrastructureDetails = CreateCloudExadataInfrastructureDetails.CreateCloudExadataInfrastructureDetails;
import * as CreateCloudVmClusterDetails from "./create-cloud-vm-cluster-details";
export import CreateCloudVmClusterDetails = CreateCloudVmClusterDetails.CreateCloudVmClusterDetails;
import * as CreateConsoleConnectionDetails from "./create-console-connection-details";
export import CreateConsoleConnectionDetails = CreateConsoleConnectionDetails.CreateConsoleConnectionDetails;
import * as CreateDataGuardAssociationDetails from "./create-data-guard-association-details";
export import CreateDataGuardAssociationDetails = CreateDataGuardAssociationDetails.CreateDataGuardAssociationDetails;
import * as CreateDatabaseBase from "./create-database-base";
export import CreateDatabaseBase = CreateDatabaseBase.CreateDatabaseBase;
import * as CreateDatabaseDetails from "./create-database-details";
export import CreateDatabaseDetails = CreateDatabaseDetails.CreateDatabaseDetails;
import * as CreateDatabaseFromAnotherDatabaseDetails from "./create-database-from-another-database-details";
export import CreateDatabaseFromAnotherDatabaseDetails = CreateDatabaseFromAnotherDatabaseDetails.CreateDatabaseFromAnotherDatabaseDetails;
import * as CreateDatabaseFromBackupDetails from "./create-database-from-backup-details";
export import CreateDatabaseFromBackupDetails = CreateDatabaseFromBackupDetails.CreateDatabaseFromBackupDetails;
import * as CreateDatabaseFromDbSystemDetails from "./create-database-from-db-system-details";
export import CreateDatabaseFromDbSystemDetails = CreateDatabaseFromDbSystemDetails.CreateDatabaseFromDbSystemDetails;
import * as CreateDatabaseSoftwareImageDetails from "./create-database-software-image-details";
export import CreateDatabaseSoftwareImageDetails = CreateDatabaseSoftwareImageDetails.CreateDatabaseSoftwareImageDetails;
import * as CreateDbHomeBase from "./create-db-home-base";
export import CreateDbHomeBase = CreateDbHomeBase.CreateDbHomeBase;
import * as CreateDbHomeDetails from "./create-db-home-details";
export import CreateDbHomeDetails = CreateDbHomeDetails.CreateDbHomeDetails;
import * as CreateDbHomeFromBackupDetails from "./create-db-home-from-backup-details";
export import CreateDbHomeFromBackupDetails = CreateDbHomeFromBackupDetails.CreateDbHomeFromBackupDetails;
import * as CreateDbHomeFromDatabaseDetails from "./create-db-home-from-database-details";
export import CreateDbHomeFromDatabaseDetails = CreateDbHomeFromDatabaseDetails.CreateDbHomeFromDatabaseDetails;
import * as CreateDbHomeFromDbSystemDetails from "./create-db-home-from-db-system-details";
export import CreateDbHomeFromDbSystemDetails = CreateDbHomeFromDbSystemDetails.CreateDbHomeFromDbSystemDetails;
import * as CreateExadataInfrastructureDetails from "./create-exadata-infrastructure-details";
export import CreateExadataInfrastructureDetails = CreateExadataInfrastructureDetails.CreateExadataInfrastructureDetails;
import * as CreateExternalBackupJobDetails from "./create-external-backup-job-details";
export import CreateExternalBackupJobDetails = CreateExternalBackupJobDetails.CreateExternalBackupJobDetails;
import * as CreateKeyStoreDetails from "./create-key-store-details";
export import CreateKeyStoreDetails = CreateKeyStoreDetails.CreateKeyStoreDetails;
import * as CreateVmClusterDetails from "./create-vm-cluster-details";
export import CreateVmClusterDetails = CreateVmClusterDetails.CreateVmClusterDetails;
import * as DataGuardAssociation from "./data-guard-association";
export import DataGuardAssociation = DataGuardAssociation.DataGuardAssociation;
import * as DataGuardAssociationSummary from "./data-guard-association-summary";
export import DataGuardAssociationSummary = DataGuardAssociationSummary.DataGuardAssociationSummary;
import * as Database from "./database";
export import Database = Database.Database;
import * as DatabaseConnectionStrings from "./database-connection-strings";
export import DatabaseConnectionStrings = DatabaseConnectionStrings.DatabaseConnectionStrings;
import * as DatabaseSoftwareImage from "./database-software-image";
export import DatabaseSoftwareImage = DatabaseSoftwareImage.DatabaseSoftwareImage;
import * as DatabaseSoftwareImageSummary from "./database-software-image-summary";
export import DatabaseSoftwareImageSummary = DatabaseSoftwareImageSummary.DatabaseSoftwareImageSummary;
import * as DatabaseSummary from "./database-summary";
export import DatabaseSummary = DatabaseSummary.DatabaseSummary;
import * as DatabaseUpgradeHistoryEntry from "./database-upgrade-history-entry";
export import DatabaseUpgradeHistoryEntry = DatabaseUpgradeHistoryEntry.DatabaseUpgradeHistoryEntry;
import * as DatabaseUpgradeHistoryEntrySummary from "./database-upgrade-history-entry-summary";
export import DatabaseUpgradeHistoryEntrySummary = DatabaseUpgradeHistoryEntrySummary.DatabaseUpgradeHistoryEntrySummary;
import * as DatabaseUpgradeSourceBase from "./database-upgrade-source-base";
export import DatabaseUpgradeSourceBase = DatabaseUpgradeSourceBase.DatabaseUpgradeSourceBase;
import * as DayOfWeek from "./day-of-week";
export import DayOfWeek = DayOfWeek.DayOfWeek;
import * as DbBackupConfig from "./db-backup-config";
export import DbBackupConfig = DbBackupConfig.DbBackupConfig;
import * as DbHome from "./db-home";
export import DbHome = DbHome.DbHome;
import * as DbHomeSummary from "./db-home-summary";
export import DbHomeSummary = DbHomeSummary.DbHomeSummary;
import * as DbIormConfig from "./db-iorm-config";
export import DbIormConfig = DbIormConfig.DbIormConfig;
import * as DbIormConfigUpdateDetail from "./db-iorm-config-update-detail";
export import DbIormConfigUpdateDetail = DbIormConfigUpdateDetail.DbIormConfigUpdateDetail;
import * as DbNode from "./db-node";
export import DbNode = DbNode.DbNode;
import * as DbNodeSummary from "./db-node-summary";
export import DbNodeSummary = DbNodeSummary.DbNodeSummary;
import * as DbSystem from "./db-system";
export import DbSystem = DbSystem.DbSystem;
import * as DbSystemOptions from "./db-system-options";
export import DbSystemOptions = DbSystemOptions.DbSystemOptions;
import * as DbSystemShapeSummary from "./db-system-shape-summary";
export import DbSystemShapeSummary = DbSystemShapeSummary.DbSystemShapeSummary;
import * as DbSystemSummary from "./db-system-summary";
export import DbSystemSummary = DbSystemSummary.DbSystemSummary;
import * as DbVersionSummary from "./db-version-summary";
export import DbVersionSummary = DbVersionSummary.DbVersionSummary;
import * as DeregisterAutonomousDatabaseDataSafeDetails from "./deregister-autonomous-database-data-safe-details";
export import DeregisterAutonomousDatabaseDataSafeDetails = DeregisterAutonomousDatabaseDataSafeDetails.DeregisterAutonomousDatabaseDataSafeDetails;
import * as ExadataDbSystemMigration from "./exadata-db-system-migration";
export import ExadataDbSystemMigration = ExadataDbSystemMigration.ExadataDbSystemMigration;
import * as ExadataDbSystemMigrationSummary from "./exadata-db-system-migration-summary";
export import ExadataDbSystemMigrationSummary = ExadataDbSystemMigrationSummary.ExadataDbSystemMigrationSummary;
import * as ExadataInfrastructure from "./exadata-infrastructure";
export import ExadataInfrastructure = ExadataInfrastructure.ExadataInfrastructure;
import * as ExadataInfrastructureContact from "./exadata-infrastructure-contact";
export import ExadataInfrastructureContact = ExadataInfrastructureContact.ExadataInfrastructureContact;
import * as ExadataInfrastructureSummary from "./exadata-infrastructure-summary";
export import ExadataInfrastructureSummary = ExadataInfrastructureSummary.ExadataInfrastructureSummary;
import * as ExadataIormConfig from "./exadata-iorm-config";
export import ExadataIormConfig = ExadataIormConfig.ExadataIormConfig;
import * as ExadataIormConfigUpdateDetails from "./exadata-iorm-config-update-details";
export import ExadataIormConfigUpdateDetails = ExadataIormConfigUpdateDetails.ExadataIormConfigUpdateDetails;
import * as ExternalBackupJob from "./external-backup-job";
export import ExternalBackupJob = ExternalBackupJob.ExternalBackupJob;
import * as FailoverDataGuardAssociationDetails from "./failover-data-guard-association-details";
export import FailoverDataGuardAssociationDetails = FailoverDataGuardAssociationDetails.FailoverDataGuardAssociationDetails;
import * as FlexComponentCollection from "./flex-component-collection";
export import FlexComponentCollection = FlexComponentCollection.FlexComponentCollection;
import * as FlexComponentSummary from "./flex-component-summary";
export import FlexComponentSummary = FlexComponentSummary.FlexComponentSummary;
import * as GenerateAutonomousDatabaseWalletDetails from "./generate-autonomous-database-wallet-details";
export import GenerateAutonomousDatabaseWalletDetails = GenerateAutonomousDatabaseWalletDetails.GenerateAutonomousDatabaseWalletDetails;
import * as GenerateRecommendedNetworkDetails from "./generate-recommended-network-details";
export import GenerateRecommendedNetworkDetails = GenerateRecommendedNetworkDetails.GenerateRecommendedNetworkDetails;
import * as GiVersionSummary from "./gi-version-summary";
export import GiVersionSummary = GiVersionSummary.GiVersionSummary;
import * as InfoForNetworkGenDetails from "./info-for-network-gen-details";
export import InfoForNetworkGenDetails = InfoForNetworkGenDetails.InfoForNetworkGenDetails;
import * as KeyStore from "./key-store";
export import KeyStore = KeyStore.KeyStore;
import * as KeyStoreAssociatedDatabaseDetails from "./key-store-associated-database-details";
export import KeyStoreAssociatedDatabaseDetails = KeyStoreAssociatedDatabaseDetails.KeyStoreAssociatedDatabaseDetails;
import * as KeyStoreSummary from "./key-store-summary";
export import KeyStoreSummary = KeyStoreSummary.KeyStoreSummary;
import * as KeyStoreTypeDetails from "./key-store-type-details";
export import KeyStoreTypeDetails = KeyStoreTypeDetails.KeyStoreTypeDetails;
import * as LaunchAutonomousExadataInfrastructureDetails from "./launch-autonomous-exadata-infrastructure-details";
export import LaunchAutonomousExadataInfrastructureDetails = LaunchAutonomousExadataInfrastructureDetails.LaunchAutonomousExadataInfrastructureDetails;
import * as LaunchDbSystemBase from "./launch-db-system-base";
export import LaunchDbSystemBase = LaunchDbSystemBase.LaunchDbSystemBase;
import * as MaintenanceRun from "./maintenance-run";
export import MaintenanceRun = MaintenanceRun.MaintenanceRun;
import * as MaintenanceRunSummary from "./maintenance-run-summary";
export import MaintenanceRunSummary = MaintenanceRunSummary.MaintenanceRunSummary;
import * as MaintenanceWindow from "./maintenance-window";
export import MaintenanceWindow = MaintenanceWindow.MaintenanceWindow;
import * as MigrateVaultKeyDetails from "./migrate-vault-key-details";
export import MigrateVaultKeyDetails = MigrateVaultKeyDetails.MigrateVaultKeyDetails;
import * as Month from "./month";
export import Month = Month.Month;
import * as MountTypeDetails from "./mount-type-details";
export import MountTypeDetails = MountTypeDetails.MountTypeDetails;
import * as NodeDetails from "./node-details";
export import NodeDetails = NodeDetails.NodeDetails;
import * as OCPUs from "./o-cp-us";
export import OCPUs = OCPUs.OCPUs;
import * as Patch from "./patch";
export import Patch = Patch.Patch;
import * as PatchDetails from "./patch-details";
export import PatchDetails = PatchDetails.PatchDetails;
import * as PatchHistoryEntry from "./patch-history-entry";
export import PatchHistoryEntry = PatchHistoryEntry.PatchHistoryEntry;
import * as PatchHistoryEntrySummary from "./patch-history-entry-summary";
export import PatchHistoryEntrySummary = PatchHistoryEntrySummary.PatchHistoryEntrySummary;
import * as PatchSummary from "./patch-summary";
export import PatchSummary = PatchSummary.PatchSummary;
import * as PeerAutonomousContainerDatabaseBackupConfig from "./peer-autonomous-container-database-backup-config";
export import PeerAutonomousContainerDatabaseBackupConfig = PeerAutonomousContainerDatabaseBackupConfig.PeerAutonomousContainerDatabaseBackupConfig;
import * as RegisterAutonomousDatabaseDataSafeDetails from "./register-autonomous-database-data-safe-details";
export import RegisterAutonomousDatabaseDataSafeDetails = RegisterAutonomousDatabaseDataSafeDetails.RegisterAutonomousDatabaseDataSafeDetails;
import * as ReinstateDataGuardAssociationDetails from "./reinstate-data-guard-association-details";
export import ReinstateDataGuardAssociationDetails = ReinstateDataGuardAssociationDetails.ReinstateDataGuardAssociationDetails;
import * as RestoreAutonomousDatabaseDetails from "./restore-autonomous-database-details";
export import RestoreAutonomousDatabaseDetails = RestoreAutonomousDatabaseDetails.RestoreAutonomousDatabaseDetails;
import * as RestoreDatabaseDetails from "./restore-database-details";
export import RestoreDatabaseDetails = RestoreDatabaseDetails.RestoreDatabaseDetails;
import * as ScanDetails from "./scan-details";
export import ScanDetails = ScanDetails.ScanDetails;
import * as SwitchoverDataGuardAssociationDetails from "./switchover-data-guard-association-details";
export import SwitchoverDataGuardAssociationDetails = SwitchoverDataGuardAssociationDetails.SwitchoverDataGuardAssociationDetails;
import * as Update from "./update";
export import Update = Update.Update;
import * as UpdateAutonomousContainerDatabaseDetails from "./update-autonomous-container-database-details";
export import UpdateAutonomousContainerDatabaseDetails = UpdateAutonomousContainerDatabaseDetails.UpdateAutonomousContainerDatabaseDetails;
import * as UpdateAutonomousDatabaseDetails from "./update-autonomous-database-details";
export import UpdateAutonomousDatabaseDetails = UpdateAutonomousDatabaseDetails.UpdateAutonomousDatabaseDetails;
import * as UpdateAutonomousDatabaseWalletDetails from "./update-autonomous-database-wallet-details";
export import UpdateAutonomousDatabaseWalletDetails = UpdateAutonomousDatabaseWalletDetails.UpdateAutonomousDatabaseWalletDetails;
import * as UpdateAutonomousExadataInfrastructureDetails from "./update-autonomous-exadata-infrastructure-details";
export import UpdateAutonomousExadataInfrastructureDetails = UpdateAutonomousExadataInfrastructureDetails.UpdateAutonomousExadataInfrastructureDetails;
import * as UpdateAutonomousVmClusterDetails from "./update-autonomous-vm-cluster-details";
export import UpdateAutonomousVmClusterDetails = UpdateAutonomousVmClusterDetails.UpdateAutonomousVmClusterDetails;
import * as UpdateBackupDestinationDetails from "./update-backup-destination-details";
export import UpdateBackupDestinationDetails = UpdateBackupDestinationDetails.UpdateBackupDestinationDetails;
import * as UpdateCloudExadataInfrastructureDetails from "./update-cloud-exadata-infrastructure-details";
export import UpdateCloudExadataInfrastructureDetails = UpdateCloudExadataInfrastructureDetails.UpdateCloudExadataInfrastructureDetails;
import * as UpdateCloudVmClusterDetails from "./update-cloud-vm-cluster-details";
export import UpdateCloudVmClusterDetails = UpdateCloudVmClusterDetails.UpdateCloudVmClusterDetails;
import * as UpdateDatabaseDetails from "./update-database-details";
export import UpdateDatabaseDetails = UpdateDatabaseDetails.UpdateDatabaseDetails;
import * as UpdateDatabaseSoftwareImageDetails from "./update-database-software-image-details";
export import UpdateDatabaseSoftwareImageDetails = UpdateDatabaseSoftwareImageDetails.UpdateDatabaseSoftwareImageDetails;
import * as UpdateDbHomeDetails from "./update-db-home-details";
export import UpdateDbHomeDetails = UpdateDbHomeDetails.UpdateDbHomeDetails;
import * as UpdateDbSystemDetails from "./update-db-system-details";
export import UpdateDbSystemDetails = UpdateDbSystemDetails.UpdateDbSystemDetails;
import * as UpdateDetails from "./update-details";
export import UpdateDetails = UpdateDetails.UpdateDetails;
import * as UpdateExadataInfrastructureDetails from "./update-exadata-infrastructure-details";
export import UpdateExadataInfrastructureDetails = UpdateExadataInfrastructureDetails.UpdateExadataInfrastructureDetails;
import * as UpdateHistoryEntry from "./update-history-entry";
export import UpdateHistoryEntry = UpdateHistoryEntry.UpdateHistoryEntry;
import * as UpdateHistoryEntrySummary from "./update-history-entry-summary";
export import UpdateHistoryEntrySummary = UpdateHistoryEntrySummary.UpdateHistoryEntrySummary;
import * as UpdateKeyStoreDetails from "./update-key-store-details";
export import UpdateKeyStoreDetails = UpdateKeyStoreDetails.UpdateKeyStoreDetails;
import * as UpdateMaintenanceRunDetails from "./update-maintenance-run-details";
export import UpdateMaintenanceRunDetails = UpdateMaintenanceRunDetails.UpdateMaintenanceRunDetails;
import * as UpdateSummary from "./update-summary";
export import UpdateSummary = UpdateSummary.UpdateSummary;
import * as UpdateVmClusterDetails from "./update-vm-cluster-details";
export import UpdateVmClusterDetails = UpdateVmClusterDetails.UpdateVmClusterDetails;
import * as UpdateVmClusterNetworkDetails from "./update-vm-cluster-network-details";
export import UpdateVmClusterNetworkDetails = UpdateVmClusterNetworkDetails.UpdateVmClusterNetworkDetails;
import * as UpgradeDatabaseDetails from "./upgrade-database-details";
export import UpgradeDatabaseDetails = UpgradeDatabaseDetails.UpgradeDatabaseDetails;
import * as VmCluster from "./vm-cluster";
export import VmCluster = VmCluster.VmCluster;
import * as VmClusterNetwork from "./vm-cluster-network";
export import VmClusterNetwork = VmClusterNetwork.VmClusterNetwork;
import * as VmClusterNetworkDetails from "./vm-cluster-network-details";
export import VmClusterNetworkDetails = VmClusterNetworkDetails.VmClusterNetworkDetails;
import * as VmClusterNetworkSummary from "./vm-cluster-network-summary";
export import VmClusterNetworkSummary = VmClusterNetworkSummary.VmClusterNetworkSummary;
import * as VmClusterSummary from "./vm-cluster-summary";
export import VmClusterSummary = VmClusterSummary.VmClusterSummary;
import * as VmNetworkDetails from "./vm-network-details";
export import VmNetworkDetails = VmNetworkDetails.VmNetworkDetails;
import * as WorkloadType from "./workload-type";
export import WorkloadType = WorkloadType.WorkloadType;

import * as AutomatedMountDetails from "./automated-mount-details";
export import AutomatedMountDetails = AutomatedMountDetails.AutomatedMountDetails;
import * as CreateAutonomousDatabaseCloneDetails from "./create-autonomous-database-clone-details";
export import CreateAutonomousDatabaseCloneDetails = CreateAutonomousDatabaseCloneDetails.CreateAutonomousDatabaseCloneDetails;
import * as CreateAutonomousDatabaseDetails from "./create-autonomous-database-details";
export import CreateAutonomousDatabaseDetails = CreateAutonomousDatabaseDetails.CreateAutonomousDatabaseDetails;
import * as CreateAutonomousDatabaseFromBackupDetails from "./create-autonomous-database-from-backup-details";
export import CreateAutonomousDatabaseFromBackupDetails = CreateAutonomousDatabaseFromBackupDetails.CreateAutonomousDatabaseFromBackupDetails;
import * as CreateAutonomousDatabaseFromBackupTimestampDetails from "./create-autonomous-database-from-backup-timestamp-details";
export import CreateAutonomousDatabaseFromBackupTimestampDetails = CreateAutonomousDatabaseFromBackupTimestampDetails.CreateAutonomousDatabaseFromBackupTimestampDetails;
import * as CreateDataGuardAssociationToExistingDbSystemDetails from "./create-data-guard-association-to-existing-db-system-details";
export import CreateDataGuardAssociationToExistingDbSystemDetails = CreateDataGuardAssociationToExistingDbSystemDetails.CreateDataGuardAssociationToExistingDbSystemDetails;
import * as CreateDataGuardAssociationToExistingVmClusterDetails from "./create-data-guard-association-to-existing-vm-cluster-details";
export import CreateDataGuardAssociationToExistingVmClusterDetails = CreateDataGuardAssociationToExistingVmClusterDetails.CreateDataGuardAssociationToExistingVmClusterDetails;
import * as CreateDataGuardAssociationWithNewDbSystemDetails from "./create-data-guard-association-with-new-db-system-details";
export import CreateDataGuardAssociationWithNewDbSystemDetails = CreateDataGuardAssociationWithNewDbSystemDetails.CreateDataGuardAssociationWithNewDbSystemDetails;
import * as CreateDatabaseFromBackup from "./create-database-from-backup";
export import CreateDatabaseFromBackup = CreateDatabaseFromBackup.CreateDatabaseFromBackup;
import * as CreateDbHomeWithDbSystemIdDetails from "./create-db-home-with-db-system-id-details";
export import CreateDbHomeWithDbSystemIdDetails = CreateDbHomeWithDbSystemIdDetails.CreateDbHomeWithDbSystemIdDetails;
import * as CreateDbHomeWithDbSystemIdFromBackupDetails from "./create-db-home-with-db-system-id-from-backup-details";
export import CreateDbHomeWithDbSystemIdFromBackupDetails = CreateDbHomeWithDbSystemIdFromBackupDetails.CreateDbHomeWithDbSystemIdFromBackupDetails;
import * as CreateDbHomeWithDbSystemIdFromDatabaseDetails from "./create-db-home-with-db-system-id-from-database-details";
export import CreateDbHomeWithDbSystemIdFromDatabaseDetails = CreateDbHomeWithDbSystemIdFromDatabaseDetails.CreateDbHomeWithDbSystemIdFromDatabaseDetails;
import * as CreateDbHomeWithVmClusterIdDetails from "./create-db-home-with-vm-cluster-id-details";
export import CreateDbHomeWithVmClusterIdDetails = CreateDbHomeWithVmClusterIdDetails.CreateDbHomeWithVmClusterIdDetails;
import * as CreateDbHomeWithVmClusterIdFromBackupDetails from "./create-db-home-with-vm-cluster-id-from-backup-details";
export import CreateDbHomeWithVmClusterIdFromBackupDetails = CreateDbHomeWithVmClusterIdFromBackupDetails.CreateDbHomeWithVmClusterIdFromBackupDetails;
import * as CreateNFSBackupDestinationDetails from "./create-nf-sbackup-destination-details";
export import CreateNFSBackupDestinationDetails = CreateNFSBackupDestinationDetails.CreateNFSBackupDestinationDetails;
import * as CreateNewDatabaseDetails from "./create-new-database-details";
export import CreateNewDatabaseDetails = CreateNewDatabaseDetails.CreateNewDatabaseDetails;
import * as CreateRecoveryApplianceBackupDestinationDetails from "./create-recovery-appliance-backup-destination-details";
export import CreateRecoveryApplianceBackupDestinationDetails = CreateRecoveryApplianceBackupDestinationDetails.CreateRecoveryApplianceBackupDestinationDetails;
import * as CreateRefreshableAutonomousDatabaseCloneDetails from "./create-refreshable-autonomous-database-clone-details";
export import CreateRefreshableAutonomousDatabaseCloneDetails = CreateRefreshableAutonomousDatabaseCloneDetails.CreateRefreshableAutonomousDatabaseCloneDetails;
import * as DatabaseUpgradeWithDatabaseSoftwareImageDetails from "./database-upgrade-with-database-software-image-details";
export import DatabaseUpgradeWithDatabaseSoftwareImageDetails = DatabaseUpgradeWithDatabaseSoftwareImageDetails.DatabaseUpgradeWithDatabaseSoftwareImageDetails;
import * as DatabaseUpgradeWithDbHomeDetails from "./database-upgrade-with-db-home-details";
export import DatabaseUpgradeWithDbHomeDetails = DatabaseUpgradeWithDbHomeDetails.DatabaseUpgradeWithDbHomeDetails;
import * as DatabaseUpgradeWithDbVersionDetails from "./database-upgrade-with-db-version-details";
export import DatabaseUpgradeWithDbVersionDetails = DatabaseUpgradeWithDbVersionDetails.DatabaseUpgradeWithDbVersionDetails;
import * as KeyStoreTypeFromOracleKeyVaultDetails from "./key-store-type-from-oracle-key-vault-details";
export import KeyStoreTypeFromOracleKeyVaultDetails = KeyStoreTypeFromOracleKeyVaultDetails.KeyStoreTypeFromOracleKeyVaultDetails;
import * as LaunchDbSystemDetails from "./launch-db-system-details";
export import LaunchDbSystemDetails = LaunchDbSystemDetails.LaunchDbSystemDetails;
import * as LaunchDbSystemFromBackupDetails from "./launch-db-system-from-backup-details";
export import LaunchDbSystemFromBackupDetails = LaunchDbSystemFromBackupDetails.LaunchDbSystemFromBackupDetails;
import * as LaunchDbSystemFromDatabaseDetails from "./launch-db-system-from-database-details";
export import LaunchDbSystemFromDatabaseDetails = LaunchDbSystemFromDatabaseDetails.LaunchDbSystemFromDatabaseDetails;
import * as LaunchDbSystemFromDbSystemDetails from "./launch-db-system-from-db-system-details";
export import LaunchDbSystemFromDbSystemDetails = LaunchDbSystemFromDbSystemDetails.LaunchDbSystemFromDbSystemDetails;
import * as SelfMountDetails from "./self-mount-details";
export import SelfMountDetails = SelfMountDetails.SelfMountDetails;
