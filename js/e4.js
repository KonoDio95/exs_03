let n_0 = -1;
let n_1 = 1;
let n_3 = n_0 + n_1;

document.write("<div class='container'>");
document.write("<h3 class='title-exs'>Os 10 primeiros números da sequência de Fibonacci:</h3>");
for (let i = 0; i < 9; i++) {
    document.write(n_3 + " - ");
    n_0 = n_1;
    n_1 = n_3;
    n_3 = n_0 + n_1;
}
document.write(n_3);
document.write(`
</div>
<div class='container'>
<img class="imgs-cont" src='imgs/fibonacci_1.png' alt='Sequência de Fibonacci'>
<img class="imgs-cont" src='imgs/fibonacci.jpg' alt='Tirinha em formato de Fibonacci'>`
);
document.write(`
<a href='index.html'><button class='link_exs'>Voltar</button></a>
</div>`
);