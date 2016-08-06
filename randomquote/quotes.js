var quotes = [“If you love a flower, dont pick it up.
Because if you pick it up it dies and it ceases to be what you love.
So if you love a flower, let it be.
Love is not about possession.
Love is about appreciation.― Osho”,
“Be — dont try to become― Osho”,
“Be realistic: Plan for a miracle.― Osho”,
“Life begins where fear ends.― Osho”, 





];

function getQuote() {
    return Math.floor(Math.random() * quotes.length);
}

$(function () {
    $('#quoteGen').click(function() {
        $('#quote').text(quotes[getQuote()]);
    });
});
