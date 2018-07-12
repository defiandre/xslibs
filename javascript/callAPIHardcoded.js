/*eslint no-console:0 , no-unused-vars: 0*/

"use strict";

var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;

//Hana service.
// var services1 = xsenv.getServices({ emre: { tag: "hana" } }); 
//console.log(services1);

var request2 = require("request");


var options = {  
  url: "http://fioridev1.dev.toyota.ca:8000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner?$format=json&$top=1",
  auth: {
    username: "caglare",
    password: "test"
}
};
request2(options, function(err,res,body){
  if (err) {return console.log(err);}
  return console.log(body);
});

