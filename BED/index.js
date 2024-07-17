document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const loginButton = document.querySelector('input[type="button"]');

  const handleInput = (event) => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      if (email && password) {
          loginButton.disabled = false;
      } else {
          loginButton.disabled = true;
      }
  };

  const login = (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      if (email && password) {
          // Add your login logic here
          alert(`Login Succesfully!`);
      } else {
          alert("Please fill in both fields");
      }
  };

  emailInput.addEventListener('input', handleInput);
  passwordInput.addEventListener('input', handleInput);
  loginButton.addEventListener('click', login);
});
