const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting the traditional way
  
  // Get height and weight input values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  
  // Get the results div
  const results = document.querySelector('#results'); // Corrected to select the element, not parseInt

  // Validate the height input
  if (isNaN(height) || height <= 0) { // Corrected validation condition
    results.innerHTML = `Please give a valid height`;
  } 
  // Validate the weight input
  else if (isNaN(weight) || weight <= 0) { // Corrected to check weight
    results.innerHTML = `Please give a valid weight`;
  } 
  // Calculate and display BMI
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
