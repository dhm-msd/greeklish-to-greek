//Author: DMCode
module.exports = function(keyword,callback){
    url = 'https://www.startpage.com/do/asearch'
    var request = require('request');
    var cheerio = require('cheerio');

    request.post({
        headers: {
            'content-type' : 'application/x-www-form-urlencoded',
            'user-agent': 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
        },
        url:     url,
        body:    "cmd=process_search&language=greek&enginecount=1&pl=&abp=1&hmb=1&ff=&theme=&flag_ac=0&cat=web&ycc=0&t=air&nj=0&query="+keyword+"&pg=0"
    }, function(error, response, body){
        var $ = cheerio.load(body);
        didUmean_sugg = $("body").find(".sp-gl__result").text()
        if(didUmean_sugg){
            callback(didUmean_sugg)
        }else{
            callback(keyword)
        }
    });
}
