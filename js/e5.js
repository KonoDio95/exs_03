// 5º Exercício

let number = parseInt(prompt("Insira um número inteiro:"));
while (isNaN(number)) {
    number = parseInt(prompt("Por favor, insira um número inteiro:"));
}

let r_quad = Math.sqrt(number);
let r_cub = Math.cbrt(number);
let poten = number ** 2;

alert("Raiz Quadrada: " + r_quad + "\nRaiz Cúbica: " + r_cub + "\nPotência: " + poten);
document.write("<div class='container'>");

document.write("<h3 class='title-exs'>Operações com o número " + number +":</h3>");
document.write("Raiz Quadrada: " + r_quad + "<br>");
document.write("Raiz Cúbica: " + r_cub + "<br>");
document.write("Potência: " + poten);

document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);
