function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let ano_nasc = document.getElementById('nasc_ano')
  let res = document.getElementById('res')
  let radius = document.getElementsByName('radsex')
  let idade = ano - Number(ano_nasc.value)
  let genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  if (radius[0].checked) {
    genero = 'Masculino'
    if (idade >= 0 && idade < 10) {
      img.setAttribute('src', 'foto-bebe-m.png')
    } else if (idade < 21) {
      img.setAttribute('src', 'foto-jovem-m.png')
    } else if (idade < 59) {
      img.setAttribute('src', 'foto-adulto-m.png')
    } else {
      mg.setAttribute('src', 'foto-idoso-m.png')
    }

  } else if (radius[1].checked) {
    genero = 'Feminino'
    if (idade >= 0 && idade < 10) {
      img.setAttribute('src', 'foto-bebe-f.png')
    } else if (idade < 19) {
      img.setAttribute('src', 'foto-jovem-f.png')
    } else if (idade < 50) {
      img.setAttribute('src', 'foto-adulto-f.png')
    } else {
      img.setAttribute('src', 'foto-idoso-f.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  res.appendChild(img)
}
