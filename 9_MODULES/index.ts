//------------------------------------------------------
// 01 - importação de arquivos

import importGreet from "./greet";
// importGreet();

//------------------------------------------------------
// 02 - import de variável

import { x } from "./variables";
// console.log(x);

//------------------------------------------------------
// 03 - multiplas importações

// cria arquivo ts com dados a serem exportados
// cria variaveis e funções a serem exportadas a aprtir desse arquivo
// importar no index usando objeto { }

import {idade, nome, sobrenome, nomeCompleto} from "./multiple";
// console.log(nome);
// console.log(sobrenome);
// console.log(idade);
// nomeCompleto(nome, sobrenome);

//------------------------------------------------------
// 04 - alias

import {nome as suaGraca} from "./multiple";
// console.log(suaGraca);

//------------------------------------------------------
// 05 - import all

// importando tudo em um objeto
import * as m from "./multiple";
// m.nomeCompleto(m.nome, m.sobrenome);
// console.log(m);


//------------------------------------------------------
// 06 - importando tipos

import { Humano } from "./mytypes";

class Pessoa implements Humano {

    constructor(
        public nome: string, 
        public idade: number
        ) {
        this.nome = nome;
        this.idade = idade;
    }
    
    public get getNome(): string {
        return this.nome;
    }
    
    public get getIdade(): number {
        return this.idade;
    }
}

const cocada = new Pessoa("Isa Dionne", 35);

console.log(cocada);
// console.log(cocada.getNome);


//------------------------------------------------------
// 07 - 



//------------------------------------------------------
// 08 - 



//------------------------------------------------------
// 09 - 



//------------------------------------------------------
// 10 - 


