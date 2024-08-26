const form = document.querySelector('.calculator');
const totalRecebidas = form.querySelector('#total-recebidas');
const abandonadas = form.querySelector('#abandono');
const calcButton = form.querySelector('.calc-button');
const resultWrapper = form.querySelector('.result-wrapper');
const displayResult = form.querySelector('.result');
var calcResult; 
const copyBtn = form.querySelector('.copy-btn');
let isFormValid;

const originalText = copyBtn.textContent;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
  if (isFormValid == true) {
    calcularTaxa(abandonadas.value, totalRecebidas.value);
  }
})

function validateForm() {
  if (totalRecebidas.value === '' || abandonadas.value === '') {
    isFormValid = false;
  } else {
    isFormValid = true;
  }
}

function calcularTaxa(aband, receb) {
  calcResult = aband / receb * 100;
  displayResult.innerHTML = `${calcResult.toFixed(2)}%`;
  resultWrapper.classList.remove('hidden');
}

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(`${calcResult.toFixed(2)}%`)

  copyBtn.textContent = 'COPIADO!';

  setTimeout(() => {
    copyBtn.textContent = originalText;
  }, 2000);

});



