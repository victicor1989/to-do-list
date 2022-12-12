let idCounter = 0
const input = document.querySelector('input[type="text"]')
let reloadButton = document.querySelector('.reiniciar')
reiniciar.addEventListener('click', reloadGame)

userInput.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask()
})

let addTask = () => {
    idCounter++

    let newValue = input.value

    list.innerHTML += `
    <div class="task-container" id="${idCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./images/delete.png" class="closeBtn" alt="delete">
    </div>
    `
    input.value = ''
    updateStats()
}

list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'INPUT') {
        updateStats()
    } else if (event.srcElement.nodeName == 'IMG') {
        deleteTask(event.srcElement.parentNode.id)
    }
})

let updateStats = () => {
    let element = list.querySelectorAll('div')
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</p>`
}

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id)
    list.removeChild(taskToDelete)
    updateStats()
}

function reloadGame() {
    location.reload()
}

