/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Incident information that forms the basis of an announcement. Avoid entering confidential information.
 */
export interface BaseAnnouncement {
  /**
   * The OCID of the announcement.
   */
  "id": string;
  /**
   * The reference Jira ticket number.
   */
  "referenceTicketNumber": string;
  /**
   * A summary of the issue. A summary might appear in the console banner view of the announcement or in
   * an email subject line. Avoid entering confidential information.
   *
   */
  "summary": string;
  /**
   * The label associated with an initial time value.
   * Example: `Time Started`
   *
   */
  "timeOneTitle"?: string;
  /**
   * The actual value of the first time value for the event. Typically, this is the time an event started, but the meaning
   * can vary, depending on the announcement type.
   *
   */
  "timeOneValue"?: Date;
  /**
   * The label associated with a second time value.
   * Example: `Time Ended`
   *
   */
  "timeTwoTitle"?: string;
  /**
   * The actual value of the second time value. Typically, this is the time an event ended, but the meaning
   * can vary, depending on the announcement type.
   *
   */
  "timeTwoValue"?: Date;
  /**
   * Impacted Oracle Cloud Infrastructure services.
   */
  "services": Array<string>;
  /**
   * Impacted regions.
   */
  "affectedRegions": Array<string>;
  /**
   * The type of announcement. An announcement's type signals its severity.
   */
  "announcementType": BaseAnnouncement.AnnouncementType;
  /**
   * The current lifecycle state of the announcement.
   */
  "lifecycleState": BaseAnnouncement.LifecycleState;
  /**
   * Whether the announcement is displayed as a banner in the console.
   */
  "isBanner": boolean;
  /**
   * The date and time the announcement was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-01-01T17:43:01.389+0000`
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the announcement was last updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-01-01T17:43:01.389+0000`
   *
   */
  "timeUpdated"?: Date;

  "type": string;
}

export namespace BaseAnnouncement {
  export enum AnnouncementType {
    ActionRecommended = "ACTION_RECOMMENDED",
    ActionRequired = "ACTION_REQUIRED",
    EmergencyChange = "EMERGENCY_CHANGE",
    EmergencyMaintenance = "EMERGENCY_MAINTENANCE",
    EmergencyMaintenanceComplete = "EMERGENCY_MAINTENANCE_COMPLETE",
    EmergencyMaintenanceExtended = "EMERGENCY_MAINTENANCE_EXTENDED",
    EmergencyMaintenanceRescheduled = "EMERGENCY_MAINTENANCE_RESCHEDULED",
    Information = "INFORMATION",
    PlannedChange = "PLANNED_CHANGE",
    PlannedChangeComplete = "PLANNED_CHANGE_COMPLETE",
    PlannedChangeExtended = "PLANNED_CHANGE_EXTENDED",
    PlannedChangeRescheduled = "PLANNED_CHANGE_RESCHEDULED",
    ProductionEventNotification = "PRODUCTION_EVENT_NOTIFICATION",
    ScheduledMaintenance = "SCHEDULED_MAINTENANCE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
  }

  export function getJsonObj(obj: BaseAnnouncement): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "AnnouncementSummary":
          return model.AnnouncementSummary.getJsonObj(
            <model.AnnouncementSummary>(<object>jsonObj),
            true
          );
        case "Announcement":
          return model.Announcement.getJsonObj(<model.Announcement>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
