/**
 * OSMS
 * OS Management as a Service API definition
 * OpenAPI spec version: 20190801
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * The details for a software package
 */
export interface SoftwarePackage {
  /**
   * Package name
   */
  "displayName": string;
  /**
   * Unique identifier for the package. NOTE - This is not an OCID
   */
  "name": string;
  /**
   * Type of the package
   */
  "type": string;
  /**
   * Version of the package
   */
  "version": string;
  /**
   * the architecture for which this software was built
   */
  "architecture"?: string;
  /**
   * date of the last update to the package
   */
  "lastModifiedDate"?: string;
  /**
   * checksum of the package
   */
  "checksum"?: string;
  /**
   * type of the checksum
   */
  "checksumType"?: string;
  /**
   * description of the package
   */
  "description"?: string;
  /**
   * size of the package in bytes
   */
  "sizeInBytes"?: number;
  /**
   * list of dependencies for the software package
   */
  "dependencies"?: Array<model.SoftwarePackageDependency>;
  /**
   * list of files for the software package
   */
  "files"?: Array<model.SoftwarePackageFile>;
  /**
   * list of software sources that provide the software package
   */
  "softwareSources"?: Array<model.SoftwareSourceId>;
}

export namespace SoftwarePackage {
  export function getJsonObj(obj: SoftwarePackage): object {
    const jsonObj = {
      ...obj,
      ...{
        "dependencies": obj.dependencies
          ? obj.dependencies.map(item => {
              return model.SoftwarePackageDependency.getJsonObj(item);
            })
          : undefined,
        "files": obj.files
          ? obj.files.map(item => {
              return model.SoftwarePackageFile.getJsonObj(item);
            })
          : undefined,
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceId.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
