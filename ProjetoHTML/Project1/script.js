function click(){
       var output = document.getElementById('output')
       var oReq = new XMLHttpRequest()
       oReq.open("get", `http://viacep.com.br/ws/${cep.value}/json/`, false);
       oReq.send();
       console.log(oReq.response)
       response = JSON.parse(oReq.response)
       output.innerText = `CEP : ${response['cep']}\nLOGRADOURO : ${response['logradouro']}\nCOMPLEMENTO : ${response['complemento']}\nBAIRRO : ${response['bairro']}
       LOCALIDADE : ${response['localidade']}\nUNIDADE FEDERATIVA : ${response['uf']}\nIBGE : ${response['ibge']}\nGIA : ${response['gia']}\nDDD : ${response['ddd']}`
}


var button = document.getElementById('button')
var request = new XMLHttpRequest()
// request.open("post","http://127.0.0.1:5000/", false)
// data = {'ip':123}
// request.send(JSON.stringify(data))
// console.log(request.response)
var cep = document.getElementById('cep')
button.addEventListener('click',click)

