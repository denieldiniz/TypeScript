//------------------------------------------------------
// 01 - Campos em classes

class User {
    nome!: string;
    idade!: number;
}

const usuario1 = new User();

// console.log(usuario1);

usuario1.nome = "Deniel";
usuario1.idade = 41;

// console.log(usuario1.idade);
// usuario1.profissao = "programador";  //atributo que não existe no TS mas o JS aceita mesmo assim
// console.log(usuario1.profissao);

//------------------------------------------------------
// 02 - Constructor

class NewUser {
    nome;
    idade;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const joao = new NewUser("João", 23);

// console.log(joao);
// console.log(joao.nome);
// console.log(joao.idade);

//------------------------------------------------------
// 03 - atributo readonly

class Car {
    nome;
    readonly rodas = 4;

    constructor (nome: string) {
        this.nome = nome;
    }
}

const vw = new Car("fusca");

// console.log(vw);
// vw.rodas = 3;  // nao aceita mudar rodas por ser readyonly

//------------------------------------------------------
// 04 - Herança e super

class Maquina {
    nome;

    constructor(nome: string) {
        this.nome = nome;        
    }
}

class MaquinaDestruidora extends Maquina {
    armas;

    constructor(nome: string, armas: number) {
        super(nome);
        this.armas = armas;
    }
}

const maquinaDeCostura = new Maquina("Singer");
// console.log(maquinaDeCostura);

const tanqueDeGuerra = new MaquinaDestruidora("IMBEL", 8);
// console.log(tanqueDeGuerra);

//------------------------------------------------------
// 05 - Métodos

class Aldeiao {
    nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    saudar() {
        console.log("Olá estranho!");
    }
}

const aldeiao = new Aldeiao("Tadeu");

// console.log(aldeiao);
// console.log(aldeiao.nome);
// aldeiao.saudar();
// console.log(aldeiao.saudar()); // desnecessário usar o console.log porque já é executado dentro do método

//------------------------------------------------------
// 06 - This em classes

class Caminhao {
    modelo;
    Cv;

    constructor(modelo: string, Cv: number) {
        this.modelo = modelo;
        this.Cv = Cv;
    }

    /**
     * detalhar: informa a potência de um dado modelo.
     */
    public detalhar() {
        console.log(`O modelo ${this.modelo} possui ${this.Cv}CV de potência.`);
    }
}

const volvo = new Caminhao("Volvo", 500);

console.log(volvo);
volvo.detalhar();

//------------------------------------------------------
// 07 - Getters



//------------------------------------------------------
// 08 - 

//------------------------------------------------------
// 09 - 

//------------------------------------------------------
// 10 - 

//------------------------------------------------------
// 11 - 

//------------------------------------------------------
// 12 - 

//------------------------------------------------------
// 13 - 

//------------------------------------------------------
// 14 - 

//------------------------------------------------------
// 15 - 

//------------------------------------------------------
// 16 - 

//------------------------------------------------------
// 17 - 

//------------------------------------------------------
// 18 - 

//------------------------------------------------------
// 19 - 

//------------------------------------------------------
// 20 - 