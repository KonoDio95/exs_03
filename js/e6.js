// 6º Exercício

let dados = [];
for (let i = 0; i < 5; i++) {
    let dado = [];
    dado[0] = parseInt(prompt("Altura em centímetros: "));
    while (isNaN(dado[0])) {
        dado[0] = parseInt(prompt("Por favor, insira uma altura em centímetros: "));
    }
    dado[1] = parseInt(prompt("Sexo:\n [0] - Masculino\n [1] - Feminino"));
    while (isNaN(dado[1]) || dado[1] > 1 || dado[1] < 0) {
        dado[1] = parseInt(prompt("Sexo:\n [0] - Masculino\n [1] - Feminino\nPor favor, apenas números entre 0 e 1"));
    }
    dados[i] = dado;
}

let fems = 0;
let mascs = 0;
let ma_alt = [dados[0][0], dados[0][1]];

for (let i = 0; i < dados.length; i++) {
    let dado = dados[i];
    if (dado[0] > ma_alt[0]) {
        ma_alt[0] = dado[0];
        ma_alt[1] = dado[1];
    }

    if (dado[1]) {
        fems++;
    } else {
        mascs++;
    }
}

document.write("<div class='container'>");
document.write("<h3 class='title-exs'>Dados coletados:</h3>");
document.write("<p><strong>Pessoas do sexo masculino: </strong>" + mascs + "</p>");
document.write("<p><strong>Pessoas do sexo feminino: </strong>" + fems + "</p>");
if (ma_alt[1]) {
    document.write("<p><strong>Maior Altura: </strong>" + ma_alt[0] + "cm (é de uma pessoa do sexo feminino)</p>");
} else {
    document.write("<p><strong>Maior Altura: </strong>" + ma_alt[0] + "cm (é de uma pessoa do sexo masculino)</p>");
}

document.write("</div><hr>");

document.write("<div class='container'>");
document.write("<h4 class='title-extra'>Todos os dados:</h4>");
for (let i = 0; i < dados.length; i++) {
    let dado = dados[i];
    if (dado[1]) {
        document.write("<p>Pessoa do sexo feminino com " + dado[0] + "cm de altura</p>");
    } else {
        document.write("<p>Pessoa do sexo masculino com " + dado[0] + "cm de altura</p>");
    }
}
document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);