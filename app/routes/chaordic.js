var request     = require('request');

module.exports  = function(app){
    request({
        uri: 'https://collect.chaordicsystems.com/v7/events/views/product',
        method: 'POST',
        json: true,
        body: {
            apiKey: 'api-sample',
            secretKey: 'v8s+tGw2kuCKX33TYeFUOA==',
            source: 'mobile-app',
            pid: '100',
            deviceId: 'ABEDFA1231',
            user: {
                id: '123456',
                email: 'abc@def.com'
            }
        }
    }, function(err, res, body) {
        if (!err && res.statusCode === 204) {
            console.log('success!');
        } else {
            console.log('something is wrong', JSON.stringify(body || err));
        }
    });
};