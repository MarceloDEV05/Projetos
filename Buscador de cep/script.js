let span = document.getElementById('buscador')
let input = document.getElementById('inputCep')
span.addEventListener('click', buscarCep)

async function buscarCep() {

    let cep = input.value


    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    const data = await response.json()
    console.log(data)

    let p = document.getElementById('buscado')

    let apiInfo = `
    <strong>Cep:${data.cep}<br>
    Cidade:${data.localidade}<br>
    Estado:${data.uf}
    `
    p.innerHTML = apiInfo

}
