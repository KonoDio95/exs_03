// 3º Exercício
let number = 0;

for (let i = 0; i <= 1000; i++) {
    number += i;
}

alert("O total é: " + number);

document.write("<div class='container'>");
document.write("<h3 class='title-exs'>A soma dos números de 1 a 1000 é " + number + "</h3>");
document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);