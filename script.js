const textAreaReference = document.getElementById('textarea');
// console.log(textAreaReference);

const totalCounterReference = document.getElementById('totalcounter');
// console.log(totalCounterReference);

const remainingCounterReference = document.getElementById('remainingcounter');
// console.log(remainingCounterReference);

textAreaReference.addEventListener('keyup', (e) => {
  const inputText = e.target.value;
  const maxLength = textAreaReference.getAttribute('maxlength');
  
//   console.log(inputText);
const inputTextLength = inputText.length;
const remainingCharacter = maxLength - inputTextLength;

totalCounterReference.innerText = inputTextLength;
remainingCounterReference.innerText = remainingCharacter;
});
