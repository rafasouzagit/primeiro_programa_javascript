let count = 0;
//adicionar evento ao clicar em botão sem o onclick
let btn= document.getElementById("menos")
let btn2= document.getElementById("adiciona")
btn.addEventListener("click",decrement)
btn2.addEventListener("click",increment)

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	if(count>10){
		count=0
	}
	CURRENT_NUMBER.innerHTML = count;
    
}

function decrement() {
	count--;
	if(count<0){
		//Para mudar a cor execute a linha abaixo
		//CURRENT_NUMBER.style.color= "red"
		count=10
	}
	CURRENT_NUMBER.innerHTML = count;
	
}

function test() {
	kdowkdpo;
}