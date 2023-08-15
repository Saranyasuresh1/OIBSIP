const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="removeBtn" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
