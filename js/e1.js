// 1º Exercício
document.write("<div class='container'>");
document.write("<h3 class='title-exs'>Número Impares entre 0 e 100:</h3>");
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        document.write("Número " + i + "<br>");
    }
}

document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);
