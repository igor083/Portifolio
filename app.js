var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("C:\Users\igor8\OneDrive\Área de Trabalho\HTTP\index.html")
}).listen(8181);
console.log("Servidor aberto.")