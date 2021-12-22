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

// 1.
const div = document.querySelector("#root");

const h1 = document.createElement("h1");
const h1Content = document.createTextNode("It works!");
const h2 = document.createElement("h2");


div.append(h1, h2);
h1.append(h1Content);
// 2.
// const two = "hallo 
// "
const h1Class = `_${Math.round(Math.random() * 2000)}`;
// const a = Math.random() // 0.245
// const b = a * 100 // 24.5 
// const c = Math.round(b) // 25!
// const d = Math.floor(b) // 24
// const e = Math.ceil(b) // 25, auch bei 24.2

h1.classList.add(h1Class);
// 3.

const style = document.createElement("style");

document.head.append(style)

style.setAttribute('id', "main-style") 
// 4.
style.innerHTML = `
.${h1Class} {
    color:blue;
}`; 
