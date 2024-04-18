const api_url = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes/";

async function getapi(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        document.getElementById('quote').innerText = "Failed to load quote.";
        return []; 
    }
}

async function getRandomQuote() {
    try {
        const quotes = await getapi(api_url);
        if (quotes.length > 0) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            displayQuote(randomQuote.q + " — " + randomQuote.a);
        } else {
            displayQuote("No quotes available.");
        }
    } catch (error) {
        console.error('Error handling the quote data:', error);
        displayQuote("Failed to process quotes.");
    }
}

function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote;
}

getRandomQuote();


