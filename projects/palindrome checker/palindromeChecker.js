const inputValue = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');
checkButton.addEventListener("click",()=>{
  if(!inputValue.value){
    alert('Please input a value');
  }else{
    const regex = /[_!--,.:\/\\\s]/g;
    let inputRaw = inputValue.value;
    let inputProcessed = inputRaw.replace(regex,'').toLowerCase().split('').join();
    console.log('Input',inputRaw);
    let reversedProcessedInput = inputRaw.replace(regex,'').toLowerCase().split('').reverse().join();
    console.log('reversed',reversedProcessedInput);
      if(inputProcessed === reversedProcessedInput){
        resultText.textContent = `${inputValue.value} is a palindrome`;
      }else{
        resultText.textContent = `${inputValue.value} is not a palindrome`;
      }
    
  }
});