/// Exercício teste de IMC ///

function imcMain() {
    const form = document.querySelector('.form2');
    const result = document.querySelector('.resultExe2');

    function getEvent(event) {
        event.preventDefault();
        const inputPeso = form.querySelector('.weight');
        const inputAltura = form.querySelector('.height');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const imc = peso / altura ** 2;

        if (imc < 18.5) {
            result.innerHTML = `<p class="sucessExe2">Abaixo do peso. Seu IMC: ${imc.toFixed(2)}.</p>`;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = `<p class="sucessExe2">Peso normal. Seu IMC: ${imc.toFixed(2)}.</p>`;
        }
        else if (imc >= 25 && imc <= 29.9) {
            result.innerHTML = `<p class="sucessExe2">Sobrepeso. Seu IMC: ${imc.toFixed(2)}.</p>`;
        }
        else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 1. Seu IMC: ${imc.toFixed(2)}.</p>`;
        }
        else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 2. Seu IMC: ${imc.toFixed(2)}.</p>`;
        }
        else if (imc > 40) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 3. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else {
            result.innerHTML = `<p class="errorExe2">Erro! Valor inválido.</p>`;
        }
    }
    form.addEventListener('submit', getEvent);
}
imcMain();

/// Exercício de função array objeto ////

function meuEscopo() {
    const form = document.querySelector('.form1');
    const result = document.querySelector('.result');

    const pessoas = [];

    function getEvent(event) {
        event.preventDefault();
        const name = form.querySelector('.name');
        const lastname = form.querySelector('.sob');
        const height = form.querySelector('.alt');
        const weight = form.querySelector('.peso');

        console.log('check (1)!');

        pessoas.push({
            name: name.value,
            lastname: lastname.value,
            height: height.value,
            weight: weight.value
        })

        console.log('check (2)!');

        console.log(pessoas);

        result.innerHTML += `<p>${name.value}, ${lastname.value}, ${height.value}, ${weight.value}</p>`;

    }
    form.addEventListener('submit', getEvent);
}
meuEscopo();

///////////////// Function /////////////////////

/*function saudacao(name) {
    return `Bom dia ${name}`;

}

const varia = saudacao('Marcelo');
console.log(varia);

function soma(x = 2, y = 2) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(5, 5);
console.log(resultado);*/

/*const raiz = function (n) {
    return resultado = n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

///////////////// object /////////////////

/*const pessoa1 = {
    nome: 'marcelo',
    sobrenome: 'cardoso',
    idade: 23
}

const pessoa2 = {
    nome: 'dara',
    sobrenome: 'cardoso',
    idade: 24
}

console.log(pessoa1.nome, pessoa2.sobrenome);*/

/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala() {
            console.log(`Minha idade é ${this.idade}`);
        },

        passaTempo() {
            this.idade++;
        }
    };
}

const pessoa1 = criaPessoa('Marcelo', 'Cardoso', 23);
const pessoa2 = criaPessoa('Milenna', 'Teixeira', 23);

pessoa1.fala();
pessoa1.passaTempo();
pessoa1.fala();
pessoa2.fala();
pessoa2.passaTempo();
pessoa2.fala();*/
