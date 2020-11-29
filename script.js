function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  var fsex = document.getElementsByTagName('radsex');
  var idade = ano - Number(formano.value);
  var genero = '';
  var img = document.creatElement('img');
  if (fsex[0].checked) {
    genero = 'Homem';
  } else if (fsex[1].checked) {
    genero = 'Mulher';
  }
  res.style.textAlign = 'center';
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
}
