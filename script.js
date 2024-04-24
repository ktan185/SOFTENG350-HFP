// Function to open the sign-up form
function openForm() {
  var signUpForm = document.getElementById('signUpForm');
  signUpForm.style.display = 'block'; // Display the form

  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

}

// Function to close the sign-up form
function closeForm() {
  var signUpForm = document.getElementById('signUpForm');
  signUpForm.style.display = 'none';

  var overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.remove(); 
  }
}
