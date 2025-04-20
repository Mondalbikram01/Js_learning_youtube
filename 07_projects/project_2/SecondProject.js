/* when you use submit the all data goes to server by default . to stop the process you need to use a method called preventdefault*/
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
  
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML= `please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML= `please give a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);//formula of bmi calculation but it is modified
    results.innerHTML=`<span>${bmi}</span>`
  }
})
