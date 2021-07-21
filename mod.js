function validar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var result = document.querySelector('div#result')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados inseridos')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img-criança-M.png')
                //Criança
            } else if (idade < 28) {
                img.setAttribute('src', 'img-jovem-M.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'img-adulto-M.png')
                //Adulto
            } else {
                img.setAttribute('src', 'img-idoso-M.png')
                //Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img-bebe-F.png')
                //Criança
            } else if (idade < 28) {
                img.setAttribute('src', 'img-jovem-F.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'img-adulta-F.png')
                //Adulta
            } else {
                img.setAttribute('src', 'img-idosa-F.png')
                //Idosa
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero} com ${idade} ano`
        result.appendChild(img)
    }
}