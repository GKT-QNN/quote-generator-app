const quoteDisplay = document.getElementById('quote-display');
const newQuoteButton = document.getElementById('new-quote-button');

const quotes = [
    "The only way to do great work is to love what you do.",
    "Strive not to be a success, but rather to be of value.",
    "The mind is everything. What you think you become.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams."
    // คุณสามารถเพิ่มคำคมอื่นๆ ได้ที่นี่
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

newQuoteButton.addEventListener('click', () => {
    quoteDisplay.textContent = getRandomQuote();
});

// แสดงคำคมเริ่มต้นเมื่อโหลดหน้าเว็บ (Optional)
quoteDisplay.textContent = getRandomQuote();
