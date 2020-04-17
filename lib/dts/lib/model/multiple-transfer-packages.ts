/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.014
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

export interface MultipleTransferPackages {
  /**
   * List of TransferPackage summary's
   */
  "transferPackageObjects"?: Array<model.TransferPackageSummary>;
}

export namespace MultipleTransferPackages {
  export function getJsonObj(obj: MultipleTransferPackages): object {
    const jsonObj = {
      ...obj,
      ...{
        "transferPackageObjects": obj.transferPackageObjects
          ? obj.transferPackageObjects.map(item => {
              return model.TransferPackageSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
