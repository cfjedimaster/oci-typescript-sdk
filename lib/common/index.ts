import * as auth from "./lib/auth/auth";
import * as error from "./lib/error";
import * as signer from "./lib/signer";
import * as helper from "./lib/helper";
import * as http from "./lib/http";
import * as serializer from "./lib/object-serializer";
import * as range from "./lib/range";
import { Region } from "./lib/region";
import { Realm } from "./lib/realm";
import { EndpointBuilder } from "./lib/endpoint-builder";
import {
  DelayStrategy,
  TerminationStrategy,
  ExponentialBackoffDelayStrategy,
  MaxTimeTerminationStrategy,
  genericWaiter,
  genericTerminalConditionWaiter,
  WaiterConfiguration
} from "./lib/waiter";
import { RequireOnlyOne, AuthParams } from "./lib/types";
import { HttpRequest } from "./lib/http-request";

import {
  paginateRecords,
  genericPaginateRecords,
  paginateResponses,
  genericPaginateResponses
} from "./lib/paginators";

import { ConfigFileAuthenticationDetailsProvider } from "./lib/auth/config-file-auth";

import { Method, composeRequest } from "./lib/request-generator";
import { composeResponse } from "./lib/response-generator";
export import AuthenticationDetailsProvider = auth.AuthenticationDetailsProvider;
export import SimpleAuthenticationDetailsProvider = auth.SimpleAuthenticationDetailsProvider;
export import RegionProvider = auth.RegionProvider;
export import isRegionProvider = auth.isRegionProvider;

export import HttpClient = http.HttpClient;
export import FetchHttpClient = http.FetchHttpClient;

export import OciError = error.OciError;

export import RequestSigner = signer.RequestSigner;
export import DefaultRequestSigner = signer.DefaultRequestSigner;

export import handleErrorResponse = helper.handleErrorResponse;
export import convertStringToType = helper.convertStringToType;
export import ObjectSerializer = serializer.ObjectSerializer;

export import Range = range.Range;
export {
  Region,
  Realm,
  EndpointBuilder,
  DelayStrategy,
  TerminationStrategy,
  ExponentialBackoffDelayStrategy,
  MaxTimeTerminationStrategy,
  genericWaiter,
  genericTerminalConditionWaiter,
  WaiterConfiguration,
  RequireOnlyOne,
  AuthParams,
  paginateRecords,
  genericPaginateRecords,
  paginateResponses,
  genericPaginateResponses,
  Method,
  composeRequest,
  composeResponse,
  HttpRequest,
  ConfigFileAuthenticationDetailsProvider
};
