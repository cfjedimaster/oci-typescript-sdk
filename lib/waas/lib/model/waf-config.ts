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
 * The Web Application Firewall configuration for the WAAS policy.
 */
export interface WafConfig {
  /**
   * The access rules applied to the Web Application Firewall. Used for defining custom access policies with the combination of `ALLOW`, `DETECT`, and `BLOCK` rules, based on different criteria.
   */
  "accessRules"?: Array<model.AccessRule>;
  /**
   * The IP address rate limiting settings used to limit the number of requests from an address.
   */
  "addressRateLimiting"?: model.AddressRateLimiting;
  /**
   * A list of CAPTCHA challenge settings. These are used to challenge requests with a CAPTCHA to block bots.
   */
  "captchas"?: Array<model.Captcha>;
  /**
   * The device fingerprint challenge settings. Used to detect unique devices based on the device fingerprint information collected in order to block bots.
   */
  "deviceFingerprintChallenge"?: model.DeviceFingerprintChallenge;
  /**
   * A list of bots allowed to access the web application.
   */
  "goodBots"?: Array<model.GoodBot>;
  /**
   * The human interaction challenge settings. Used to look for natural human interactions such as mouse movements, time on site, and page scrolling to identify bots.
   */
  "humanInteractionChallenge"?: model.HumanInteractionChallenge;
  /**
   * The JavaScript challenge settings. Used to challenge requests with a JavaScript challenge and take the action if a browser has no JavaScript support in order to block bots.
   */
  "jsChallenge"?: model.JsChallenge;
  /**
   * The key in the map of origins referencing the origin used for the Web Application Firewall. The origin must already be included in `Origins`. Required when creating the `WafConfig` resource, but not on update.
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
   * A list of the protection rules and their details.
   */
  "protectionRules"?: Array<model.ProtectionRule>;
  /**
   * The settings to apply to protection rules.
   */
  "protectionSettings"?: model.ProtectionSettings;
  /**
   * A list of threat intelligence feeds and the actions to apply to known malicious traffic based on internet intelligence.
   */
  "threatFeeds"?: Array<model.ThreatFeed>;
  /**
   * A list of IP addresses that bypass the Web Application Firewall.
   */
  "whitelists"?: Array<model.Whitelist>;
}

export namespace WafConfig {
  export function getJsonObj(obj: WafConfig): object {
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
        "goodBots": obj.goodBots
          ? obj.goodBots.map(item => {
              return model.GoodBot.getJsonObj(item);
            })
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

        "protectionRules": obj.protectionRules
          ? obj.protectionRules.map(item => {
              return model.ProtectionRule.getJsonObj(item);
            })
          : undefined,
        "protectionSettings": obj.protectionSettings
          ? model.ProtectionSettings.getJsonObj(obj.protectionSettings)
          : undefined,
        "threatFeeds": obj.threatFeeds
          ? obj.threatFeeds.map(item => {
              return model.ThreatFeed.getJsonObj(item);
            })
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
