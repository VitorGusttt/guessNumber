//recebo valores
const chute = document.querySelector("#userNum");
const btnSubmit = document.querySelector("#btnSubmit");
const result = document.querySelector("#result");

//sorteio num
numeroSorteado = Math.floor(Math.random() * 11);
console.log(numeroSorteado)

//adiciono sistemas de chance
let chances = 5

btnSubmit.addEventListener("click", () => {
    
    const chuteValue = Number(chute.value);


        //ver se ta certo o meu chute
        if (chuteValue == numeroSorteado){
            result.innerHTML = "Congratulation!"
        }

        else if (chuteValue > numeroSorteado){
            result.innerHTML = `the number is less`;
        }

        else {
            result.innerHTML = `the number is greater`;
        }
}
);
