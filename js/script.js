const addButton = document.getElementById('add')
const textBox = document.getElementById('descTodo')
const listaTodo = document.getElementById('list')

let todoArray = []
let doingArray = []
let donerray = []

function addTodo(){
    todoArray.push(textBox.value)
    textBox.value = null
    renderLists()
}

const renderLists = () => {
    listaTodo.innerHTML = null
    todoArray.forEach(element => {
        const li = document.createElement('li')
        const bt = document.createElement('button')
        const icon = document.createElement('i')
        let textTodo = document.createTextNode(element)

        icon.setAttribute('class', 'fas fa-chevron-circle-right')
        icon.setAttribute('style', 'font-size: 18px')
    
        li.setAttribute('class', 'listElement')

        bt.appendChild(icon)

        li.appendChild(textTodo)
        li.appendChild(bt)

        listaTodo.appendChild(li)
    });
}

addButton.onclick = addTodo