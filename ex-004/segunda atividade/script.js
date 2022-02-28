function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(formAno.value.length == 0 || formAno.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formSex[0].checked) {
            genero = 'um homem';
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', 'foto-crianca-m.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png');
            }
        } else if (formSex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'foto-crianca-f.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png');
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }
}