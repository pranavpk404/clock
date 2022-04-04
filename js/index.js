const text = document.getElementById(`quote`);
const author = document.getElementById(`author`);

const startTime = () => {
  let today = new Date();
  let time = today.toLocaleTimeString();
  document.getElementById(`time-display`).innerHTML = time;
  const t = setTimeout(() => {
    startTime();
  }, 1000);
};

const startDate = () => {
  let today = new Date();
  let timeAndDate = today.toLocaleDateString();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let date = timeAndDate.slice(0, 10);
  document.getElementById(`date`).innerHTML = `${
    days[today.getDay()]
  } | ${date}`;
};

const getNewQuote = async () => {
  const url = `https://type.fit/api/quotes`;
  const response = await fetch(url);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;
  if (auth == null) {
    author = `Anonymous`;
  }
  if (quote.length > 80) {
    text.style.fontSize = `20px`;
  }
  document.getElementById(`quote`).innerHTML = quote;
  document.getElementById(`author`).innerHTML = `~ ${auth}`;
};
getNewQuote();
