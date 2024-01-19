var news_array = [];
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
$(document).ready(function () {



    var news_json = []
    //const newsRequest = new Request ('https://content.guardianapis.com/search?section=world&show-fields=all&show-blocks=body&api-key=test');
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2022-10-08&' +
        'sortBy=popularity&' +
        'apiKey=4f19cc52bbde4495a8a62e38b5e9b61b';
    var gaurdian_url = "https://content.guardianapis.com/search?section=world&show-fields=all&show-blocks=body&api-key=test";
    var req = new Request(gaurdian_url);

    var date = document.getElementById("today");
    date.innerHTML = new Date();
    fetch(req)
        .then(function (response) {
            return response.json();
        }).then(news => {

            for (var i = 0; i < news.response.results.length; i = i + 1) {
                var button = '<button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#readMore' + i + '">\
            ReadMore\
          </button>'
                var modal = '<div class="modal modal-xl fade" id="readMore' + i + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\
            <div class="modal-dialog modal-dialog-scrollable">\
              <div class="modal-content">\
                <div class="modal-header">\
                  <h1 class="modal-title fs-5" id="exampleModalLabel">'+ news.response.results[i].fields.headline + '</h1>\
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
                </div>\
                <div class="modal-body">\
                <img src="'+ news.response.results[i].fields.thumbnail + '">\
                  '+ news.response.results[i].fields.bodyText + '\
                </div>\
                <div class="modal-footer">\
                  </div>\
              </div>\
            </div>\
          </div>'
            var card='<div class="card" style="width: 18rem;">\
            <div class="card-body">\
            </div>\
          </div>'
                $('<div class="col collumn collumn' + 2 + '"><div class="head"><span class="headline hl3">' + news.response.results[i].fields.headline + '</span><p><span class="headline hl4">' + news.response.results[i].fields.bylineHtml + '</span></p></div><p>' + news.response.results[i].fields.bodyText.slice(0, 200 * 2) + '...' + button + modal + '</p>' + '</div></div>').appendTo("#main");

            }
        })

    var req1 = new Request("../ASSETS/ads.json");
    fetch(req1)
        .then(function (response) {
            return response.json();
        }).then(ads => {
            for (var i = 0; i < ads.ads.length; i = i + 1) {
               
                var img='<img src="'+ ads.ads[i].img + '">'
                $(img).appendTo('#ads');
            }
            
        })

});