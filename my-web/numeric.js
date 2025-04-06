const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click",()=>{ 
	if(number.value == ""){
		output.innerHTML = "Please enter a valid number";
    return;
	}else if(number.value < Math.abs(-1)){
		output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  }
  if(number.value >= Math.abs(4000)){
		output.innerHTML = "Please enter a number less than or equal to 3999";
		return;
	}
	
	const romanSymbol = ["M","CM","D","CD","C","XC","L",
	"XL","X","IX","V","IV","I"];
	const romanValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	
	let romanHTML = "";
	
	for(let i = 0; i < romanValue.length; i++){
		while(number.value >= romanValue[i]){
		romanHTML += romanSymbol[i];
		number.value -= romanValue[i];
		
		}
	}
	output.innerHTML = romanHTML;
	number.value = "";
})