/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Used for creating a new DB system. Does not use backups or an existing database for the creation of the initial database.
 *
 */
export interface LaunchDbSystemDetails extends model.LaunchDbSystemBase {
  "dbHome": model.CreateDbHomeDetails;
  /**
   * The Oracle Database Edition that applies to all the databases on the DB system.
   * Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.
   *
   */
  "databaseEdition": LaunchDbSystemDetails.DatabaseEdition;
  /**
   * The type of redundancy configured for the DB system.
   * Normal is 2-way redundancy, recommended for test and development systems.
   * High is 3-way redundancy, recommended for production systems.
   *
   */
  "diskRedundancy"?: LaunchDbSystemDetails.DiskRedundancy;
  /**
   * The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: LaunchDbSystemDetails.LicenseModel;
  "maintenanceWindowDetails"?: model.MaintenanceWindow;

  "source": string;
}

export namespace LaunchDbSystemDetails {
  export enum DatabaseEdition {
    STANDARDEDITION = "STANDARD_EDITION",
    ENTERPRISEEDITION = "ENTERPRISE_EDITION",
    ENTERPRISEEDITIONHIGHPERFORMANCE = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    ENTERPRISEEDITIONEXTREMEPERFORMANCE = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE"
  }

  export enum DiskRedundancy {
    HIGH = "HIGH",
    NORMAL = "NORMAL"
  }

  export enum LicenseModel {
    LICENSEINCLUDED = "LICENSE_INCLUDED",
    BRINGYOUROWNLICENSE = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: LaunchDbSystemDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchDbSystemBase.getJsonObj(obj) as LaunchDbSystemDetails)),
      ...{
        "dbHome": obj.dbHome ? model.CreateDbHomeDetails.getJsonObj(obj.dbHome) : undefined,

        "maintenanceWindowDetails": obj.maintenanceWindowDetails
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindowDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const source = "NONE";
}
