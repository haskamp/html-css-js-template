console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);
console.clear();

const root = document.querySelector("#root");

const form = document.createElement("form");

root.append(form);

form.innerHTML += `
<input type="email" name="email"/>
<button type="submit">Subscribe</button>`;

form.addEventListener("submit", ev =>{
    ev.preventDefault();

    const formData = new FormData(form);

    console.log(formData.get("email"))

    window.localStorage.setItem("email-address", formData.get("email"));

    form.innerHTML = "thanks";

})
if (window.localStorage.getItem("email-address")) {
    form.remove()
    root.append("You are subscribed")
}