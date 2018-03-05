var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltbeb06f7366480208')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt50980938e58d28ec')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


