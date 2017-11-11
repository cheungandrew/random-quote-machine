function randomQuoteGen() {
    // URL of random quote API
    var quoteapi = "https://talaikis.com/api/quotes/random/";

    // Background images
    var images = ["images/lake.jpg", "images/mountain.jpg", "images/river.jpg"];
    var imgNum = 1;

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

            // Change background image
            $("body").css("background-image", "url(" + images[imgNum] +")");
            imgNum++;
            if (imgNum === 3) {
                imgNum = 0;
            }
        });
    });
}

randomQuoteGen();