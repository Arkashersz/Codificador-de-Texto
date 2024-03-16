function codificar() {
  var texto = document.getElementById("texto").value;
  var deslocamento = parseInt(document.getElementById("deslocamento").value);
  document.getElementById("resultado").value = cifraCesar(texto, deslocamento);
}

function decodificar() {
  var texto = document.getElementById("texto").value;
  var deslocamento = parseInt(document.getElementById("deslocamento").value);
  document.getElementById("resultado").value = cifraCesar(texto, -deslocamento);
}

function copiar() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
  alert("Mensagem copiada para a área de transferência!");
}

function cifraCesar(texto, deslocamento) {
  return texto.replace(/[a-zA-ZÀ-ÿ]/g, function (caractere) {
    var codigo = caractere.charCodeAt(0);
    var maiuscula = codigo >= 65 && codigo <= 90;
    var minuscula = codigo >= 97 && codigo <= 122;
    var deslocadoCodigo;
    if (maiuscula || minuscula) {
      deslocadoCodigo = codigo + deslocamento;
      if (
        (maiuscula && deslocadoCodigo > 90) ||
        (minuscula && deslocadoCodigo > 122)
      ) {
        deslocadoCodigo -= 26;
      } else if (
        (maiuscula && deslocadoCodigo < 65) ||
        (minuscula && deslocadoCodigo < 97)
      ) {
        deslocadoCodigo += 26;
      }
      return String.fromCharCode(deslocadoCodigo);
    } else {
      return caractere;
    }
  });
}
