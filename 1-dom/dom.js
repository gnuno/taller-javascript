window.addEventListener('load', main)

function main() {
    const titulo = document.querySelector("#titulo")
    console.log(titulo)

    document.querySelector("p.hide").remove()
    document.querySelector("p.visible").innerText = "Este parrafo se rellena al cargar JS"

    const main = document.querySelector("main")
    main.innerHTML = "<h2>Titulo insertado desde JS</h2>" + main.innerHTML

    document.querySelector("#showItems").addEventListener("click", () => {
        const element = document.createElement('div')
        element.innerHTML += "<h3> Titulo del elemento </h3> <p> Descripcion del elemento </p>"
        element.className += "item"

        document.querySelector("#container").append(element)
    })
}