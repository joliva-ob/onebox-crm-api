

/*
 * POST /oauth/token
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postOauthToken = function(req, res) {
	res.set('Content-Type', 'application/json');
	res.status(201);

	// set response body and send
	res.render('oauth_postOauthToken');
};