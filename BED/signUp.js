document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelectorAll('input[type="password"]')[0];
  const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];
  const signupButton = document.querySelector('.btnn');

  const handleInput = () => {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      
      if (name && email && password && confirmPassword && password === confirmPassword) {
          signupButton.disabled = false;
      } else {
          signupButton.disabled = true;
      }
  };


  const signup = (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      
      if (name && email && password && confirmPassword && password === confirmPassword) {
          // Add your sign-up logic here
          alert(`Hello ${name} Welocome to the Real world ('-')`);
      } else {
          alert("Please fill in all fields correctly");
      }
  };

  nameInput.addEventListener('input', handleInput);
  emailInput.addEventListener('input', handleInput);
  passwordInput.addEventListener('input', handleInput);
  confirmPasswordInput.addEventListener('input', handleInput);
  signupButton.addEventListener('click', signup);
});
