console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 5  ┃
┗━━━━━━━━━━━━━━┛

1. Add a header with a menu-button
- Add a sidebar with a list of links
- Add a main section with a headline.
- THe headline should read "Hello User"

2. Add a CSS file to this folder and link it from your HTML
- Add a simple page styling with a static sidebar
- Make sure you can see the different sections (i.e. use green, blue, orange)
- Use 'display: grid' or 'display flex' for the layout 

A: Sidebar closed (default)
┏━━━━━━━━━━━━━━┓
┃    HEADER    ┃
┣━━━━━━━━━━━━━━┫
┃     MAIN     ┃
┃              ┃
┗━━━━━━━━━━━━━━┛

B: Sidebar open (toggle menu)
┏━━━┳━━━━━━━━━━┓
┃ S ┃  HEADER  ┃
┃ I ┣━━━━━━━━━━┫
┃ D ┃   MAIN   ┃
┃ E ┃          ┃
┗━━━┻━━━━━━━━━━┛

3. Toggle the sidebar when the button is clicked
- Store the toggle state in the browsers localStorage

- Add 'data-test-id="menu-button"' to the menu-button
- Add 'data-test-id="sidebar"' to the sidebar

Make sure that you implement the following features:

- .cypress/behaviors/features/ToggleSidebar.feature
- .cypress/behaviors/features/KeepSidebarState.feature

Run the tests via 'npm run cypress:open'
All tests should pass

`);

const root = document.querySelector("#root");

const header = document.createElement("header");
const button = document.createElement("button");
const sidebar = document.createElement("aside");
const main = document.createElement("main");
const headline = document.createElement("h1");

root.append(header, sidebar, main);
header.append(button);
main.append(headline);

headline.innerText = "Hello User";
button.innerHTML = `<svg viewBox="0 0 24 24"><path d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z"/></svg>`

sidebar.innerHTML += `
<nav>
   <a href="http://">Link</a>
   <a href="http://">Link</a>
   <a href="http://">Link</a>
   <a href="http://">Link</a>
</nav>
`

button.addEventListener("click", event_ => {
    sidebar.classList.toggle("sidebar--open");
})