export const appConfig = {
  // todo add library to handle env variables
  emailAuthAPIEndPoint:
    process.env.EMAIL_AUTH_API_ENDPOINT || "http://localhost:8000",
  defaultTimeout: 5000,
  pubPublishKey: 'pub-c-09038c51-029c-47a7-95f2-b6c7407afb12',
  pubSubscribeKey: 'sub-c-6b1bee04-ba9f-11e9-8753-ce76e7dc5905'
};
