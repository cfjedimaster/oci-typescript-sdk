import { composeRequest } from "../lib/request-generator";
import { expect } from "chai";
import { version } from "../../../package.json";
const os = require("os");

describe("Test Request Generator ", () => {
  const pathParams = {
    "{testId}": "Test-Id"
  };

  const queryParams = { "imageId": "test" };

  const headerParams = {
    "opc-request-id": "test-request-id",
    "Content-Length": "0",
    "Content-Type": "application/json"
  };

  const clientInfo = `Oracle-TypescriptSDK/${version}`;
  const userAgent = `${clientInfo} (${os.platform}/${os.release}; Node/${process.version})`;

  it("should compose request properly  in Node environment", async function() {
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    expect(sdkRequest.body).to.not.exist;
    expect(sdkRequest.headers.get("Content-Type")).equals("application/json");
    expect(sdkRequest.uri).equals(
      "http://test-end-point/20191002/testUrl/Test-Id/actions?imageId=test"
    );
    expect(sdkRequest.headers.get("opc-request-id")).exist;
    expect(sdkRequest.headers.get("X-Orcl-User-Agent")).not.exist;
    expect(sdkRequest.headers.get("User-Agent")).equals(userAgent);
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
  });
});
