// THEME CHANGE
document.addEventListener("DOMContentLoaded", () => {
    const sunIcon = document.getElementById("sun");
    const moonIcon = document.getElementById("moon");

    // set theme and change icon
    const setTheme = (theme) => {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
            sunIcon.classList.remove("selected");
            moonIcon.classList.add("selected");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            sunIcon.classList.add("selected");
            moonIcon.classList.remove("selected");
            localStorage.setItem("theme", "light");
        }
    };

    // start theme (light)
    const initializeTheme = () => {
        const currentTheme = localStorage.getItem("theme") || "light";
        setTheme(currentTheme);
    };

    // sun and moon icons clickable
    sunIcon.addEventListener("click", () => setTheme("light"));
    moonIcon.addEventListener("click", () => setTheme("dark"));

    initializeTheme();
});


// PRODUCTS
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll("#products section[id^='product']");
    const buttons = document.querySelectorAll("#switcherButtons button");

    // display the selected product
    const showProduct = (productId) => {
        products.forEach((product) => {
            // show  selected product, hide others
            if (product.id === productId) {
                product.classList.remove("hiddenItem");
                product.classList.add("currentItem");
            } else {
                product.classList.remove("currentItem");
                product.classList.add("hiddenItem");
            }
        });
    };

    // listeners for buttons
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = `product${button.id.slice(-1)}`;
            showProduct(productId);
        });
    });

    // display default product first
    showProduct("product1");
});


// GUESSING GAME
document.getElementById("guessGame").addEventListener("click", function (event) {
    event.preventDefault();

    // get the user's guess
    const userGuessInput = document.getElementById("numGuess");
    const userGuess = parseInt(userGuessInput.value);

    // get the output elements
    const gameOutput = document.getElementById("gameOutput");
    const userNumDisplay = document.getElementById("userNum");
    const randomNumDisplay = document.getElementById("randomNum");

    // validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 11) {
        gameOutput.textContent = "Please enter a valid number between 1 and 11!";
        gameOutput.style.color = "red";
        gameOutput.style.backgroundColor = "white";
        return;
    }

    // random number between 1 and 11
    const randomNumber = Math.floor(Math.random() * 11) + 1;

    // show user's guess and random number
    userNumDisplay.textContent = `Your Guess: ${userGuess}`;
    randomNumDisplay.textContent = `Winning Number: ${randomNumber}`;

    // check if the guess matches the random number
    if (userGuess === randomNumber) {
        gameOutput.textContent = "Congratulations! You guessed the winning number and won a KitKat!";
        gameOutput.style.color = "green";
        gameOutput.style.backgroundColor = "white";
    } else {
        gameOutput.textContent = "Oops! Better luck next time. Try again!";
        gameOutput.style.color = "blue";
        gameOutput.style.backgroundColor = "white"; 
    }

    userGuessInput.value = "";
});


// CONTACT FORM
function validateForm(event) {
    event.preventDefault();

    // inputs
    let fullName = document.getElementById("fullName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let prefPhone = document.getElementById("prefPhone");
    let prefEmail = document.getElementById("prefEmail");

    let coms = document.getElementById("coms");
    let confirm = document.getElementById("confirm");

    // hide the output
    coms.classList.add("hidden");

    // hide the confirmation output
    confirm.classList.add("hidden");

    // save preferred method for output
    let pref = "";

    // the regular expressions
    let fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let phoneRegex = /^\d{10}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    // reset the border styles
    fullName.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    message.classList.remove("error");

    // hide any previous error messages
    fullName.nextElementSibling.classList.add("hidden");
    phone.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    message.nextElementSibling.classList.add("hidden");

    coms.innerHTML = "";
    confirm.innerHTML = "";

    let isValid = true;

    // full name validate
    if (!fullNameRegex.test(fullName.value)) {
        isValid = false;
        fullName.classList.add("error");
        fullName.nextElementSibling.classList.remove("hidden");
    }

    // phone number validate
    if (!phoneRegex.test(phone.value)) {
        isValid = false;
        phone.classList.add("error");
        phone.nextElementSibling.classList.remove("hidden");
    }

    // email validate
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add("error");
        email.nextElementSibling.classList.remove("hidden");
    }

    // contact pref
    if (prefPhone.checked) {
        pref = "Phone";
        coms.classList.remove("hidden");
    } else if (prefEmail.checked) {
        pref = "Email";
        coms.classList.remove("hidden");
    }

    // check message field is not empty
    if (message.value.trim() === "") {
        isValid = false;
        message.classList.add("error");
        message.nextElementSibling.classList.remove("hidden");
        message.nextElementSibling.textContent = "Don't be shy, tell us a joke or something!";
    }

    // if form is valid display user's info
    if (isValid) {
        confirm.classList.remove("hidden");

        // display the user's input
        confirm.innerHTML = `<strong>You Entered:</strong> <br> 
            Full Name: ${fullName.value}<br>
            Phone Number: ${phone.value}<br>
            Email: ${email.value}<br>
            Preferred Contact: ${pref}
            Message: ${message.value}`;
            ;

        // submit form
        document.getElementById("form").submit();

        // reset values
        fullName.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
        prefPhone.checked = true;
        prefEmail.checked = false;
    }
}

// listener for form submission
document.getElementById("form").addEventListener("submit", validateForm);
