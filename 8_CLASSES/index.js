"use strict";
//------------------------------------------------------
// 01 - Campos em classes
class User {
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
}
const joao = new NewUser("João", 23);
// console.log(joao);
// console.log(joao.nome);
// console.log(joao.idade);
//------------------------------------------------------
// 03 - atributo readonly
class Car {
    constructor(nome) {
        this.rodas = 4;
        this.nome = nome;
    }
}
const vw = new Car("fusca");
// console.log(vw);
// vw.rodas = 3;  // nao aceita mudar rodas por ser readyonly
//------------------------------------------------------
// 04 - Herança e super
class Maquina {
    constructor(nome) {
        this.nome = nome;
    }
}
class MaquinaDestruidora extends Maquina {
    constructor(nome, armas) {
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
    constructor(nome) {
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
    constructor(modelo, Cv) {
        this.modelo = modelo;
        this.Cv = Cv;
    }
    /**
     * detalhar: informa a potência de um dado modelo.
     */
    detalhar() {
        console.log(`O modelo ${this.modelo} possui ${this.Cv}CV de potência.`);
    }
}
const volvo = new Caminhao("Volvo", 500);
// console.log(volvo);
// volvo.detalhar();
//------------------------------------------------------
// 07 - Getters
// cria classe Pessoa com construtor
// cria get nome completo
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return `A pessoa se chama ${this.nome} ${this.sobrenome}`;
    }
}
const pessoa1 = new Pessoa("Deniel", "Rocha Diniz");
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.nomeCompleto);
//------------------------------------------------------
// 08 - Setters
class Coordenada {
    set alterarX(v) {
        if (v <= 0) {
            console.log(`Você tentou mudar o valor de X para ${v} mas não pode ser menor que 1`);
            return;
        }
        else {
            this.x = v;
            console.log(`o valor de X é ${lugar.x}`);
        }
    }
    set alterarY(v) {
        if (v <= 0) {
            console.log(`Você tentou mudar o valor de X para ${v} mas não pode ser menor que 1`);
            return;
        }
        else {
            this.y = v;
            console.log(`o valor de Y é ${lugar.y}`);
        }
    }
}
const lugar = new Coordenada();
class PostBlog {
    constructor(titulo) {
        this.titulo = titulo;
    }
    tituloManchete() {
        return `O titulo do post é: ${this.titulo}`;
    }
}
const postagem = new PostBlog("Notícia Urgente");
// console.log(postagem.tituloManchete());
//----------------- outra classe implementando MostraTitulo
class TesteInterface {
    constructor(novoTitulo) {
        this.novoTitulo = novoTitulo;
    }
    tituloManchete() {
        return `O novo titulo é: ${this.novoTitulo}`;
    }
}
const novaPostagem = new TesteInterface("Novo título para a postagem.");
// console.log(novaPostagem.tituloManchete());
//------------------------------------------------------
// 10 - Override de métodos
// cria classe com um metodo
// cria outra classe extendendo a primeira sobrescrevendo o metodo (testando antes e depois)
class classePai {
    metodoEscrever(textoInserido) {
        this.texto = textoInserido;
        console.log(`Escrevendo a partir da classe pai: ${this.texto}`);
    }
}
class ClasseFilha extends classePai {
    metodoEscrever(textoInserido) {
        this.texto = textoInserido;
        console.log(`Escrevendo a partir da classe filha: ${this.texto}`);
    }
}
// usando a classe pai
const pai = new classePai;
// pai.metodoEscrever("Mensagem recebida na classe Pai.");
// usando a classe filha
const filha = new ClasseFilha;
// filha.metodoEscrever("Mensagem recebida na a classe Filha.");
//------------------------------------------------------
// Visibilidade
// public       << todos acessam
// protected    << subclasses acessam 
// private      << somente a própria classe acessa
//------------------------------------------------------
// 11 - Public
// atributo da classe pai acessível como se fosse do próprio contexto
class A {
    constructor() {
        this.atributo = 10;
    }
}
class B extends A {
}
const instanciaDeB = new B();
// console.log(`Atributo public: ${instanciaDeB.atributo}`);
//------------------------------------------------------
// 12 - Protected
// atributo da classe pai so acessivel via metodo
class C {
    constructor() {
        this.atributo = 20;
    }
    getAtributo() {
        return this.atributo;
    }
    metodoProtegido() {
        return "Mensagem enviada por método protegido da classe C chamado por método publico da classe D.";
    }
}
class D extends C {
    executaMetodoProtegido() {
        return this.metodoProtegido();
    }
}
const instanciaDeD = new D();
// console.log(`Atributo protected: ${instanciaDeD.getAtributo()}`);
// console.log(instanciaDeD.executaMetodoProtegido());
//------------------------------------------------------
// 13 - Private
class E {
    constructor() {
        this.atributo = 30;
    }
    mostrarAtributo() {
        return this.atributo;
    }
}
const instanciaDeE = new E();
// console.log(`Atributo private em E: ${instanciaDeE.mostrarAtributo()}`);
class F extends E {
    mostrarAtributoDaPai() {
        return this.mostrarAtributo() * 2;
    }
}
const instanciaDeF = new F();
// console.log(`Atributo private em F: ${instanciaDeF.mostrarAtributoDaPai()}`);
//------------------------------------------------------
// 14 - Static members
class elementosEstaticos {
    static funcaoEstatica() {
        console.log(`Esse método é do tipo estático`);
    }
}
elementosEstaticos.atributoEstatico = "Informação estática";
// console.log(elementosEstaticos.atributoEstatico);
// elementosEstaticos.funcaoEstatica();
//------------------------------------------------------
// 15 - Generic class
class ClasseGenerica {
    constructor(t, u) {
        this.primeiro = t;
        this.segundo = u;
    }
    get getPrimeiro() {
        return this.primeiro;
    }
    get getSegundo() {
        return this.segundo;
    }
    set setPrimeiro(v) {
        this.primeiro = v;
    }
    set setSegundo(v) {
        this.segundo = v;
    }
    get statusObj() {
        if (typeof (this.primeiro) === "string" || typeof (this.segundo) === "string") {
            //concatenar
            return (`A cocatenação dos valores inseridos é "${String(this.primeiro) + " " + String(this.segundo)}", sendo dos tipos ${typeof (this.primeiro)} e ${typeof (this.segundo)} respectivamente.\n\n`);
        }
        else {
            //somar 
            return (`A soma dos valores inseridos é igual a "${Number(this.primeiro) + Number(this.segundo)}" sendo ambos do tipo number.\n\n`);
        }
    }
}
// // usando strings
const objGenerico1 = new ClasseGenerica("Deniel", "Rocha Diniz");
// console.log(objGenerico1.getPrimeiro);
// console.log(objGenerico1.getSegundo);
// console.log(objGenerico1.statusObj);
// // usando number
const objGenerico2 = new ClasseGenerica(5, 3);
// console.log(objGenerico2.getPrimeiro);
// console.log(objGenerico2.getSegundo);
// console.log(objGenerico2.statusObj);
// // usando number e string juntos
const objGenerico3 = new ClasseGenerica(2, "teste");
// console.log(objGenerico3.getPrimeiro);
// console.log(objGenerico3.getSegundo);
// console.log(objGenerico3.statusObj);
//------------------------------------------------------
// 16 - Parameter properties
class ParPropProd {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    get getQuantidade() {
        return this.quantidade;
    }
    get getPreco() {
        return this.preco;
    }
}
const camiseta = new ParPropProd("regata branca", 20, 19.90);
// console.log(camiseta);
// console.log(camiseta.nome);
// console.log(camiseta.getPreco);
// console.log(camiseta.getQuantidade);
//------------------------------------------------------
// 17 - Class expressions
// criar vaiavel que recebe uma classe com generic <T> e um atributo
const classeGen = class {
    constructor(nome) {
        this.nome = nome;
        this.nome = nome;
    }
};
const cidadao = new classeGen("Isa Dionne");
// console.log(cidadao.nome);
// console.log(cidadao);
//------------------------------------------------------
// 18 - Abstract class
class ClasseAbstrata {
}
class ExtendeAbstrata extends ClasseAbstrata {
    constructor(nome) {
        super(); // ver o motivo
        this.nome = nome;
        this.nome = nome;
    }
    mostraNome() {
        console.log(`O nome é ${this.nome}`);
    }
}
const objAbstrata = new ExtendeAbstrata("Zizi");
// console.log(objAbstrata.mostraNome());
//------------------------------------------------------
// 19 - Relações entre classes
class Gato {
}
class Cachorro {
}
const sadan = new Gato();
console.log(sadan.constructor.name);
sadan.nome = "Sadan Russein";
console.log(sadan.nome);
// https://vscode.dev/profile/github/e9387331b0b6075f2ca9f26e2d1e3d64
