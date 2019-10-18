const addButton = document.getElementById('add')
const textBox = document.getElementById('descTodo')
const listaTodo = document.getElementById('listTodo')
const listaDoing = document.getElementById('listDoing')
const listaDone = document.getElementById('listDone')

let todoArray = []
let doingArray = []
let doneArray = []

function addTodo(){
    todoArray.push(textBox.value)
    textBox.value = null
    renderLists()
}

const advance1 = (index) => {
    let desc = todoArray[index]
    doingArray.push(desc)
    todoArray.splice(index)
    renderLists()
}

const advance2 = (index) => {
    let desc = doingArray[index]
    doneArray.push(desc)
    doingArray.splice(index)
    renderLists()
}

const renderLists = () => {
    listaTodo.innerHTML = null
    listaDoing.innerHTML = null
    listaDone.innerHTML = null

    todoArray.forEach(element => {
        const li = document.createElement('li')
        const bt = document.createElement('button')
        const icon = document.createElement('i')
        let textTodo = document.createTextNode(element + ' ')

        icon.setAttribute('class', 'fas fa-chevron-circle-right')
        icon.setAttribute('style', 'font-size: 18px')
    
        li.setAttribute('class', 'listElement')

        bt.setAttribute('onclick', 'advance1(' + todoArray.indexOf(element) + ')')
        bt.appendChild(icon)

        li.appendChild(textTodo)
        li.appendChild(bt)

        listaTodo.appendChild(li)
    });

    doingArray.forEach(element => {
        const li = document.createElement('li')
        const bt = document.createElement('button')
        const icon = document.createElement('i')
        let textTodo = document.createTextNode(element + ' ')

        icon.setAttribute('class', 'fas fa-chevron-circle-right')
        icon.setAttribute('style', 'font-size: 18px')
    
        li.setAttribute('class', 'listElement')
        
        bt.setAttribute('onclick', 'advance2(' + doingArray.indexOf(element) + ')')
        bt.appendChild(icon)

        li.appendChild(textTodo)
        li.appendChild(bt)

        listaDoing.appendChild(li)
    })

    doneArray.forEach(element => {
        const li = document.createElement('li')
        const bt = document.createElement('button')
        const icon = document.createElement('i')
        let textTodo = document.createTextNode(element + ' ')

        icon.setAttribute('class', 'fas fa-times-circle')
        icon.setAttribute('style', 'font-size: 18px')
    
        li.setAttribute('class', 'listElement')

        bt.appendChild(icon)

        li.appendChild(textTodo)
        li.appendChild(bt)

        listaDone.appendChild(li)
    })
}

renderLists()
addButton.onclick = addTodo