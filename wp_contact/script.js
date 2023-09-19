function send() {
  let telefone = document.querySelector('#telefone').value.replace(/(\D+)/g, '');
  let horario = document.querySelector('#timer').value;
  let mensagem = document.querySelector('#mensagem').innerHTML;

  sendMessage(telefone, mensagem.replace('{horario}', horario))


}

function sendMessage(phone, text) {
  window.open(`https://wa.me/+${phone}?text=${text}`);

}