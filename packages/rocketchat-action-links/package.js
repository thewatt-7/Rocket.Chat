Package.describe({
	name: 'rocketchat:action-links',
	version: '0.0.1',
	summary: 'Add custom actions that call functions',
	git: ''
});

Package.onUse(function(api) {
	api.use('ecmascript');
	api.use('templating');
	api.use('rocketchat:lib');
	api.use('rocketchat:theme');
	api.use('rocketchat:ui');
	api.use('less');

	api.addFiles('client/init.js', 'client');
	api.addFiles('client/stylesheets/actionLinks.less', 'client');

	api.addFiles('server/registerActionLinkFuncts.js', ['server', 'client']);
	api.addFiles('server/actionLinkHandler.js', ['server', 'client']);

});
