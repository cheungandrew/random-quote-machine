function randomQuoteGen() {
    // URL of random quote API
    var quoteapi = "https://talaikis.com/api/quotes/random/";

    // Getting JSON of quote and writing it to HTML
    $.getJSON(quoteapi, function(data) {
        $(".mb-0").html('"' + data.quote + '"');
        $(".blockquote-footer").html(data.author);
        // Tweet
        $(".tweet").prop("href", "https://twitter.com/intent/tweet?text=" + data.quote);
    });

    // New quote on button click
    $(".btn").click(function clickQuote() {
        $.getJSON(quoteapi, function(data) {
            $(".mb-0").html('"' + data.quote + '"');
            $(".blockquote-footer").html(data.author);
            // Tweet
            $(".tweet").prop("href", "https://twitter.com/intent/tweet?text=" + data.quote);
        });
    });
}

randomQuoteGen();