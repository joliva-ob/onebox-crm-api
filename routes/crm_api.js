

/*
 * GET /crm-api/v1.0/buyers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: text) - Filter by a given buyer identified by its email
 * start_date(type: date) - Filter by starting date (`2015-08-05T08:40:51.620Z`)
 * end_date(type: date) - Filter by final date
 * page(type: number) - Paginate response to the given page number
 * page_size(type: number) - Size of the each page requested.
 */
exports.getCrm_apiV1_0Buyers = function(req, res) {
	res.set('Content-Type', 'application/json');
	res.status(200);

	// set response body and send
	res.render('crm_api_getCrm_apiV1_0Buyers');
};

/*
 * GET /crm-api/v1.0/purchases
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: text) - Filter by a given purchase identified by its Onebox order code
 * buyer_id(type: text) - Filter by a given buyer identified by its Onebox user email.
 * start_date(type: date) - Filter by starting date (`2015-08-05T08:40:51.620Z`)
 * end_date(type: date) - Filter by final date
 * page(type: number) - Paginate response to the given page number
 * page_size(type: number) - Size of the each page requested.
 * status(type: enum[string]) - Filter by order status, the available choices are:

+ Members
    + `ABANDONED` - Indicates that the shopping cart and its linked order has not been confirmed yet.
    + `OK` - Orders successfully confirmed (purchase).
    + `ERROR` - Orders which have not finalized properly.
 */
exports.getCrm_apiV1_0Purchases = function(req, res) {
	res.set('Content-Type', 'application/json');
	res.status(200);

	// set response body and send
	res.render('crm_api_getCrm_apiV1_0Purchases');
};