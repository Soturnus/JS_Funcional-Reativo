function bomDia(){
    console.log('Bom dia!!!!!!')
}

const boaTarde = function(){
    console.log('Boa Tarde!!!!!')
}

// 1) Passar uma função como parametro para outra função
function executarQualquqerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
    //console.log(typeof fn)
    //fn()
}

executarQualquqerCoisa(3) //nao é uma function
executarQualquqerCoisa(bomDia)
executarQualquqerCoisa(boaTarde)

// 2) Retornar uma função a parti de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)
