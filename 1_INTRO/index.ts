const nome      = 'Deniel';
const sobrenome = 'Rocha Diniz';
const formado   = true;

function ola(nome: String) {
    console.log('Olá ' + nome);
}

ola(nome);
// ola(String(formado));

function soma(val1: number, val2: number) {
    console.log(val1 + val2);
    
}

soma(2,3);