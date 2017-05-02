$(document).ready(function () {

    var quotes = ['Shit', 'fuck', 'damn it'];
    var authors = ['Tom', 'Jack', "Lam"];
    var randomNum;
    var randomQuote;
    var randomAuthor;
    var url = "https://api.forismatic.com/api/1.0?method=getQuote&lang=en&format=jsonp&jsonp=?";


    function getQuote() {

        //        randomNum = Math.floor(Math.random() * quotes.length);
        //        randomQuote = quotes[randomNum];
        //        randomAuthor = authors[randomNum];

          
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (json) {
            $("#quote").text(json.quoteText);
            $("#author").text(json.quoteAuthor);  
        });
    }

    $('#new').on('click', getQuote);

    $('#tweet').on('click', function () {
        window.open('https://twitter.com/intent/tweet?text=' + randomQuote);
    })

});
