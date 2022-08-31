const Crawler = require("crawler");

const content = new Crawler({
    maxConnections: 10,
    callback: function (err, res, next) {
        if(err) {
            console.error(err);
        } else {
            const $ = res.$;

            const $bodyList = $("div.thumb_area").children("div.thumb_box");

            let newsList = [];
            $bodyList.each(function(i, elem) {
                newsList[i] = $(this).find('a.thumb img').attr('alt');
            });

            console.log(newsList);
        }
        next();
    }
});

content.queue("https://www.naver.com/");