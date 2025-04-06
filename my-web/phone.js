const input = document.getElementById("input");
const output = document.getElementById("output")
const validator = document.getElementById("cheacker");
const clear = document.getElementById("clear"); 
const display = input.value;
const telephone = () => {
const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
const display = input.value;

if(input.value.match(regex)){
	output.innerHTML =` valid us number: ${display}`;
	output.style.color = '#00471b';
	return true;
	}else if(input.value == ""){
	alert('please provide a phone number')
	output.innerHTML = "";
}else{
		output.innerHTML =`invalid us number: ${display}`;
		output.style.color = '#4d3800';
		return false;
}
	
}

validator.addEventListener("click",telephone );
clear.addEventListener("click",() => {
	input.value = "";
	output.innerHTML = "";
})
