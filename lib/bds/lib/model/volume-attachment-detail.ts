/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as model from "../model";

/**
 * A detail of the attached block volume.
 */
export interface VolumeAttachmentDetail {
  /**
   * The OCID of the volume attachment.
   */
  "volumeAttachmentId": string;
  /**
   * The size of the volume in GBs.
   */
  "volumeSizeInGBs": number;
}

export namespace VolumeAttachmentDetail {
  export function getJsonObj(obj: VolumeAttachmentDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
