const gerar = () => {
  const select = document.querySelector('#carteinhas_select');
  const carteirinha = document.querySelector('.carteira').cloneNode(true);
  const body = document.querySelector('body');


  body.appendChild(carteirinha);
}