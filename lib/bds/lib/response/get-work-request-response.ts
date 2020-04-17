/**
 *
 *
 * OpenAPI spec version: 20190531
 *
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
import common = require("oci-common");

export interface GetWorkRequestResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * A non-negative integer number representing the number of seconds the client should wait before polling
   * this endpoint again.
   *
   */
  "retryAfter": number;
  /**
   * The returned model.WorkRequest instance.
   */
  "workRequest": model.WorkRequest;
}
