document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[type="email"]');
  const mobileInput = document.querySelector('input[type="number"]');
  const commentInput = document.querySelector('textarea[name="comment"]');
  const submitButton = document.querySelector('.btnn');

  const handleSubmit = (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const mobile = mobileInput.value.trim();
      const comment = commentInput.value.trim();
      
      if (name && email && mobile && comment) {
          // Add your contact form submission logic here
          alert(`Thanku for Contact ${name}`);
      } else {
          alert("Please fill in all fields");
      }
  };

  submitButton.addEventListener('click', handleSubmit);
});
