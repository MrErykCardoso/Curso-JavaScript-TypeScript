// ******* Exercício de for (exercício 4)

const butExe4 = document.querySelector('.butExe4');
const butClear4 = document.querySelector('.butClear4');
const resultExe4 = document.querySelector('.resultExe4');

butExe4.addEventListener('click', function show() {

    const simpleArray = [
        { tag: 'p', text: 'linha 1' },
        { tag: 'div', text: 'linha 2' },
        { tag: 'footer', text: 'linha 3' },
        { tag: 'section', text: 'linha 4' }
    ];

    for (let i = 0; i < simpleArray.length; i++) {
        let { tag, text } = simpleArray[i];
        resultExe4.innerHTML += `<${tag}>${text}</${tag}>`;
    }

});

butClear4.addEventListener('click', function clear() {
    resultExe4.innerHTML = '';
})

// ******* Exercício objeto date e switch case (exercício 3)

const but = document.querySelector('.butExe3');
const butClear3 = document.querySelector('.butClear3');
const resultExe3 = document.querySelector('.resultExe3');

but.addEventListener('click', horaAtual);

function horaAtual(event) {
    const date = new Date();
    console.log(date);

    let year = date.getFullYear();
    let month = date.getMonth();
    let dayWeek = date.getDay();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    function whatMonth(m) {
        const month = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return month[m];
    }

    function whatDayWeek(d) {
        const day = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        return day[d];
    }

    function zeroFormat(f) {
        if (f < 10) {
            f = `0${f}`;
        }
        return f;
    }

    resultExe3.innerHTML = `<p class="dateExe3">${whatDayWeek(dayWeek)} | ${zeroFormat(day)} de ${whatMonth(month)} de ${year} | ${zeroFormat(hours)}:${zeroFormat(minutes)}</p>`;
}

butClear3.addEventListener('click', function clear() {
    resultExe3.innerHTML = '';
})


/*but.addEventListener('click', function horaAtual() {
    const data = new Date();
    resultExe3.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
});*/


// *******Objeto date

/*function dayWeekText(dayWeek) {

    let dayOfTheWeek;

    switch (dayWeek) {
        case (0):
            dayOfTheWeek = 'Domingo';
            return dayOfTheWeek;
        case (1):
            dayOfTheWeek = 'Segunda';
            return dayOfTheWeek;
            break;
        case (2):
            dayOfTheWeek = 'Terça';
            return dayOfTheWeek;
            break;
        case (3):
            dayOfTheWeek = 'Quarta';
            return dayOfTheWeek;
            break;
        case (4):
            dayOfTheWeek = 'Quinta';
            return dayOfTheWeek;
            break;
        case (5):
            dayOfTheWeek = 'Sexta';
            return dayOfTheWeek;
            break;
        case (6):
            dayOfTheWeek = 'Sábado';
            return dayOfTheWeek;
            break;

    }
}


const data = new Date('1987-04-29 00:00:00');
let dayWeek = data.getDay();
const theDay = dayWeekText(dayWeek);

console.log(dayWeek, theDay);*/


// *******Operação ternária

// Uma forma de encurtar o código ao substituir uma sequencia de simples de if else por uma sintaxe de lógica que aplica o valor diretamente na variavel ( "lógica" ? "Alternativa if true" : "Alternativa if false" )
/*const pontUsu = 900;
const vip = pontUsu >= 1000 ? 'Usuário Vip' : 'Usuário normal';

const corUsu = 'white';
const corPadrao = corUsu || 'Black';

console.log(vip, corPadrao);*/

/// *******Exercício teste de IMC (Exercício 2)///

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
        } else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = `<p class="sucessExe2">Peso normal. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            result.innerHTML = `<p class="sucessExe2">Sobrepeso. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 1. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 2. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else if (imc > 40) {
            result.innerHTML = `<p class="sucessExe2">Obesidade de grau 3. Seu IMC: ${imc.toFixed(2)}.</p>`;
        } else {
            result.innerHTML = `<p class="errorExe2">Erro! Valor inválido.</p>`;
        }
    }
    form.addEventListener('submit', getEvent);
}
imcMain();

/// *********Exercício de função array objeto (Exercício 1)////

function meuEscopo() {
    const form = document.querySelector('.form1');
    const result = document.querySelector('.resultExe1');

    const pessoas = [];

    function getEvent(event) {
        event.preventDefault();
        const name = form.querySelector('.name');
        const lastname = form.querySelector('.sob');
        const height = form.querySelector('.alt');
        const weight = form.querySelector('.peso');

        pessoas.push({
            name: name.value,
            lastname: lastname.value,
            height: height.value,
            weight: weight.value
        })

        console.log(pessoas);

        result.innerHTML = `<p> Nome: ${name.value}<br>Sobrenome: ${lastname.value}<br>Altura: ${height.value}m<br>Peso: ${weight.value}Kg</p>`;

    }
    form.addEventListener('submit', getEvent);
}
meuEscopo();


///////////////// js barra lateral /////////////////////
const menuItem = document.querySelectorAll('.item-menu');
const butLateral = document.querySelector('.but-lateral');
const expNav = document.querySelector('.nav');
const butUp = document.querySelector('.but-up');
/*let width = 1;*/

butLateral.addEventListener('click', function () {
    expNav.classList.toggle('expand');
    /*  if (width == 1) {
            expNav.classList.add('expand');
            width++;
        }
        else if (width == 2) {
            expNav.classList.remove('expand');
            width--;
        }*/
});

function selected() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selected)
)

butUp.addEventListener('click', function () {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
})
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
