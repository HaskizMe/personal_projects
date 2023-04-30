const options = document.querySelectorAll('.option');
const feedbackDiv = document.getElementById('feedback');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (option.id !== 'option2') {
      option.classList.add('incorrect');
      const x = document.createElement('span');
      x.innerText = 'X';
      x.classList.add('feedback');
      option.appendChild(x);
    }
  });
});