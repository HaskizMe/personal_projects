const options = document.querySelectorAll('.default-button');
const feedbackDiv = document.getElementById('feedback');
let incorrect_counter = 0

options.forEach(option => {
  option.addEventListener('click', () => {
    if (option.id !== 'b3') {
      option.classList.add('incorrect');
      const x = document.createElement('span');
      x.innerText = ' X';
      x.classList.add('feedback');
      option.appendChild(x);
      option.disabled = true;
      incorrect_counter++;
    }
    else{
        option.classList.add('correct');
        const x = document.createElement('span');
        x.innerText = ' \u2713';
        x.classList.add('feedback');
        option.appendChild(x);
        option.disabled = true;
        if(incorrect_counter > 1){
            alert('Wow you got ' + incorrect_counter + ' wrong you kinda suck but its alright because youll get it next time.')
        }
        else{
            alert('Ok youre good I admit')
        }
        // console.log(incorrect_counter)
        // alert('you got ' + incorrect_counter + ' Incorrect!');
        return;
    }

  });
});
