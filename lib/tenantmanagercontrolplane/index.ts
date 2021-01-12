/**
 * TenantManager API
 * A description of the TenantManager API
 * OpenAPI spec version: 20200801
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as link_waiter from "./lib/link-waiter";
import * as recipientinvitation_waiter from "./lib/recipientinvitation-waiter";
import * as senderinvitation_waiter from "./lib/senderinvitation-waiter";
import * as workrequest_waiter from "./lib/workrequest-waiter";

export { models };
export { requests };
export { responses };
export import LinkClient = client.LinkClient;
export import LinkWaiter = link_waiter.LinkWaiter;
export import RecipientInvitationClient = client.RecipientInvitationClient;
export import RecipientInvitationWaiter = recipientinvitation_waiter.RecipientInvitationWaiter;
export import SenderInvitationClient = client.SenderInvitationClient;
export import SenderInvitationWaiter = senderinvitation_waiter.SenderInvitationWaiter;
export import WorkRequestClient = client.WorkRequestClient;
export import WorkRequestWaiter = workrequest_waiter.WorkRequestWaiter;
