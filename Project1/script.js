function click(){
    for(var i = 0; i < materias.length; i++){
        if(materias[i].checked == true){
            saida.innerText = `${materias[i].value}`
        }
    }
}
function click2(){
    for(var c = 0; c < checks.length; c++){
        if(checks[c] == true){
            console.log(checks[c].value)
        }
    }
}


const saida = window.document.getElementById('saida')
const checks = window.document.querySelectorAll('.check')
const materias = window.document.getElementsByName('materia')
const button2 = window.document.getElementById('button2')
const button1 = window.document.getElementById('button')
button1.addEventListener('click',click)
button2.addEventListener('click',click2)
