const check = document.querySelector(".check-btn");
let statusShow = document.querySelector(".show-status");
let chargeIcon = document.querySelector(".charge-icon");
let batteryLevel = document.querySelector(".battery-level");
let charge = document.querySelector(".charged-status");
let percentage = document.querySelector(".percentage");
let chargeTime = document.querySelector(".time-charged");
let dischargetime = document.querySelector(".time-drained");


check.addEventListener('click',()=>{
	statusShow.style.display = 'block'
navigator.getBattery().then((battery) => {
	const chargeLevel = `Battery level : ${Math.floor(battery.level * 100)} %`;
	let chargeStatus = '';
	let timeLeft = '';
    percentage.innerHTML = `${chargeLevel}`;
	//charginstaus
	if(battery.charging){
		chargeIcon.style.display = "block";
		charge.innerHTML = `charging`;
		console.log(`battery is charging`);
	}else if(!battery.charging) {
		charge.innerHTML = `discharging`;
		console.log(`battery is discharging`)
	};
	
	//chargetime
	if(battery.chargingTime){
		if(battery.chargingTime === Infinity){
		chargeTime.innerHTML = `${Math.floor(battery.chargingTime)}\(s\)`;
		}
	}
		
	
	//dischargingTIME
	if(battery.dischargingTime){
		 dischargetime.innerHTML = `${Math.floor(battery.dischargingTime)}\(s\)`;
	}else{
		dischargetime.innerHTML = `NONE`;
		console.log(`battery is charging`)}
	})
})

