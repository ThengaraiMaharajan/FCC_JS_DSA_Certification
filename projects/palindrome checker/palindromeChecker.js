const inputValue = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
checkButton.addEventListener("click",()=>{
  if(!inputValue.value){
    alert('Please input a value');
  }else{
    const regex = /[_!-,.\/\\\s]/g;
    let inputRaw = inputValue.value;
    console.log('raw',inputRaw);
    let inputReplace = inputRaw.replace(regex,'');
    console.log('replace',inputReplace);
    let inputSplit = inputReplace.split('');
    console.log('split',inputSplit);
    let firstLetter = inputSplit[0].toUpperCase();
    let secondLetter = inputSplit[1].toUpperCase();
    let lastBeforeLetter = inputSplit[inputSplit.length-2].toUpperCase();
    let lastLetter = inputSplit[inputSplit.length-1].toUpperCase();
    const firstTwoLetter = firstLetter+secondLetter;
    const lastTwoLetter = lastLetter+lastBeforeLetter;
    if(firstTwoLetter === lastTwoLetter){
      const resultText = document.getElementById('result');
    resultText.textContent = `${inputValue.value} is a palindrome`;
    }else{
      const resultText = document.getElementById('result');
    resultText.textContent = `${inputValue.value} is not a palindrome`;
    }
  }
});