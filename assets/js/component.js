const buttons = document.querySelectorAll('.numberBtns button');
const resultText = document.querySelector('.resultText');
const submitBtn = document.querySelector('.submitBtn');
const scoringScreen = document.querySelector('.scoringScreen');
const feedbackScreen = document.querySelector('.feedbackScreen');

 let selectedNumber = "";

  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', function() {
  //     selectedNumber = buttons[i].textContent; 
  //   });
  // }

  for (const btn of buttons) {
    btn.addEventListener('click', function() {
      selectedNumber = btn.innerText;
    })
  }

  const submitButton = document.querySelector('.submitBtn');

  submitButton.addEventListener('click', function() {
    if (selectedNumber) {
      resultText.innerText = `You selected ${selectedNumber} out of 5`;
      feedbackScreen.classList.remove('disable');
      scoringScreen.classList.add('disable');
    } else {
      alert('Please select a rating before submitting.');
    }
  });