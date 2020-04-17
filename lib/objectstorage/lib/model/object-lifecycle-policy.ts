/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * The collection of lifecycle policy rules that together form the object lifecycle policy of a given bucket.
 *
 */
export interface ObjectLifecyclePolicy {
  /**
   * The date and time the object lifecycle policy was created, as described in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated"?: Date;
  /**
    * The live lifecycle policy on the bucket.
* <p>
For an example of this value, see the
* [PutObjectLifecyclePolicy API documentation](https://docs.cloud.oracle.com/iaas/api/#/en/objectstorage/20160918/ObjectLifecyclePolicy/PutObjectLifecyclePolicy).
* 
    */
  "items"?: Array<model.ObjectLifecycleRule>;
}

export namespace ObjectLifecyclePolicy {
  export function getJsonObj(obj: ObjectLifecyclePolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ObjectLifecycleRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}