/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The Web Application Firewall configuration for the WAAS policy creation.
 */
export interface WafConfigDetails {
  /**
   * The access rules applied to the Web Application Firewall. Access rules allow custom content access policies to be defined and `ALLOW`, `DETECT`, or `BLOCK` actions to be taken on a request when specified criteria are met.
   */
  "accessRules"?: Array<model.AccessRule>;
  /**
   * The settings used to limit the number of requests from an IP address.
   */
  "addressRateLimiting"?: model.AddressRateLimiting;
  /**
   * A list of CAPTCHA challenge settings. CAPTCHAs challenge requests to ensure a human is attempting to reach the specified URL and not a bot.
   */
  "captchas"?: Array<model.Captcha>;
  /**
   * The device fingerprint challenge settings. Blocks bots based on unique device fingerprint information.
   */
  "deviceFingerprintChallenge"?: model.DeviceFingerprintChallenge;
  /**
   * The human interaction challenge settings. Detects natural human interactions such as mouse movements, time on site, and page scrolling to identify bots.
   */
  "humanInteractionChallenge"?: model.HumanInteractionChallenge;
  /**
   * The JavaScript challenge settings. Blocks bots by challenging requests from browsers that have no JavaScript support.
   */
  "jsChallenge"?: model.JsChallenge;
  /**
   * The key in the map of origins referencing the origin used for the Web Application Firewall. The origin must already be included in `Origins`. Required when creating the `WafConfig` resource, but is not required upon updating the configuration.
   */
  "origin"?: string;
  /**
   * A list of caching rules applied to the web application.
   */
  "cachingRules"?: Array<model.CachingRule>;
  /**
   * A list of the custom protection rule OCIDs and their actions.
   */
  "customProtectionRules"?: Array<model.CustomProtectionRuleSetting>;
  /**
   * The map of origin groups and their keys used to associate origins to the `wafConfig`. Origin groups allow you to apply weights to groups of origins for load balancing purposes. Origins with higher weights will receive larger proportions of client requests.
   * To add additional origins to your WAAS policy, update the `origins` field of a `UpdateWaasPolicy` request.
   */
  "originGroups"?: Array<string>;
  /**
   * The settings applied to protection rules.
   */
  "protectionSettings"?: model.ProtectionSettings;
  /**
   * A list of IP addresses that bypass the Web Application Firewall.
   */
  "whitelists"?: Array<model.Whitelist>;
}

export namespace WafConfigDetails {
  export function getJsonObj(obj: WafConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "accessRules": obj.accessRules
          ? obj.accessRules.map(item => {
              return model.AccessRule.getJsonObj(item);
            })
          : undefined,
        "addressRateLimiting": obj.addressRateLimiting
          ? model.AddressRateLimiting.getJsonObj(obj.addressRateLimiting)
          : undefined,
        "captchas": obj.captchas
          ? obj.captchas.map(item => {
              return model.Captcha.getJsonObj(item);
            })
          : undefined,
        "deviceFingerprintChallenge": obj.deviceFingerprintChallenge
          ? model.DeviceFingerprintChallenge.getJsonObj(obj.deviceFingerprintChallenge)
          : undefined,
        "humanInteractionChallenge": obj.humanInteractionChallenge
          ? model.HumanInteractionChallenge.getJsonObj(obj.humanInteractionChallenge)
          : undefined,
        "jsChallenge": obj.jsChallenge ? model.JsChallenge.getJsonObj(obj.jsChallenge) : undefined,

        "cachingRules": obj.cachingRules
          ? obj.cachingRules.map(item => {
              return model.CachingRule.getJsonObj(item);
            })
          : undefined,
        "customProtectionRules": obj.customProtectionRules
          ? obj.customProtectionRules.map(item => {
              return model.CustomProtectionRuleSetting.getJsonObj(item);
            })
          : undefined,

        "protectionSettings": obj.protectionSettings
          ? model.ProtectionSettings.getJsonObj(obj.protectionSettings)
          : undefined,
        "whitelists": obj.whitelists
          ? obj.whitelists.map(item => {
              return model.Whitelist.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}