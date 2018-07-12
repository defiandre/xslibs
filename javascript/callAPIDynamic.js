/*eslint no-console:0 , no-unused-vars: 0*/

"use strict";

var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;

var options = {};
options = Object.assign(options, xsenv.getServices({ api: { name: "EXTERNAL_HTTP" } }));

var request = require("request");
var reqOptions = {  
  url: options.api.hname + options.api.oData + "/A_BusinessPartner?$format=json&$top=1",
  auth: {
    username: options.api.uname,
    password: options.api.pw
}
};

request(reqOptions, function(err,res,body){
  if (err) {return console.log(err);}
  return console.log(body);
});