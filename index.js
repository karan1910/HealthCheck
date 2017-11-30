var http = require('http');
var jade = require('jade');
fs = require('fs');
/*
var config = require('./config.json');
var request = require('superagent');

let jadeConfig = {tabs : config.obj.tabs, table : {} };

function updateConfig(){

    let totalRequest = 0;

    for(let i = 0; i < config.obj.tabs; i++){
        let tabName = config.obj.tabs[i];
        let tabUnderProd = config.obj.PROD[tabName];
        let tabUnderStaging = config.obj.STAGING[tabName];
        for(let j = 0; j < tabUnderProd.tests.length; j++){
            let test = tabUnderProd.tests[j];
            if(tabUnderProd[test].hasOwnProperty('tests')){
                totalRequest += tabUnderProd[test].tests.length;
            }
            else{
                totalRequest++;
            }
        }
        for(let j = 0; j < tabUnderStaging.tests.length; j++){
            let test = tabUnderStaging.tests[j];
            if(tabUnderStaging[test].hasOwnProperty('tests')){
                totalRequest += tabUnderStaging[test].tests.length;
            }
            else{
                totalRequest++;
            }
        }
    }


    for(let i = 0; i < config.obj.tabs; i++){
        let tabName = config.obj.tabs[i];
        let tabUnderProd = config.obj.PROD[tabName];
        let tabUnderStaging = config.obj.STAGING[tabName];
        for(let j = 0; j < tabUnderProd.tests.length; j++){
            let test = tabUnderProd.tests[j];
            if(tabUnderProd[test].hasOwnProperty('tests')){
                totalRequest += tabUnderProd[test].tests.length;
            }
            else{
                totalRequest++;
            }
        }
        for(let j = 0; j < tabUnderStaging.tests.length; j++){
            let test = tabUnderStaging.tests[j];
            if(tabUnderStaging[test].hasOwnProperty('tests')){
                totalRequest += tabUnderStaging[test].tests.length;
            }
            else{
                totalRequest++;
            }
        }
    }
}

updateConfig();
*/
proceed();
function proceed(){
    /*fs.readFile('static-html.jade', 'utf8', function (err, data) {
        if (err) throw err;
        var fn = jade.compile(data, {pretty : true});
        html = fn(config);
        console.log(html);
    });*/
    fs.readFile('index.html', function (err, data) {
        if (err) throw err;
        html = data
    });
    http.createServer(function (req, res) {
        res.write(html);
        res.end();
    }).listen(process.env.PORT || 8888);
}
