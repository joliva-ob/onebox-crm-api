
/*
 * onebox-crm-api
 *
 * API to share CRM data to our integrated clients.
 * 
 * To do so, we have used a **API Blueprint** standard, **apiary** as an online editing and mocking tool, **aglio** to document it and **getsandbox** as a sandbox provider:
 * 
 * + [API Blueprint](https://apiblueprint.org/)
 * 
 * + [apiary.io](http://docs.oneboxcrmapi.apiary.io/)
 * 
 * + [getsandbox.com](http://onebox-crm-api.getsandbox.com/)
 * 
 * + [aglio](https://github.com/danielgtaylor/aglio)
 * 
 * + [github](https://github.com/joliva-ob/onebox-crm-api)
 * 
 * + [onebox-developer](http://developer.oneboxtickets.com/crm-api/)
 */


var crm_api = require("./routes/crm_api.js")
var oauth = require("./routes/oauth.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/crm-api/v1.0/buyers", "GET", crm_api.getCrm_apiV1_0Buyers);
Sandbox.define("/crm-api/v1.0/purchases", "GET", crm_api.getCrm_apiV1_0Purchases);
Sandbox.define("/oauth/token", "POST", oauth.postOauthToken);