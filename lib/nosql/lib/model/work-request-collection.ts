/**
 * ndcs-control-plane API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Results of ListWorkRequests
 */
export interface WorkRequestCollection {
  /**
   * A page of WorkRequestSummary objects.
   */
  "items"?: Array<model.WorkRequestSummary>;
}

export namespace WorkRequestCollection {
  export function getJsonObj(obj: WorkRequestCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
