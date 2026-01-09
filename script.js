const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const signupCard = document.getElementById('signup-card');
const successCard = document.getElementById('success-card');

const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');

const isValidEmail = (email) =>{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}

newsletterForm.addEventListener('submit', (e) =>{
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if(!isValidEmail(emailValue)){
    emailInput.classList.add('error');
    emailError.textContent = 'Valid email required';
  } else {
    userEmailSpan.textContent = emailValue;
    signupCard.classList.add('hidden');
    successCard.classList.remove('hidden');

    console.log('Form submitted successfully with:', emailValue);
  }
})

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('error');
  emailError.textContent = '';
});

dismissBtn.addEventListener('click', () => {
  successCard.classList.add('hidden');
  signupCard.classList.remove('hidden');
  emailInput.value = ''; 
});