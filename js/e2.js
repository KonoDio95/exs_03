// 2º Exercício
let number = parseInt(prompt("Insira um número inteiro de 1 a 10: "));
while (isNaN(number) || number > 10 || number < 1) {
    number = parseInt(prompt("Por favor, insira um número inteiro de 1 a 10: "));
}

document.write("<div class='container'>");
document.write("<h3 class='title-exs'>Tabuada do " + number + " (do 0 ao 10)</h3>");
for (let i = 0; i <= 10; i++) {
    document.write(number + " x  " + i + " = " + (number * i) + "<br>");
}
document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);
