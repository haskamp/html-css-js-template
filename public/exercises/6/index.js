console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 6  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch 10 users from https://randomuser.me/api/
- you can request a specific number of results with a query-parameter
  Use https://randomuser.me/api/?results=10 (you can adjust the number '10')
- Look up how the fetch api works: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

2. Display all user names in a list.
`);

const root = document.querySelector("#root");
const list = document.createElement("ul");
root.append(list);

fetch("https://randomuser.me/api/?results=100")
  .then(response => response.json()) //
  .then(jsonData => {
    const users = jsonData.results;
    const items = users.map(
      user => `<li>${user.name.first} ${user.name.last}</li>`
    );
    list.innerHTML = items.join("");
  });

//   for (i = 0; i < user.length; i++) {
//  const listItem = document.createElement(li)
//= json{i}.name

const root = document.querySelector("#root");

async function getData(url) {
  const response = await fetch(url); // statt .then(response => response.json());
  return response.json();
}

async function makeCard() {
  const dataHeroes = await getData("/api/marvel.json");
  console.log(dataHeroes);
  // List of names
  const list = document.createElement("ul");
  root.append(list);

  const listHeroNames = dataHeroes.map(hero => `<li>${hero.name}</li>`);

  list.innerHTML = listHeroNames.join("");
}

makeCard();
