var dropImagem = document.querySelector(".arraste-aqui");
var botaoArquivo = document.querySelector(".Botao_arquivo");
var inputArquivo = document.getElementById("fileInput");
var textoArraste = document.getElementById("texto-arraste");
var arquivoInfo = document.getElementById("arquivo-info");
var nomeArquivo = document.getElementById("nome-arquivo");
function mostrarArquivo(nome) {
    if (arquivoInfo && nomeArquivo && textoArraste) {
        nomeArquivo.textContent = nome;
        arquivoInfo.style.display = "flex";
        textoArraste.style.display = "none";
    }
    if (botaoArquivo) {
        botaoArquivo.classList.add("azul");
    }
}
if (dropImagem) {
    dropImagem.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropImagem.classList.add('dragover');
    });
    dropImagem.addEventListener('dragleave', function () {
        dropImagem.classList.remove('dragover');
    });
    dropImagem.addEventListener('drop', function (e) {
        e.preventDefault();
        dropImagem.classList.remove('dragover');
        if (e.dataTransfer && e.dataTransfer.files.length > 0) {
            var file = e.dataTransfer.files[0];
            if (file.type === "application/pdf") {
                mostrarArquivo(file.name);
            }
        }
    });
}
if (inputArquivo) {
    inputArquivo.addEventListener('change', function () {
        if (inputArquivo.files && inputArquivo.files.length > 0) {
            var file = inputArquivo.files[0];
            if (file.type === "application/pdf") {
                mostrarArquivo(file.name);
            }
        }
    });
}
