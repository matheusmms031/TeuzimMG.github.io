function click(){
    for(var i = 0; i < materias.length; i++){
        if(materias[i].checked == true){
            saida.innerText = `${materias[i].value}`
        }
    }
}


const saida = window.document.getElementById('saida')
const materias = window.document.getElementsByName('materia')
const button1 = window.document.getElementById('button')
button1.addEventListener('click',click)
