const ongoingList = document.getElementById('ongoing-tasklist')
const doneList = document.getElementById('done-tasklist')

const ongoingTasks = document.querySelector('.tasklist__ongoing')
const doneTasks = document.querySelector('.tasklist__done')

const addButton = document.getElementById('ongoing-add')
const completeButtons = document.querySelectorAll('.ongoing-to-complete')
const removeButtons = document.querySelectorAll('.ongoing-remove')
const undoButtons = document.querySelectorAll('.complete-to-ongoing')

const confirmationDiv = document.querySelector('.tasklist__confirmation')

const taskInput = document.getElementById('ongoing-input')


function addTask() {
    // const taskInput = document.getElementById('ongoing-input')
    if (taskInput.value.length === 0) {return}

    const newItem = document.createElement('li')
    ongoingList.appendChild(newItem)
    newItem.classList.add('tasklist__ongoing__item')

    const deleteButton = document.createElement('button')
    newItem.appendChild(deleteButton)
    deleteButton.innerHTML = ' <i class="fa fa-minus-circle"></i>'
    deleteButton.classList.add('ongoing-to-remove')
    deleteButton.addEventListener('click', removeTask)

    const newTask = document.createElement('p')
    newItem.appendChild(newTask)
    newTask.innerText = taskInput.value

    const completeButton = document.createElement('button')
    newItem.appendChild(completeButton)
    completeButton.innerHTML = ' <i class="fa fa-check-circle"></i>'
    completeButton.classList.add('ongoing-to-complete')
    completeButton.addEventListener('click', completeTask)

    const undoButton = document.createElement('button')
    newItem.appendChild(undoButton)
    undoButton.innerHTML = ' <i class="fa fa-undo"></i>'
    undoButton.classList.add('complete-to-ongoing')
    undoButton.addEventListener('click', undoComplete)
    undoButton.classList.add('hidden')

    taskInput.value = ''
    addSound.currentTime = 0
    addSound.play()
}

function completeTask(evt) {
    const currentTask = evt.currentTarget.parentElement 
    doneList.appendChild(currentTask)
    currentTask.children[2].classList.add('hidden')
    currentTask.children[3].classList.remove('hidden')

    completeSound.currentTime = 0
    completeSound.play()
}

function removeTask(evt) {
    const currentTask = evt.currentTarget.parentElement
    const yesButton = document.getElementById('yesRemove')
    const noButton = document.getElementById('noRemove')
    
    confirmationDiv.classList.remove('hidden')

    function remove(task) {
        task.remove()
        confirmationDiv.classList.add('hidden')
        removeSound.currentTime = 0
        removeSound.play()
    }

    function noRemove() {
        confirmationDiv.classList.add('hidden')
    }

    yesButton.addEventListener('click', () => remove(currentTask))
    noButton.addEventListener('click', noRemove)
}


function undoComplete(evt) {
    const currentTask = evt.currentTarget.parentElement

    ongoingList.appendChild(currentTask)
    currentTask.children[2].classList.remove('hidden')
    currentTask.children[3].classList.add('hidden')

    undoSound.currentTime = 0
    undoSound.play()
}


addButton.addEventListener('click', addTask)

completeButtons.forEach(button => {
    button.addEventListener('click', completeTask)
})

removeButtons.forEach(button => {
    button.addEventListener('click', removeTask)
})

undoButtons.forEach(button => {
    button.addEventListener('click', undoComplete)
})

const addSound = new Audio('./assets/add.wav')
addSound.volume = 0.2
const removeSound = new Audio('./assets/delete.wav')
removeSound.volume = 0.2
const completeSound = new Audio('./assets/complete.wav')
completeSound.volume = 0.2
const undoSound = new Audio('./assets/delete.wav')
undoSound.volume = 0.2