import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    const getNewQuote = () => {
        fetchQuote();
    };

    const tweetQuote = () => {
        window.open(`https://twitter.com/intent/tweet?text="${quote}" - ${author}`);
    };

    return (
        <div id="quote-box">
            <div id="text">{quote}</div>
            <div id="author">- {author}</div>
            <button id="new-quote" onClick={getNewQuote}>New Quote</button>
            <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweet Quote</a>
        </div>
    );
};

export default QuoteBox;
