const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
    // console.log(event.target);
    event.preventDefault();
    //collect form data
    const formData = new FormData(loginForm);
    console.log(formData.get('username'),
        // formData.get('email'),
        formData.get('password')
    );
    //save user information
    //send confirmation email
    //display success message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent="logged in successfully!🥳🥳🥳";
});