const input = document.getElementById("text-input");
const result = document.getElementById("result");
const check = document.getElementById("check-btn");

check.addEventListener("click",() => {
  const output = input.value;

 if (input.value === '') {
    alert('Please input a value');
     result.innerHTML = "";
    return;
  }

  // Remove the previous result
  result.innerHTML = "";

  const lowerCaseStr = output.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `${output} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;
   result.innerHTML = resultMsg;
   input.value = ""
  })