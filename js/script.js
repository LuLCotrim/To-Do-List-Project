const addButton = document.getElementById('add')
console.log(addButton)
const textBox = document.getElementById('descTodo')
const listaTodo = document.getElementsByClassName('list')

function addTodo(){
    const li = document.createElement('li')
    const bt = document.createElement('button')
    const icon = document.createElement('i')
    let textTodo = documnet.createTextNode(textBox.value)

    icon.setAttribute('class', 'fas fa-chevron-circle-right')
    icon.setAttribute('style', 'font-size: 18px')
    
    li.setAttribute('class', 'listElement')

    bt.appendChild(icon)

    li.appendChild(bt)
    li.appendChild(textTodo)

    listaTodo.appendChild(li)
}

addButton.onclick = alert('dfdfd')