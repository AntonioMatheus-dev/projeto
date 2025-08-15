const dropImagem = document.querySelector(".arraste-aqui") as HTMLElement;
const botaoArquivo = document.querySelector(".Botao_arquivo") as HTMLElement;
const inputArquivo = document.getElementById("fileInput") as HTMLInputElement;
const textoArraste = document.getElementById("texto-arraste") as HTMLElement;
const arquivoInfo = document.getElementById("arquivo-info") as HTMLElement;
const nomeArquivo = document.getElementById("nome-arquivo") as HTMLElement;
const arrasteDiv = document.querySelector('.arraste') as HTMLElement;

function mostrarArquivo(nome: string) {
  if (arquivoInfo && nomeArquivo && textoArraste) {
    nomeArquivo.textContent = "Arquivo.pdf";
    arquivoInfo.style.display = "flex";
    textoArraste.style.display = "none";
  }
  if (botaoArquivo) {
    botaoArquivo.classList.add("azul");
    botaoArquivo.innerHTML = "<strong>RESUMO</strong>";
  }
  // Esconde a nuvem e mostra o check
  const nuvem = document.getElementById("nuvem-img") as HTMLImageElement;
  const check = document.getElementById("check-img") as HTMLImageElement;
  if (nuvem) nuvem.style.display = "none";
  if (check) check.style.display = "inline-block";
  if (arrasteDiv) {
    arrasteDiv.classList.add('pdf-selecionado');
  }
  // Esconde a logo e a barra de pesquisa
  const logo = document.getElementById("logo") as HTMLElement;
  const pesquisa = document.querySelector(".pesquisa-container") as HTMLElement;
  if (logo) logo.style.display = "none";
  if (pesquisa) pesquisa.style.display = "none";
  // Mostra a seta de voltar
  const setaVoltar = document.getElementById("voltar") as HTMLElement;
  if (setaVoltar) {
    setaVoltar.style.display = "block";
    setaVoltar.addEventListener("click", () => {
      window.location.reload(); // ou window.history.back();
    });
  }
}

if (dropImagem) {
  dropImagem.addEventListener("dragover", (e: DragEvent) => {
    e.preventDefault();
    dropImagem.classList.add("dragover");
  });

  dropImagem.addEventListener("dragleave", () => {
    dropImagem.classList.remove("dragover");
  });

  dropImagem.addEventListener("drop", (e: DragEvent) => {
    e.preventDefault();
    dropImagem.classList.remove("dragover");
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        mostrarArquivo(file.name);
      }
    }
  });
}

if (inputArquivo) {
  inputArquivo.addEventListener("change", () => {
    if (inputArquivo.files && inputArquivo.files.length > 0) {
      const file = inputArquivo.files[0];
      if (file.type === "application/pdf") {
        mostrarArquivo(file.name);
      }
    }
  });
}

