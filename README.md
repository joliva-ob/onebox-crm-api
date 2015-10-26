# onebox-crm-api

## API to share CRM data to our integrated clients.

To do so, we have used a **API Blueprint** standard, **apiary** as an online editing and mocking tool, **aglio** to document it and **getsandbox** as a sandbox provider:
+ [API Blueprint](https://apiblueprint.org/)
+ [apiary.io](http://docs.oneboxcrmapi.apiary.io/)
+ [getsandbox.com](http://onebox-crm-api.getsandbox.com/)
+ [aglio](https://github.com/danielgtaylor/aglio)
+ [github](https://github.com/joliva-ob/onebox-crm-api)
+ [onebox-developer](http://developer.oneboxtickets.com/crm-api/index.html)

### Usage
1 edit the api blueprint document with apiary.io, or edit directly with Atom + blueprint plugin preview, language and lintr validation. This will provide a .md or .apib file.

2 generate the documentation from the .apib file with aglio:
aglio -i apiary.apib -o index.html
from the command line.

3 update the online mock service by singin at https://getsandbox.com, going to onebox-crm-api and re-importing source from the .apib file. And finally, mock will be available for testing at: http://onebox-crm-api.getsandbox.com/<path_api>, ie: /crm-api/v1.0/buyers from any browser, postman or soapui.

4 Apiary.io is already connected with github, so should be already up to date.
