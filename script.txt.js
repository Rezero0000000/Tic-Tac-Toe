// let player = prompt("Masukan nama");
alert('hh')
const p1Name = document.querySelector(".p1Name");

// if (player) {
// 	p1Name.innerHTML = `${player} : [X]`
// }else{
	p1Name.innerHTML = `PLAYER : [X]`
//}

let pemain = "X"
const kolom1 = document.querySelector('.kolom1')
const kolom2 = document.querySelector('.kolom2')
const kolom3 = document.querySelector('.kolom3')
const kolom4 = document.querySelector('.kolom4')
const kolom5 = document.querySelector('.kolom5')
const kolom6 = document.querySelector('.kolom6')
const kolom7 = document.querySelector('.kolom7')
const kolom8 = document.querySelector('.kolom8')
const kolom9 = document.querySelector('.kolom9')

let scoreX = 0
let scoreO = 0


 function newGame(){
 	scoreO = 0
 	scoreX = 0
 	document.querySelector(".scoreO").innerHTML = scoreO
 	document.querySelector(".scoreX").innerHTML = scoreX
 	resetGame()
 }



function tombol(x){

		if (document.querySelector(".kolom" + x).innerText == "X"|| document.querySelector(".kolom" + x).innerText == "O") 
			{
		}else{
			document.querySelector(".kolom"+x).innerHTML = pemain;
			if (pemain == "X") {
				
				let menang = cekPemenang()
				if(menang == true){
					scoreX += 1
		 		document.querySelector(".scoreX").innerHTML = scoreX

				}else if(menang == "seri"){
					pemain = "X"
				}else{
					pemain = "O"
				}
			}else if (pemain == "O"){
				
				let menang = cekPemenang()
				if(menang == true){
					scoreO += 1
		 		document.querySelector(".scoreO").innerHTML = scoreO	
			  }else if(menang == false) {
				document.querySelector(".kolom"+x).classList.toggle("hijau")
				pemain ="X"
			}
		}
	}
}

 function cekPemenang(){

if (kolom1.textContent && kolom2.textContent &&
 	kolom3.textContent &&kolom4.textContent &&
 	kolom5.textContent &&kolom6.textContent &&
 	kolom7.textContent &&kolom8.textContent &&
 	kolom9.textContent ) {
 		
 	resetGame()
 	return "seri"
 }

 //horizontal

 	if (kolom1.innerText == pemain && kolom2.innerText == pemain && kolom3.innerText == pemain) {
 		menang()
 		return true;
 	} else if (kolom4.innerText == pemain && kolom5.innerText == pemain && kolom6.innerText == pemain){
 		menang()
 		return true;
 	}else if (kolom7.innerText == pemain && kolom8.innerText == pemain && kolom9.innerText == pemain){
 		menang()
 		return true;
 	}

 //vertikal

 	else if (kolom1.innerText == pemain && kolom4.innerText == pemain && kolom7.innerText == pemain){
 		menang()
 		return true;
 	}else if (kolom2.innerText == pemain && kolom5.innerText == pemain && kolom8.innerText == pemain){
 		menang()
 		return true;
 	}else if (kolom3.innerText == pemain && kolom6.innerText == pemain && kolom9.innerText == pemain){
 		menang()
 		return true;
 	}

 //nyilang

 	else if (kolom1.innerText == pemain && kolom5.innerText == pemain && kolom9.innerText == pemain){
 		menang()
 		return true;
 	}else if (kolom3.innerText == pemain && kolom5.innerText == pemain && kolom7.innerText == pemain){
 		menang()
 		return true;
 	}else{
 		return false;
 	}


 }

 function menang(){
 	
 	alert("menang")
 	resetGame()
 }

 function reset(x){
	document.querySelector(".kolom"+x).innerHTML = "";
	if( kolom1.classList.contains("hijau") ||
		kolom2.classList.contains("hijau") ||
		kolom3.classList.contains("hijau") ||
		kolom4.classList.contains("hijau") ||
		kolom5.classList.contains("hijau") ||
		kolom6.classList.contains("hijau") ||
		kolom7.classList.contains("hijau") ||
		kolom8.classList.contains("hijau") ||
		kolom9.classList.contains("hijau") 
	 ){
		document.querySelector(".kolom" + x).classList.remove("hijau")
	}
 }

  function resetGame(){
 	 for (let i = 1; i <= 9; i++) {
 		reset(i)
 	}
 }


 document.querySelector(".scoreO").innerHTML = scoreO
 document.querySelector(".scoreX").innerHTML = scoreX


