// const { toUnicode } = require("punycode");

console.clear();
console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card`);

const root = document.querySelector("#root");
const gender = ["men", "women"];
const firstName = ["Rick", "Brudi", "Bob", "Bobo", "Bub", "Sis"];
const lastName = ["Duck", "Frosch", "Billabord", "Obama", "Sanchez"];
const hobbies = ["swimming", "climbing", "fishing", "cooking", "playing"];

// Hilfsfunktion
const randN = n => Math.round(Math.random() * n);
const randItem = arr => arr[randN(arr.length - 1)];

const grid = document.createElement("div");
grid.classList.add("grid");
root.append(grid);

for (let i = 0; i < 6; i++) {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card">
    <div class="card-header">
        <img src="https://randomuser.me/api/portraits/${randItem(
          gender
        )}/${randN(100)}.jpg" />
        <h3 class="card-name">${randItem(firstName)} ${randItem(lastName)}</h3>
    </div>
    <h4>My hobbies:</h4>
    <ul class="card-hobbies">
        <li>${randItem(hobbies)}</li>
        <li>${randItem(hobbies)}</li>
    </ul>
    </div>
`;
  grid.append(card);
}
