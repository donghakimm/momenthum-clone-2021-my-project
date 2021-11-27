const quotes = [
{
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
},
{
    quote: "Life is what happens when you’re busy making other plans.", 
    author: "John Lennon",
},
{
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
},
{
    quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
},
{
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
},
{
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
},
{
    quote: "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
},
{
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
},
{
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuotes.quote}"`;
author.innerText = ` -${todaysQuotes.author}`;