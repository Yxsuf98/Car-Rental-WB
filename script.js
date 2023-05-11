
  $(document).ready(function() {
    // When the login form is submitted
    $('#login-form').submit(function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the username and password values
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Check if the username and password are not empty
      if (username.trim() == '' || password.trim() == '') {
        // Display an error message
        alert('Please enter a valid username and password');
      } else {
        // Send the login credentials to the server
        $.ajax({
          url: 'login.php',
          type: 'post',
          data: {
            username: username,
            password: password
          },
          success: function(response) {
            // If the server returns a success message
            if (response == 'success') {
              // Redirect the user to the home page (or perform any other action)
              window.location.href = 'home.php';
            } else {
              // Display an error message
              alert('Invalid username or password');
            }
          },
          error: function() {
            // Display an error message
            alert('An error occurred while processing the request');
          }
        });
      }
    });
  
    // When the logout button is clicked
    $('#logout-button').click(function(event) {
      // Send a request to the server to log out the user
      $.ajax({
        url: 'logout.php',
        type: 'post',
        success: function(response) {
          // If the server returns a success message
          if (response == 'success') {
            // Redirect the user to the login page (or perform any other action)
            window.location.href = 'login.php';
          } else {
            // Display an error message
            alert('An error occurred while processing the request');
          }
        },
        error: function() {
          // Display an error message
          alert('An error occurred while processing the request');
        }
      });
    });
  });





















  const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Get the relevant elements for the selected car
    const image = box.querySelector('img').getAttribute('src');
    const year = box.querySelector('p').textContent;
    const model = box.querySelector('h3').textContent;
    const price = box.querySelector('h2').textContent;

    // Display the information about the selected car
    const carInfo = document.createElement('div');
    carInfo.innerHTML = `
      <img src="${image}" alt="${model}">
      <h3>${year} ${model}</h3>
      <h2>${price}</h2>
    `;
    const carSelection = document.querySelector('.car-selection');
    carSelection.innerHTML = '';
    carSelection.appendChild(carInfo);
  });
});
















const carsContainer = document.querySelector('.cars-container');
const editFormContainer = document.querySelector('.edit-form-container');
const editForm = document.querySelector('.edit-form');
const editButtons = document.querySelectorAll('.edit-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const saveButton = document.querySelector('.save-btn');
const cancelButton = document.querySelector('.cancel-btn');
let selectedCar;

// Show edit form when Edit button is clicked
editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const car = button.parentNode;
    const make = car.querySelector('h3').textContent;
    const year = car.querySelector('p').textContent;
    const price = car.querySelector('h2').textContent.split(' | ')[0].slice(1);
    const rentalPrice = car.querySelector('h2').textContent.split(' | ')[1].slice(1);

    editForm.querySelector('#make').value = make;
    editForm.querySelector('#year').value = year;
    editForm.querySelector('#price').value = price;
    editForm.querySelector('#rental-price').value = rentalPrice;

    selectedCar = car;
    editFormContainer.classList.add('show');
  });
});
