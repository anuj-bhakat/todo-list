document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const input = document.getElementById('item');
    const activeTasksList = document.getElementById('activeTasks');
    const completedTasksList = document.getElementById('completedTasks');

    function createTask(text) {
        const li = document.createElement('li');

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        contentDiv.innerText = text;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        actionsDiv.appendChild(checkBox);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(contentDiv);
        li.appendChild(actionsDiv);

        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                li.classList.add('done');
                completedTasksList.prepend(li);
            } else {
                li.classList.remove('done');
                activeTasksList.prepend(li);
            }
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        activeTasksList.prepend(li);
    }

    addBtn.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});
