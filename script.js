const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', (e) => {
    e.preventDefault()  //o submit por padrão do navegador faz com que a pagina atualize e para não perdermos nossa lista vamos tirar esse comportamento
    const listName = newListInput.value
    if (listName === '' || listName === null) return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return {id: Date.now().toString(), name: name}
}

function render() {
    clearElement(listContainer)
    lists.forEach((list) => {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}


function clearElement (element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}