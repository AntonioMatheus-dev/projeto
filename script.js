var dropImagem = document.querySelector(".arraste-aqui");
var botaoArquivo = document.querySelector(".Botao_arquivo");
var inputArquivo = document.getElementById("fileInput");
var textoArraste = document.getElementById("texto-arraste");
var arquivoInfo = document.getElementById("arquivo-info");
var nomeArquivo = document.getElementById("nome-arquivo");
var arrasteDiv = document.querySelector('.arraste');
function mostrarArquivo(nome) {
    if (arquivoInfo && nomeArquivo && textoArraste) {
        nomeArquivo.textContent = nome;
        arquivoInfo.style.display = "flex";
        textoArraste.style.display = "none";
    }
    if (botaoArquivo) {
        botaoArquivo.classList.add("azul");
        botaoArquivo.innerHTML = "<strong>RESUMO</strong>";
    }
    // Esconde a nuvem e mostra o check
    var nuvem = document.getElementById("nuvem-img");
    var check = document.getElementById("check-img");
    if (nuvem)
        nuvem.style.display = "none";
    if (check)
        check.style.display = "inline-block";
    if (arrasteDiv) {
        arrasteDiv.classList.add('pdf-selecionado');
    }
    // Esconde a logo e a barra de pesquisa
    var logo = document.getElementById("logo");
    var pesquisa = document.querySelector(".pesquisa-container");
    if (logo)
        logo.style.display = "none";
    if (pesquisa)
        pesquisa.style.display = "none";
    // Mostra a seta de voltar
    var setaVoltar = document.getElementById("voltar");
    if (setaVoltar) {
        setaVoltar.style.display = "block";
        setaVoltar.addEventListener("click", function () {
            window.location.reload(); // ou window.history.back();
        });
    }
}
if (dropImagem) {
    dropImagem.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropImagem.classList.add("dragover");
    });
    dropImagem.addEventListener("dragleave", function () {
        dropImagem.classList.remove("dragover");
    });
    dropImagem.addEventListener("drop", function (e) {
        e.preventDefault();
        dropImagem.classList.remove("dragover");
        if (e.dataTransfer && e.dataTransfer.files.length > 0) {
            var file = e.dataTransfer.files[0];
            if (file.type === "application/pdf") {
                mostrarArquivo(file.name);
            }
        }
    });
}
if (inputArquivo) {
    inputArquivo.addEventListener("change", function () {
        if (inputArquivo.files && inputArquivo.files.length > 0) {
            var file = inputArquivo.files[0];
            if (file.type === "application/pdf") {
                mostrarArquivo(file.name);
            }
        }
    });
}
