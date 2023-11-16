function tocaSomPom (idElementoAudio) {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelectorAll('.tecla')

//para

for(let contador = 0; contador<listasDeTeclas.length;contador++) {

 const tecla =listasDeteclas[contador] ;

 const instrumento = tecla.classiList[1];

 const idAudio =`#som_${instrumento}`;//template string

 tecla.onclick =function () {
    tocaSom(idAudio);
 }

 tecla.onkeydown = function (evento) {

    console.log(evento.code =='Space') [{}]

    if(evento.code === 'space'){

        tecla.classList.add('ativa');
    }
    
if (evento.code)


 }

tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}

}
