:root {
  --color-background: whitesmoke;
}

@media (prefers-color-scheme: dark) {
:root {
    --color-background: grey;
  }
}


* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'Roboto Mono', monospace;

}

.card {
  width: 50vw;
  border-radius: 20px;
  padding: 5px;

  background-color: var(--color-background);
}

.cardcontent-headline {
  margin-bottom: 0px;
}

.card-content {

}




const root = document.querySelector("#root");

const firstNames = ["Kim", "Dominik", "Alex", "Max"];
const lastNames = ["Hall", "Floor", "Ceiling", "Room"];
const sex = ["men", "female"];
const hobbies = ["swimming", "boat driving", "riding", "drinking", "shuffling"];

// Random Name
const randomNum = n => Math.round(Math.random() * n);
const getRandomItem = array => {
  const position = randomNum(array.length - 1);
  return array[position];
};

root.innerHTML += `
<header>
  <h3>
     ${getRandomItem(firstNames)} ${getRandomItem(firstNames)}
   </h3>
</header>
<img src="https://randomuser.me/api/portraits/${getRandomItem(sex)}/${randomNum(
  100
)}.jpg" alt="Profile ${getRandomItem(firstNames)}"/>
<div>
  <h4>Hobbies</h4>
  <ul></ul>
</div>
`;

const hobbiesList = document.querySelector("ul");
// Random Hobbies
// for (let i = 0; i < 3; i++) {
//   const hobbyItem = document.createElement("li");
//   hobbiesList.append(hobbyItem);
//   hobbyItem.innerHTML = getRandomItem(hobbies);
// }

function generateHobbyList(n, array) {
  const myArray = [];
  for (let i = 0; i < n; ) {
    const randomHobby = array[getRandomItem(hobbies)];
    if (!myArray.includes(randomHobby)) {
      myArray.push(randomHobby);
      i++;
    }
  }
  return myArray;
}
generateHobbyList(5);
hobbiesList.append(myArray);

// ${if (getRandomItem(sex) == "men") {"Mr."} else {"Mrs."}}
// const root = document.querySelector("#root");

// const card = document.createElement("div");
// const cardHeader = document.createElement("header");
// const cardHeadline = document.createElement("h3");
// const cardImage = document.createElement("img");
// const cardContent = document.createElement("div");
// const cardContentHeadline = document.createElement("h4")
// const cardContentList = document.createElement("ul")
// const cardContentListItem1 = document.createElement("li");
// const cardContentListItem2 = document.createElement("li");
// const cardContentListItem3 = document.createElement("li");

// root.append(card);
// card.append(cardHeader);
// cardHeader.append(cardHeadline);
// card.append(cardImage);
// card.append(cardContent);
// cardContent.append(cardContentHeadline);
// cardContent.append(cardContentList);

// cardContent.append(cardContentListItem1);
// cardContent.append(cardContentListItem2);
// cardContent.append(cardContentListItem3);

// card.classList.add("card");
// cardHeader.classList.add("card-header");
// cardContent.classList.add("card-content");
// cardContentHeadline.classList.add("cardcontent-headline");
// cardImage.classList.add("card-image");

// // Card
// // Random Generator
// const randomN = n => Math.round(Math.random() * n);
// const getRandomItem = array => {
//   const maxIndex = array.length - 1;
//   const randomIndex = randomN(maxIndex);
//   return array[randomIndex];
// };
// // Names Array
// const firstNames = ["Heiko", "Bernd", "Kim", "Dominique", "Piet"];
// const lastNames = ["Bread", "Brown", "Obama", "Hater", "Sweet"]

// // Name
// cardHeadline.innerHTML = { getRandomItem(firstNames) }{ getRandomItem(lastNames) }`;
// // Image
// cardImage.src =`https://randomuser.me/api/portraits/men/${randomN(100)}.jpg`;
// cardImage.alt ="random photo";

// // Hobbies
// cardContentHeadline.innerHTML = "My hobbies";

// const hobbies = ["Swimming", "Howling", "Friends", "Instagram", "Climbing", "Mario Kart", "Floating", "Filming"];

// cardContentListItem1.innerText = getRandomItem(hobbies)
// cardContentListItem2.innerText = getRandomItem(hobbies);
// cardContentListItem3.innerText = getRandomItem(hobbies);
