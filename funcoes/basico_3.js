/********** arrow function *************************/

const funcaoTeste = () => console.log('Teste')

funcaoTeste()

/****************************************************/
console.log()
/****************************************************/
const saudacao = (nome) => `Fala ${nome}, beleza!?!`

console.log(saudacao('Zezé'))

/****************************************************/
console.log()
/****************************************************/
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    console.log(typeof numeros)
    let total = 0 
    for(let n of numeros) {
        total += n
    }
    return total
}

const substrair = (a, b) => a - b

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(substrair(5, 2))

/****************************************************/
console.log()
/****************************************************/

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(3))

/****************************************************/
console.log()
/****************************************************/

// This 
Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.log()
numeros.ultimo()
numeros.primeiro()
