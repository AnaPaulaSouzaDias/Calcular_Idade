function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var form = document.getElementById('txtano')
  var res = document.getElementById('res')
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(form.value)
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id')
  if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade < 10) {
      img.setAttribute('src', 'foto-bebe-m.png')
    } else if (idade >= 10 && idade < 20) {
      img.setAttribute('src', 'foto-jovem-m.png')
    } else if (idade >= 20 && idade < 50) {
      img.setAttribute('src', 'foto-adulto-m.png')
    } else {
      mg.setAttribute('src', 'foto-idoso-m.png')
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  } else if (fsex[1].checked) {
    genero = 'Mulher';
    if (idade >= 0 && idade <10) {
      img.setAttribute('src', 'foto-bebe-f.png')    
    } else if (idade < 21) {
      img.setAttribute('src', 'foto-jovem-f.png')    
    } else if (idade <50) {
      img.setAttribute('src', 'foto-adulto-f.png')  
    } else {
      img.setAttribute('src', 'foto-bebe-f.png')
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  } 
}
