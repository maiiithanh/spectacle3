var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=ar&' +
          'apiKey=2a45df1ed26141779c421f47a80fd255';
var req = new Request(url);
var container = $(".news");
fetch(url)
  .then(response => response.json())
  .then(data => (data.articles))
  .then(articles => append(articles))

function append(array){
  for(var i = 0; i < array.length; i++){
      var title = array[i].title;
      var link = array[i].url;
      var img = array[i].urlToImage;
      container.append(`<a href="${link}"><img src="${img}"><span>${title}</span></a>`);
      // container.append(`<h3>${title}</h3>`);
  }
}
