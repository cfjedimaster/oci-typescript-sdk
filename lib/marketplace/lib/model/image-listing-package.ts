/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * A package for image listings.
 */
export interface ImageListingPackage extends model.ListingPackage {
  /**
   * The id of the AppCatalogListing associated with this ListingPackage.
   */
  "appCatalogListingId"?: string;
  /**
   * The resource version of the AppCatalogListing associated with this ListingPackage.
   */
  "appCatalogListingResourceVersion"?: string;
  /**
   * List of regions in which this ListingPackage is available.
   */
  "regions"?: Array<model.Region>;

  "packageType": string;
}

export namespace ImageListingPackage {
  export function getJsonObj(obj: ImageListingPackage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ListingPackage.getJsonObj(obj) as ImageListingPackage)),
      ...{
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const packageType = "IMAGE";
}
