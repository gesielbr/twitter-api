var pesquisar = function (e) {
  limparTweets();
  mostraLoading();
  var pesquisa = document.querySelector('.pesquisa').value
  consultaAPI(pesquisa);
};

consultaAPI = (termoPesquisado) =>{
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode:'no-cors'
  };
  var url = "http://twitter.cc/search.php?q=" + termoPesquisado;
  console.log(url);
  fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => montaCards(result))
    .catch(error => console.log('error', error));
}

limparTweets = () => {
  document.querySelector(".estrutura-tweets").innerHTML = "";
};

// limparTweets = () => {
//   document.querySelector(".estrutura-tweets").innerHTML = "...Pesquisando";
// };

mostraLoading = () => {
  document.querySelector(".estrutura-tweets").innerHTML = "pesquisando...";
};

montaCards = (json) => {
  var tweets = JSON.parse(json).statuses;
  var templateSource = document.getElementById("entry-template").innerHTML;
  var templateParser = Handlebars.compile(templateSource);
  var html = "";
  tweets.forEach(element => {
    var context = element;
    
    html += templateParser(context);
  });
  document.querySelector(".estrutura-tweets").innerHTML = html;
    
};

document.querySelector('.pesquisa').addEventListener("keypress", function(ev){if(ev.keyCode == 13) {ev.preventDefault(); pesquisar()}});
document.querySelector("#button").addEventListener("click", pesquisar);   

//  format an ISO date using Moment.js
//  http://momentjs.com/
//  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
//  usage: {{dateFormat creation_date format="MMMM YYYY"}}
Handlebars.registerHelper('dateFormat', function(context, block) {
  if (window.moment) {
    moment.locale('pt-br');
    var f = block.hash.format || "MMM  Do, YYYY";
    return moment(Date(context)).format(f);
  }else{
    return context;   //  moment plugin not available. return data as is.
  };
});
















































// API Key
// fW9xioahiL8KwJeAxev4qTb10


// API Secret Key
// Jy0gWDmAX76UhvD2j912PGTukBkSevSsIeIH5XCEc0HBY2NbmY


// Bearer Token
// AAAAAAAAAAAAAAAAAAAAACyrSgEAAAAA99UZOvcD0zi5%2BRXYvSt2W2DXPic%3DKJtyhAzreIuiDzT2Ng94usuU3S902cf04DNdOUtQ1Z77721nKl