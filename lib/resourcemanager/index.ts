/**
 * Resource Manager API
 * API for the Resource Manager service. Use this API to install, configure, and manage resources via the "infrastructure-as-code" model. For more information, see [Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).
 * OpenAPI spec version: 20180917
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as resourcemanager_waiter from "./lib/resourcemanager-waiter";

export { models };
export { requests };
export { responses };
export import ResourceManagerClient = client.ResourceManagerClient;
export import ResourceManagerWaiter = resourcemanager_waiter.ResourceManagerWaiter;