var stats = document.getElementById('stats')
var id = document.getElementById('id')
var sprite = document.getElementById('sprite')
var namebox = document.getElementById('namebox')
var searchbutton = document.getElementById('searchbutton')


async function Click(){
    stats.innerHTML = null
    var resposta = await ( await fetch(`https://pokeapi.co/api/v2/pokemon/${namebox.value}`)).json()
    id.innerText = resposta.name
    sprite.src = resposta.sprites.front_default
    resposta.stats.map(state => {
        let base = state.base_stat
        let name = state.stat.name
        let statediv = document.createElement('div')
        statediv.className = 'statediv'
        let stateNamehtml = document.createElement('h1')
        stateNamehtml.className = 'statesname'
        stateNamehtml.textContent = name
        let statehtml = document.createElement('h2')
        statehtml.className = 'statesvalor'
        statehtml.textContent = base
        
        statediv.appendChild(stateNamehtml)
        statediv.appendChild(statehtml)
        stats.appendChild(statediv)
    })
}

searchbutton.addEventListener('click',Click)