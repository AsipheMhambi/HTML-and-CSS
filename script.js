
function registerUser() {
  // Get input values from the form
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform validation (you can add more validation logic here)
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return ;
  }

  if (password.length < 6  ) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Display a success message
 alert("Registration successful!\nWelcome, " + firstName + " " + lastName +" Please sign in !\n ");
}
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  bar.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu a');

  links.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      links.forEach(otherLink => otherLink.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


const scrollUpButton = document.getElementById('scrollUpButton');

 

// Show/hide the button based on scroll position

window.addEventListener('scroll', () => {

  if (window.scrollY > 500) {

      scrollUpButton.classList.add('active');

  } else {

      scrollUpButton.classList.remove('active');

  }

});

 

// this is to scroll to the top when button is clicked

scrollUpButton.addEventListener('click', () => {

  window.scrollTo({

      top: 0,

      behavior: 'smooth'

  });

});