document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const input = document.getElementById('item');
    const todoList = document.getElementById('todoList');


    function createTask(text) {
        const li = document.createElement('li');

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        contentDiv.innerText = text;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('done');
        });

        const delBtn = document.createElement('button');
        delBtn.innerText = '-';
        delBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        actionsDiv.appendChild(checkbox);
        actionsDiv.appendChild(delBtn);

        li.appendChild(contentDiv);
        li.appendChild(actionsDiv);

        todoList.appendChild(li);
    }


    addBtn.addEventListener('click', () => {
        const value = input.value.trim();
        if (value) {
            createTask(value);
            input.value = '';
        }
    });


    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});
