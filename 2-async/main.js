const URL = "https://pokeapi.co/api/v2/pokemon"


const obtenerTipos = (obj) => {
    return obj.map(item => item.type.name)
}

const crearTarjeta = (name, image, types) => {
    console.log(types)
    return `<div class="card">
        <h3> ${name} </h3>
        <img src="${image}" alt="">
        <p> Types: ${obtenerTipos(types)} </p>
    </div>`
}

const traerDatos = async () => {
    const container = document.querySelector("section.container")
    container.innerHTML = ""

    let res = await fetch(URL)
    let data = await res.json()

    data.results.forEach(async (item) => {
        let res = await fetch(item.url)
        let pokemon = await res.json()

        container.innerHTML += crearTarjeta(item.name,
            pokemon.sprites.front_default,
            pokemon.types)
    })
}

const btn = document.querySelector("#boton")
btn.addEventListener("click", traerDatos)