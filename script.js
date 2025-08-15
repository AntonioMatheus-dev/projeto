var dropImagem = document.querySelector(".arraste-aqui");
var botaoArquivo = document.querySelector(".Botao_arquivo");
var inputArquivo = document.getElementById("fileInput");
var textoArraste = document.getElementById("texto-arraste");
var arquivoInfo = document.getElementById("arquivo-info");
var nomeArquivo = document.getElementById("nome-arquivo");
var arrasteDiv = document.querySelector(".arraste");

function mostrarArquivo(nome) {
  if (arquivoInfo && nomeArquivo && textoArraste) {
    nomeArquivo.textContent = "Arquivo.PDF";
    arquivoInfo.style.display = "flex";
    arquivoInfo.classList.remove("erro");
    textoArraste.style.display = "none";
    var erroImg = document.getElementById("erro-img");
    if (erroImg) erroImg.style.display = "none";
  }

  if (botaoArquivo) {
    botaoArquivo.classList.add("azul");
    botaoArquivo.innerHTML = "<strong>RESUMO</strong>";
    botaoArquivo.onclick = () => {
      window.location.href = "resumo.html"; // Redireciona para a página de resumo
    };
  }

  // Esconde a nuvem e mostra o check
  var nuvem = document.getElementById("nuvem-img");
  var check = document.getElementById("check-img");
  if (nuvem) nuvem.style.display = "none";
  if (check) check.style.display = "inline-block";
  if (arrasteDiv) {
    arrasteDiv.classList.add("pdf-selecionado");
  }
  // Esconde a logo e a barra de pesquisa
  var logo = document.getElementById("logo");
  var pesquisa = document.querySelector(".pesquisa-container");
  if (logo) logo.style.display = "none";
  if (pesquisa) pesquisa.style.display = "none";
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
      } else if (botaoArquivo) {
        botaoArquivo.classList.remove("azul");
        botaoArquivo.style.backgroundColor = "#DF2F47";
        botaoArquivo.innerHTML = "<strong>ERRO</strong>";
        // Mostra a caixinha vermelha com X
        if (arquivoInfo && nomeArquivo) {
          arquivoInfo.style.display = "flex";
          arquivoInfo.classList.add("erro");
          nomeArquivo.textContent = "Arquivo inválido!";
          var erroImg = document.getElementById("erro-img");
          if (erroImg) erroImg.style.display = "inline-block";
        }
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
      } else if (botaoArquivo) {
        botaoArquivo.classList.remove("azul");
        botaoArquivo.style.backgroundColor = "#DF2F47";
        botaoArquivo.innerHTML = "<strong>ERRO</strong>";
        // Mostra a caixinha vermelha com X
        if (arquivoInfo && nomeArquivo) {
          arquivoInfo.style.display = "flex";
          arquivoInfo.classList.add("erro");
          nomeArquivo.textContent = "Arquivo inválido!";
          var erroImg = document.getElementById("erro-img");
          if (erroImg) erroImg.style.display = "inline-block";
        }
      }
    }
  });
}
function mostrarErro() {
  // Esconde elementos iniciais
  var logo = document.getElementById("logo");
  var pesquisa = document.querySelector(".pesquisa-container");
  var textoArraste = document.getElementById("texto-arraste");
  var nuvem = document.getElementById("nuvem-img");
  var check = document.getElementById("check-img");
  var erroImg = document.getElementById("erro-img");
  var msgErro = document.getElementById("msg-erro");

  if (logo) logo.style.display = "none";
  if (pesquisa) pesquisa.style.display = "none";
  if (textoArraste) textoArraste.style.display = "none"; // Esconde "ARRASTE AQUI"
  if (nuvem) nuvem.style.display = "none";

  // Não mostrar nome do arquivo
  var nomeArquivo = document.getElementById("nome-arquivo");
  if (nomeArquivo) nomeArquivo.textContent = "";

  // Mostra apenas o ícone de erro e o texto "Formato inválido"
  if (check) check.style.display = "none"; // não mostrar check de sucesso
  if (erroImg) erroImg.style.display = "inline-block";
  if (msgErro) {
    msgErro.textContent = "FORMATO INVÁLIDO";
    msgErro.style.display = "block";
  }

  // Estiliza caixa de erro
  if (arquivoInfo) {
    arquivoInfo.style.display = "flex";
    arquivoInfo.classList.add("erro");
  }

  // Botão fica em estado de erro
  if (botaoArquivo) {
    botaoArquivo.classList.remove("azul");
    botaoArquivo.style.backgroundColor = "#DF2F47";
    botaoArquivo.innerHTML = "<strong>ERRO</strong>";
    botaoArquivo.disabled = true;
    botaoArquivo.onclick = null;
    botaoArquivo.setAttribute("tabindex", "-1");
  }
  if (inputArquivo) {
    inputArquivo.disabled = true; // desativa o input real
  }

  // Mostra seta de voltar
  var setaVoltar = document.getElementById("voltar");
  if (setaVoltar) {
    setaVoltar.style.display = "block";
    setaVoltar.onclick = () => window.location.reload();
  }
}

// Substitui chamadas antigas de erro
dropImagem.addEventListener("drop", function (e) {
  e.preventDefault();
  dropImagem.classList.remove("dragover");
  if (e.dataTransfer && e.dataTransfer.files.length > 0) {
    var file = e.dataTransfer.files[0];
    if (file.type === "application/pdf") {
      mostrarArquivo(file.name);
    } else {
      mostrarErro();
    }
  }
});

inputArquivo.addEventListener("change", function () {
  if (inputArquivo.files && inputArquivo.files.length > 0) {
    var file = inputArquivo.files[0];
    if (file.type === "application/pdf") {
      mostrarArquivo(file.name);
    } else {
      mostrarErro();
    }
  }
});
