const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <input type="date" value="${dueDate}" disabled>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    dueDateInput.value = '';
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
