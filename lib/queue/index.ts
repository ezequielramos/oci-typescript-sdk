/**
 * Queue API
 * Use the Queue API to produce and consume messages, create queues, and manage related items. For more information, see [Queue](/iaas/Content/queue/overview.htm).
 * OpenAPI spec version: 20210201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as queueadmin_waiter from "./lib/queueadmin-waiter";

export { models };
export { requests };
export { responses };
export import QueueClient = client.QueueClient;
export import QueueAdminClient = client.QueueAdminClient;
export import QueueAdminWaiter = queueadmin_waiter.QueueAdminWaiter;
