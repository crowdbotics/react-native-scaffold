export const appConfig = {
  // todo add library to handle env variables
  emailAuthAPIEndPoint:
    process.env.EMAIL_AUTH_API_ENDPOINT || "http://localhost:8000",
  defaultTimeout: 5000
};
