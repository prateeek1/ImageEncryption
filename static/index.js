const dropZone=document.querySelector(".drop-zone");

const fileinput=document.querySelector("#fileinput");
const browseBtn=document.querySelector(".browseBtn");
dropZone.addEventListener("dragover",(e)=>{
	e.preventDefault()
	console.log("grog");
	if(!dropZone.classList.contains("dragged"))
	{
	 dropZone.classList.add("dragged")
    }
});
let file;
dropZone.addEventListener("dragleave",()=>{
	
	dropZone.classList.remove("dragged");
});


dropZone.addEventListener("drop",(event)=>{
	event.preventDefault()
	
	//dropZone.classList.remove("dragged");
	file=event.dataTransfer.files[0];
	display();
});

function display()
{
	//console.log("ofv");
	let fileType=file.type;
	//console.log(fileType);
	let filereader=new FileReader();
	
	//console.log(filereader);
	filereader.onload=()=>{
		let fileURL=filereader.result;
		//console.log(fileURL)
		let imgTag=`<img src="${fileURL}" alt="">`;
		dropZone.innerHTML=imgTag;
        
	}
	filereader.readAsDataURL(file);
};


// browseBtn.addEventListener("click",()=>{
// 	fileinput.click()
// });

browseBtn.onclick=()=>{
	fileinput.click();
}

fileinput.addEventListener('change',function(){

	file=this.files[0];
	//dropArea.classList.add('active');
	display();
});


// const dropArea=document.querySelector('.drag-area');
// const dropText=document.querySelector('.header');
// let button=dropArea.querySelector('.button');
// let input=dropArea.querySelector('input');
// let file;

// dropArea.addEventListener('dragover',(event)=>{
// 	event.preventDefault();
// dropArea.classList.add('active');
// dragText.textContent='Release to Upload';
// });


// dropArea.addEventListener('dragleave',()=>{
// 	dropArea.classList.remove('active');
// 	dragText.textContent='Drag & Drop';
// });


// dropArea.addEventListener('drop',(event)=>{
// 	event.preventDefault();

// 	file=event.dataTransfer.files[0];
// 	displayFile();
// });

// function displayFile()
// {
// 	let fileType=file.type;

// 		let fileReader=new FileReader();
// 		fileReader.onload=()=>{
// 			let fileURL=fileReader.result;
// 			let imgTag=`<img src="${fileURL}" alt="">`;
// 			dropArea.innerHTML=imgTag;
// 		};
// 		fileReader.readAsDataURL(file);

// }

// button.onclick=()=>{
// 	input.click();
// }

// input.addEventListener('change',function(){
// 	file=this.files[0];
// 	dropArea.classList.add('active');
// 	//displayFile();
// });



