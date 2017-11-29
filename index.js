var http = require('http');
var jade = require('jade');
fs = require('fs');
var config = require('./config.json');
var request = require('superagent');

function updateConfig(){
    let totalGetRequest = 0;
    for(let i = 0; i < config.obj['full-tabs'].length; i++){
        let curTab = config.obj['full-tabs'][i];
        totalGetRequest += config.obj[curTab].tests.length;
    }
    for(let i = 0; i < config.obj['full-tabs'].length; i++){
        let curTab = config.obj['full-tabs'][i];
        for(let j = 0; j < config.obj[curTab].tests.length; j++){
            let cb = function(f, res){
                totalGetRequest--;
                config.obj[curTab][config.obj[curTab].tests[f]] = res;
                if(totalGetRequest === 0){
                    proceed();
                }
            }
            let testName = config.obj[curTab].tests[j];
            request
            .get(config.obj[curTab][testName].url)
            .end((err, res) => {
                cb(j, res.status);
            });
        }
    }
}

updateConfig();
//proceed();
function proceed(){
    fs.readFile('static-html.jade', 'utf8', function (err, data) {
        if (err) throw err;
        var fn = jade.compile(data, {pretty : true});
        html = fn(config);
        console.log(html);
    });
    http.createServer(function (req, res) {
        res.write(html);
        res.end();
    }).listen(8888);
}
