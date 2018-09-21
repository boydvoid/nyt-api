$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  var query = "trump";
  //create a rowrespo
  //append columns
  //append card to columns
  //append image, div, h5-title, p- snippet, link to card
  url +=
    "?" +
    $.param({
      "api-key": "2cea556ee8104a399adb716b5a668958",
      q: query
    });

  $.ajax({
    url: url,
    method: "GET"
  }).then(function(result) {
    console.log(result);
    let container = $(".cards");
    let row = $("<div>");

    let columnArr = [];
    //add classes to each element
    console.log(result.response.docs.length);
    for (var i = 0; i < result.response.docs.length; i++) {
      let column = $("<div id=c" + [i] + "></div>");
      let cards = $("<div id=ca" + [i] + "></div>");
      let image = $("<img id=i" + [i] + ">");
      let cardBody = $("<div id=cb" + [i] + "></div>");
      let title = $("<h5 id=h" + [i] + ">");
      let snippet = $("<p id=sn" + [i] + ">");
      let link = $("<a id=b" + [i] + ">");

      column.addClass("col-xl-3");
      cards.addClass("cards");
      image.addClass("card-img-top");
      cardBody.addClass("card-body");
      title.addClass("card-title");
      snippet.addClass("card-text");
      link.addClass("btn btn-primary");

      console.log(i);
      //inner texts
      image.attr(
        "src",
        "https://www.nytimes.com/" + result.response.docs[i].multimedia[0].url
      );
      link.attr("href", result.response.docs[i].web_url);
      link.text("NYT");
      snippet.text(result.response.docs[i].snippet);
      title.text(result.response.docs[i].headline.main);

      //appends

      cardBody.append(title);
      cardBody.append(snippet);
      cardBody.append(link);

      cards.append(image);
      cards.append(cardBody);

      column.append(cards);
      container.prepend(column);
    }
  });
});
