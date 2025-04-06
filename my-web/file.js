const form = document.querySelector('form');
const fileInput = document.querySelector('.file-input');
let upload = document.querySelector('.upload-area');

form.addEventListener('click',()=>{
	
	fileInput.click();
});

fileInput.onchange = ({target})=>{
	let file = target.files[0];
	console.log(file)
	// if file selected then get file name
	let fileHTML = '';
	if(file){
	
		let fileName = file.name;
		let fileSize = file.size;
		if (fileSize < 1024){
			fileHTML = `${fileSize}kb`;
		}else if(fileSize > 1024){
			fileHTML = `${Math.floor(fileSize / 1024) / 1000}mb`
		}
		let display = `<div class="display-page">
<span class="file-name">${fileName}</span>
<span class="size">${fileHTML}</span>
 </div>
 
`
		upload.insertAdjacentHTML('beforeend',display)
	}
	console.log(fileHTML);
}



