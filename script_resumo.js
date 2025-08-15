// Simulação de chamada ao backend
window.onload = async () => {
  try {
    const resposta = await fetch("https://seu-backend.com/api/resumo"); // substitua pela sua URL real
    const dados = await resposta.json();
    document.getElementById("resumoTexto").value =
      dados.texto || "Resumo não disponível.";
  } catch (erro) {
    document.getElementById("resumoTexto").value = "Erro ao carregar resumo.";
  }
};

function copiarTexto() {
  const texto = document.getElementById("resumoTexto");
  texto.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}

function salvarAlteracoes() {
  const textoEditado = document.getElementById("resumoTexto").value;
  // Aqui você pode enviar o texto de volta ao backend
  alert("Alterações salvas (simulação).");
}
