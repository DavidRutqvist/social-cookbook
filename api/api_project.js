define({
  "title": "The Social Cookbook API Documentation",
  "header": {
    "title": "The Social Cookbook API",
    "content": "<p>The specification below defines all endpoint available through the API. Most of them require an access token which is obtained using the authentication process. The endpoints for registering and authenticating are defined below as well however in order for easire jump start of the API is the order of execution shown below.</p>\n<ol>\n<li>If not yet registered make a call to the /api/register endpoint. If you are unsure if you are registered or not may you skip to step 2, it will eventually give a descriptive error message stating that you are currently not registered then jump back to 1.</li>\n<li>Make a call to the /api/authenticate endpoint with your Facebook Graph OAuth Access Token and the corresponding user id. Please note that different &quot;Facebook Apps&quot; generate different user ids for the same user. This is important to keep in mind when using Facebooks Graph API Explorer in order to obtain a development token. The functionality will be fully functioning but one cannot expect their recipes added through the user interface to be shown as &quot;yours&quot;.</li>\n<li>The /api/authenticate endpoint returns a access token valid only for the API. This must be supplied in all the following calls to the API. This is done by placing the token in the x-access-token header field. If using Postman is this simply done by clicking the &quot;Headers&quot; tab and then adding a new row.</li>\n<li>Start using the API!</li>\n</ol>\n"
  },
  "name": "social-cookbook-api",
  "version": "1.0.0",
  "description": "",
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-01-30T08:01:34.844Z",
    "url": "http://apidocjs.com",
    "version": "0.16.1"
  }
});
