//console.log("Hola a todos");
const maxCards = 0
const state = {
    quantity: maxCards,
}
const app = document.querySelector('#app')
function buttonDisabled(quantity) {
    const btnAddCard = document.querySelector("#addCard")
    const btnRemoveCard = document.querySelector("#removeCard")
    if (quantity >= 10) {
        btnAddCard.setAttribute("disabled", "")
    } else {
        if (quantity <= 0) {
            btnRemoveCard.setAttribute("disabled", "")
        } else {
            btnAddCard.removeAttribute("disabled")
            btnRemoveCard.removeAttribute("disabled", "true")
        }
    }
}

function createButton(content, id) {
    const button = document.createElement('button')
    button.textContent = content
    button.className = "button"
    button.id = id
    const mountButton = document.querySelector(".button-container")
    mountButton.appendChild(button)
}

createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")

const addCard = document.querySelector("#addCard")
addCard.addEventListener('click', () => {
    const app = document.querySelector('#app')
    app.appendChild(create())
    state.quantity++
    buttonDisabled(state.quantity)
})
const removeCard = document.querySelector("#removeCard")
removeCard.addEventListener('click', () => {
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})
buttonDisabled(state.quantity)
function create() {

    const NFTa = document.createElement('div')
    NFTa.className = 'NFT_a'

    const NFTTop = document.createElement('div')
    NFTTop.className='NFT-top'

    const spani=document.createElement('span')

    const imagen = document.createElement('img')
    imagen.src = './assets/image-equilibrium.jpg'
    imagen.alt = 'Imagen principal'
    spani.appendChild(imagen)

    NFTTop.append(spani)

    const NFTDatos = document.createElement('div')
    NFTDatos.className = 'NFT-datos'
    NFTa.append(NFTTop, NFTDatos)

    const NFTDatosGeneral = document.createElement('div')
    NFTDatosGeneral.className = 'NFT-datos-general'

    const div1 = document.createElement('div')

    const span1 = document.createElement('span')
    span1.textContent = 'Equilibrium #3429'
    div1.appendChild(span1)

    const p1 = document.createElement('p')
    p1.textContent = 'Our Equilibrium collection promotes balance and calm.'
    NFTDatosGeneral.append(div1, p1)

    const NFTDatosEspecificos = document.createElement('div')
    NFTDatosEspecificos.className = 'NFT-datos-especificos'

    const NFTDatosEspecificosCosto = document.createElement('div')
    NFTDatosEspecificosCosto.className = 'NFT-datos-especificos-costo'

    const p2 = document.createElement('p')

    const spanim=document.createElement('span')
    const imagen2 = document.createElement('img')
    imagen2.src = './assets/icon-ethereum.svg'
    imagen2.alt = 'simbolo ethereum'
    spanim.appendChild(imagen2)

    const spante=document.createElement('span')
    spante.textContent=' 0.041 ETH'
    p2.append(spanim, spante)
    NFTDatosEspecificosCosto.append(p2)

    const NFTDatosEspecificosTiempo = document.createElement('div')
    NFTDatosEspecificosTiempo.className = 'NFT-datos-especificos-tiempo'
    NFTDatosEspecificos.append(NFTDatosEspecificosCosto, NFTDatosEspecificosTiempo)

    const p3 = document.createElement('p')

    const spanima=document.createElement('span')
    const imagen3 = document.createElement('img')
    imagen3.src = './assets/icon-clock.svg'
    imagen3.alt = 'simbolo reloj'
    spanima.appendChild(imagen3)

    const spantex=document.createElement('span')
    spantex.textContent=' 3 days left'
    p3.append(spanima, spantex)
    NFTDatosEspecificosTiempo.append(p3)

    const NFTDatosCreador = document.createElement('div')
    NFTDatosCreador.className = 'NFT-datos-Creador'
    NFTDatos.append(NFTDatosGeneral, NFTDatosEspecificos, NFTDatosCreador)

    const div2 = document.createElement('div')
    NFTDatosCreador.appendChild(div2)

    const imagen4 = document.createElement('img')
    imagen4.src = './assets/image-avatar.png'
    imagen4.alt = 'Imagen avatar'
    div2.appendChild(imagen4)

    const div3 = document.createElement('div')
    NFTDatosCreador.appendChild(div3)

    const span2 = document.createElement('span')
    span2.textContent = 'Creation of'

    const span3 = document.createElement('span')
    span3.textContent = ' Jules Wyvern'
    div3.append(span2, span3)
    return NFTa
}