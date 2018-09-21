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
    let column = $("<div>");
    let cards = $("<div>");
    let image = $("<img>");
    let cardBody = $("<div>");
    let title = $("<h5>");
    let snippet = $("<p>");
    let link = $("<a>");

    //add classes to each element
    console.log(result.response.docs.length);
    for (var i = 0; i < result.response.docs.length; i++) {
      column.addClass("col-xl-3");
      cards.addClass("cards");
      image.addClass("card-img-top");
      cardBody.addClass("card-body");
      title.addClass("card-title");
      snippet.addClass("card-text");
      link.addClass("btn btn-primary");

      row.attr("id", "row" + [i]);
      column.attr("id", "column" + [i]);
      cards.attr("id", "cards" + [i]);
      image.attr("id", "image" + [i]);
      cardBody.attr("id", "cardBody" + [i]);
      title.attr("id", "title" + [i]);
      snippet.attr("id", "snippet" + [i]);
      link.attr("id", "link" + [i]);
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
