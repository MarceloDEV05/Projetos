let api = "https://cdn.apicep.com/file/apicep/06233-030.json"

 async function buscarCep(){

    
    const response = await fetch(api,{
        method:"GET"
    })
    
    const data = await response.json()
    console.log(data)

    let p = document.getElementById('buscado')

    let apiInfo = `
    Cep:${data.code}
    Cidade:${data.city}
    Estado:${data.state}
    `
    p.innerHTML = apiInfo
    
}
buscarCep()