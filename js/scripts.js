var elForm = document.querySelector('.js-form');
var elInput = elForm.querySelector('.js-input');
var elBtn = elForm.querySelector('.js-btn');
var elOutput =elForm.querySelector('.js-warning-output');
var compNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
var elUrinishlarSoni = elForm.querySelector('.js-urinishlar-soni');
var elUrinishlarOutputArray = elForm.querySelector('.js-urinishlar');
var UrinishlarSoniO = 6;
var arrrey = [];

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var elUserNumber = Number(elInput.value);

  //user togri topsa
  if(elUserNumber === compNumber){
    elInput.disabled = true;
    elBtn.disabled = true;
    elOutput.textContent = `Topdingiz!!!`;
    return;
  }

  // imkoniyatlar soni
  elUrinishlarSoni.textContent = --UrinishlarSoniO;
  if(UrinishlarSoniO === 0) {
    elInput.disabled = true;
    elBtn.disabled = true;
    elOutput.textContent = 'Qayta Urinib Koring...';
    return;
  }



  elUrinishlarOutputArray.classList.add('h4');

  // array
  arrrey.push(elUserNumber);
  elUrinishlarOutputArray.textContent = arrrey.join(', ');

  elOutput.classList.add('h4', 'text-danger');


  if(elUserNumber > compNumber) {
    elOutput.textContent = "Kichikroq son kiriting";
  }else if (elUserNumber < compNumber) {
    elOutput.textContent = "Kottaro son kiriting";
  }else if ( elUserNumber === compNumber) {
    elOutput.textContent = "Topdingiz";
  }
});
