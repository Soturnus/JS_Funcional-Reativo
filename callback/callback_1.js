
function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const substrairNoTerminal = (x, y) => console.log(x - y)
const subtrair = (w, z) => w - z 

exec(somarNoTerminal, 56, 38)
exec(substrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

// set interval roda a cada (segundo parametro milisegundos) a função
const cb = () => console.log('Exec...')
setInterval(cb, 1000)