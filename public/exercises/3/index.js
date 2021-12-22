console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

console.clear();

const random = n => Math.floor(Math.random() * n);
const randomItem = array => array[random(array.length)];

const firstNames = ["Max", "Alex", "Kim", "", "Cameron"];
const lastNames = ["Hall", "Lopez", "Burke", "Murphy", "Byrd"];
const sex = ["men", "women"];
const hobbies = ["swimming", "boat driving", "riding", "drinking", "shuffling"];


const root = document.querySelector("#root");

const cards = Array.from({ length: 4 });
const persons = cards.map( card => { // ist das schlimm wenn was drin ist
  const personName = randomItem(firstNames) + " " + randomItem(lastNames);
  return {
    name: personName,
    image: `https://randomuser.me/api/portraits/${randomItem(sex)}/${random(50)}.jpg`,
  };
});

root.innerHTML += /*html*/ `
    <div class="grid">${persons.map(person => (
            `<div class="card">
                <header class="card-header">
                    <h3>${person.name}</h3>
                </header
                <figure class="card-image">
                    <img src="${person.image}" alt="Image of ${person.name}"
                </figure>
            </div>`
            )
        ).join("")
    }</div >`;

