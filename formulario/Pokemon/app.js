function VerificarResposta(){
    let respostaCerta
    respostaCerta = document.getElementById
    ("alternativacerta").checked

    if(respostaCerta == true){
        alert("Parabens!!!\nVocê Acertou.")
    }else{
        alert("Que pena, não foi desta vez.")
    }
}