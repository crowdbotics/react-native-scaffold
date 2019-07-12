import axios from "axios";
import { appConfig } from "../config/app";

import { version } from "../../package.json";

const APP_PLATFORM = "Mobile";

export const request = axios.create({
  headers: {
    app_platform: APP_PLATFORM,
    app_version: version
  }
});

export function setupHttpConfig() {
  request.defaults.baseURL = appConfig.apiEndPoint;
  request.defaults.timeout = appConfig.defaultTimeout;
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  // todo add auth token from store
}
