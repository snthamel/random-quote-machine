$('document').ready(function () {
    $('#new-quote').on('click', fetchQuote);
});

function fetchQuote() {
    $.ajax({
        url: "https://type.fit/api/quotes",
        dataType: 'json',
        success: function (data) {
            const quote = data[Math.floor(Math.random() * data.length)];
            const author = quote.author || 'Anonymous';
            $('#text').text(quote.text);
            $('#author').text(`- ${author}`);
            $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text="${quote.text}"%0a- ${author}%0a&hashtags=quotes,freecodecamp&related=freecodecamp`)
            $('#btn-pane').show();
        },
        error: function (xhr, status, error) {
            console.log(error);
            $('#btn-pane').show();
        }
    });
}

fetchQuote();