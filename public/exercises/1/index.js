console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"

4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

const root = document.querySelector("#root");
const headline = document.createElement("h1");
root.append(headline);

headline.innerText = "It works";
headline.classList.add("main-headline");

const style = document.createElement("style");
const head = document.querySelector("head");

head.append(style);
style.setAttribute("id", "main-style");

style.innerHTML += `
    .main-headline {
    color: blue ;
    }
`;
