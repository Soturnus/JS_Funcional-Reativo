
let a = 4
console.log(a)

// Function Declaration
function bomDia(){
    console.log('Bom dia!')
}

bomDia()

// Function expression
const boaTarde = function(){
    console.log('Boa Tarde!')
}

let x = boaTarde() //undefined
console.log(x)

function somar(a, b){
    return a + b 
}

const resultado = somar(3, 4)
console.log(resultado)