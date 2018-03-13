var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blta14c94311365670a')
.setHost("dev-api.built.io")
.setProtocol("https")
.setMasterKey('blt77ed42a5de276223')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt',
	extension_key	 : 'blt_ext_default_zip',
	static         : __dirname + '/client', 
	routes         : require('./server/routes')
}) 

return extensionSDK.start(9000)


