const numbers=document.querySelectorAll(".numbers button");
const operation=document.querySelectorAll(".operation button");
const input=document.querySelector(".screen");
const equal=document.querySelector(".equal button");



for(let index=0; index<numbers.length; index++){
	numbers[index].addEventListener("click",function(e){
		document.querySelector(".warning").style.visibility="hidden";
		let current_string=input.textContent;
		let lastchar=current_string[current_string.length-1];
		input.innerHTML+=e.target.textContent;
	});
}

for(let index=0; index<operation.length; index++){
	operation[index].addEventListener("click",function(e){
		let current_string=input.textContent;
		let lastchar=current_string[current_string.length-1];
		if(lastchar==="+" || lastchar==="-" || lastchar==="*" || lastchar==="/"){
			input.innerHTML=current_string.substring(0,current_string.length-1)+e.target.textContent;
		}
		else if(current_string==0){
			document.querySelector(".warning").style.visibility="visible";
		}
		else{
			input.innerHTML+=e.target.textContent;
		}
	});
}

equal.addEventListener("click",function(){
	let current_string=input.textContent;
	let lastchar=current_string[current_string.length-1];
	if(current_string==""){
		document.querySelector(".warning").style.visibility="visible";
	}
	else if(lastchar==="+" || lastchar==="-" || lastchar==="*" || lastchar==="/"){
		document.querySelector(".warning").innerHTML="Enter your two number";
		document.querySelector(".warning").style.visibility="visible";
	}
	else{
		input.innerHTML=eval(current_string);
	}
});
