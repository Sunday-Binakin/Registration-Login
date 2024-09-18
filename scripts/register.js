// alert("javascript works!!!!!");
//select form by id
const registerForm = document.querySelector("#register-form");
//handle form submit event
// registerForm.onsubmit = () => {


//collect username
//collect email
//collect password
//save user information
//send confirmation email
// };
registerForm.addEventListener("submit", (event) => {
    // console.log(event.target);
    event.preventDefault();
    //collect form data
    const formData = new FormData(registerForm);
    console.log(formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    //save user information
    //send confirmation email
    //display success message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent="Account registered successfully!🥳🥳🥳";
});

//age variable
// const age = 44;
//square of age
// const squareofAge = (age) => {
//     const squaredAge = age ** 2;
//     return squaredAge;

// }
// const squaredAge = squareofAge(44);
// console.log(squaredAge);

// const fullName = (firstName, lastName) => {
// return  console(`your name is : ${firstName} + ${lastName} `);
// return  firstName  +"  "+ lastName;
// return  `${firstName} ${lastName}`;
// }
// console.log(fullName("sunday", "binakin"))
// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
// const myFullName = fullName("vincent", "kompany");
// console.log(fullName("monday", "tuesday"));
