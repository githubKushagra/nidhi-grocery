let islightmode = false;
let brightness_button = document.getElementById("brightness-btn");
let body = document.getElementById("body");
let header = document.querySelector(".header");
let search_bar = document.getElementById("search-bar");
let below_header_navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
let icon = brightness_button.querySelector("i");
let company_logo = document.querySelector(".company-logo .image");

let bank_offer = document.getElementById("bank-offer");
let best_seller = document.getElementById("best-seller");
let my_smart_basket = document.getElementById("my-smart-basket")

let section_4 = document.querySelector("#section4");
let section_5 = document.querySelector("#section5");
let section_6 = document.querySelector("#section6");
let section_7 = document.querySelector("#section7");
let section_8 = document.querySelector("#section8");

document.addEventListener("DOMContentLoaded", function() {
    brightness_button.addEventListener("click", () => {
        if (!islightmode) {
            // Change to light mode
            body.style.backgroundColor = "#FFFFFF";
            // body.style.color = "#000000";
            header.style.backgroundColor = "#34495e";
            header.style.color = "#000000";
            search_bar.style.backgroundColor = "#F8F9FA";
            search_bar.style.color = "#000000";
            below_header_navbar.style.backgroundColor = "#FFFFFF";
            below_header_navbar.style.color = "#000000";
            navbarLinks.forEach(link => {
                link.style.color = "#000000";
            });
            // Add more styling changes here for light mode
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            company_logo.style.backgroundColor = "#FFFFFF";

            bank_offer.style.color = "#000000";


            section_4.style.backgroundColor = "#34495e";
            section_5.style.backgroundColor = "#F7F7F7";
            section_6.style.backgroundColor = "#34495e";
            section_7.style.backgroundColor = "#F7F7F7";
            section_8.style.backgroundColor = "#F7F7F7";
            section_8.style.color = "#000000";

            

            islightmode = true;
        } else {
            // Change to dark mode
            body.style.backgroundColor = "#131417";
            // body.style.color = "#FFFFFF";

            header.style.backgroundColor = "#222221";
            header.style.color = "#FFFFFF";

            search_bar.style.backgroundColor = "#3c3c3c";
            search_bar.style.color = "#FFFFFF";

            below_header_navbar.style.setProperty('background-color', '#222221', 'important');
            below_header_navbar.style.color = "#FFFFFF";

            navbarLinks.forEach(link => {
                link.style.color = "#FFFFFF";
            });
            // Add more styling changes here for dark mode
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            company_logo.style.backgroundColor = "#FFFFFF";

            best_seller.style.color = "#FFFFFF";
            my_smart_basket.style.color = "#FFFFFF";
            bank_offer.style.color = "#FFFFFF";

            section_4.style.backgroundColor = "#222221";
            section_5.style.backgroundColor = "#222221";
            section_6.style.backgroundColor = "#222221";
            section_7.style.backgroundColor = "#222221";
            section_8.style.backgroundColor = "#222221";
            section_8.style.color = "#FFFFFF";

            islightmode = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.classList.add("hovered");
        });
        link.addEventListener("mouseleave", function() {
            this.classList.remove("hovered");
        });
    });
});





// - - - - - - - - - - - - - - - - - - - - - - -code for search bar - - - - - - - - - - - - - - - - - - - - - - -  - -

// as i already have search_bar variable above so use it
search_bar.addEventListener("keydown" , function(event) {
    // Check if the pressed key is 'Enter' (key code 13)
    if(event.keyCode === 13) {
        // Get the value entered by the user
        const searchTerm = search_bar.value.toLowerCase().trim();

        // Redirect the user to the corresponding HTML page based on the search term
        switch (searchTerm) {
            case 'home':
                window.location.href = 'index.html';
                break;
            case 'tea':
                window.location.href = 'tea.html';
                break;
            // Add cases for other search terms and corresponding HTML pages
            case 'bakery':
                window.location.href = 'bakery.html';
                break;
            case 'kirana':
                    window.location.href = 'kirana.html';
                break;
            case 'refined':
                    window.location.href = 'refined_oil.html';
                break;
            case 'oil':
                    window.location.href = 'refined_oil.html';
                break;
            case 'fruits':
                    window.location.href = 'exotic_fruits_vegetables.html';
                break;
            case 'vegetables':
                    window.location.href = 'exotic_fruits_vegetables.html';
                break;
            default:
                // If no matching page is found, do nothing or display an error message
                alert('No matching page found for the search term.');
                console.log('No matching page found for the search term.');
                break;
        }
    }
});



// - - - - - - - - - - - - - - - - - - - - - - -code for search bar - - - - - - - - - - - - - - - - - - - - - - -  - -






// - - - - - - - - - - - - - - - - - - - - - - -code for Cart - - - - - - - - - - - - - - - - - - - - - - -  - -



let cart = [];


// Function to initialize the cart from local storage
function initializeCart() {
    // Retrieve cart data from local storage
    const storedCart = localStorage.getItem('cart');
    // Parse the stored cart data or initialize an empty array if no data is found
    cart = storedCart ? JSON.parse(storedCart) : [];
}

// Initialize the cart when the page loads
initializeCart();

// Function to update the cart in local storage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Assume you have an "Add" button for each item with a class "add-to-cart-button"
let addItemButtons = document.querySelectorAll('.add-to-cart-button');
addItemButtons.forEach(button => {
    button.addEventListener('click', function() {
        let itemId = button.dataset.id;
        let itemName = button.dataset.name;
        let itemPrice = parseFloat(button.dataset.price);

        
        // Add the item to the cart array
        let item = { id: itemId, name: itemName, price: itemPrice, quantity: 1 };
        addToCart(item);

        // Show alert message when an item is added to the cart
        alert(`Item with ID ${itemId} and name ${itemName} is added to the cart.`);

        // Log cart contents to the console
        console.log("Cart contents:", cart);

        // Update the cart in local storage
        updateLocalStorage();
        // let total_amount = calculateTotalPayment(cart);
        // console.log(total_amount);
        // document.getElementById("payment-total-amount").innerText = "";
        // document.getElementById("payment-total-amount").innerText = total_amount;
    });
});




// Function to add an item to the cart
function addToCart(item) {
    // Check if the item is already in the cart
    let existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.quantity += 1;
    } else {
        // If the item is not in the cart, add it
        cart.push(item);
    }

}





document.getElementById('clear-cart-button').addEventListener('click', function() {
    // Call the clearCart function when the button is clicked
    clearCart();
});


// Function to clear the cart
function clearCart() {
    // Clear the cart array
    cart = [];

    // Update the cart display after clearing the cart
    // updateCart();

    // Also, update the cart data in local storage
    updateLocalStorage();

}


// Function to calculate the total payment
// function calculateTotalPayment(cart) {
//     let total = 0;
//     for (let item of cart) {
//         total += item.price * item.quantity;
//     }
//     return total.toFixed(2); // Return the total payment rounded to 2 decimal places
// }
document.getElementById("place-order-now").addEventListener("click", () => {
    console.log("clicked")
})

document.getElementById('place-order-now').addEventListener('click' , () => {
    console.log("in place order")
    let total = 0.0;
    console.log("in place order")
    // alert("hi")
    for(let item of cart) {
        total += item.price * item.quantity;
        console.log(item.price);
    }
    const pay_amount = document.getElementById('pay-total-amount');
    console.log("total " + total);
    pay_amount.innerHTML = "";
    pay_amount.innerHTML = total;
})


// document.getElementById('go-to-payment-page').addEventListener('click', function() {
//     // Calculate total payment
//     let totalPayment = calculateTotalPayment();

//     // Check if totalPayment is a number
//     if (typeof totalPayment === 'number') {
//         // Store total payment value in localStorage
//         localStorage.setItem('totalPayment', totalPayment.toFixed(2));

//         // Redirect to payment.html
//         window.location.href = 'payment.html';
//     } else {
//         console.error('Total payment is not a valid number.');
//     }
// });
// - - - - - - - - - - - - - - - - - - - - - - -code for Cart - - - - - - - - - - - - - - - - - - - - - - -  - -








// - - - - - - - - - - - - - - - - - - - - - - -code for Contact us page - - - - - - - - - - - - - - - - - - - - - - -  - -



// - - - - - - - - - - - - - - - - - - - - - - -code for Contact us page - - - - - - - - - - - - - - - - - - - - - - -  - -
