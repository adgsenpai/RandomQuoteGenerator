
document.addEventListener('DOMContentLoaded', function () {
    fetchQuotes();
});

function fetchQuotes() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(quotes => {
            displayQuotes(quotes);
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
}

function displayQuotes(quotes) {
    const quotesCarousel = document.querySelector('#Quotes .carousel-inner');
    quotesCarousel.innerHTML = '';

    quotes.forEach((quote, index) => {
        const quoteText = quote.text;
        const quoteAuthor = quote.author || 'Unknown'; // Handle null authors

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active'); // Make the first item active

        carouselItem.innerHTML = `
            <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
                <div class="text-center">
                    <p class="lead">"${quoteText}"</p>
                    <footer class="blockquote-footer">${quoteAuthor}</footer>
                </div>
            </div>
        `;

        quotesCarousel.appendChild(carouselItem);
    });

    // Initialize Carousel
    $('#Quotes').carousel({
        interval: 500  // Change slides every 2 seconds
    });
}
