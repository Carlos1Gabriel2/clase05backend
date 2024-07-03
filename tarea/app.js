/* 
Este ejercicio consistirá en una aplicación de gestión de tareas 
con las siguientes funcionalidades:

-   Crear una nueva Tarea.
-   Marcar una tarea completada
-   Eliminar una tarea
-   Listar todas las tareas y las tareas completadas en la interfaz

*/

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName) {
        const task = {
            name: taskName,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskName = document.createElement('span');
        taskName.textContent = task.name;
        if (task.completed) {
            taskName.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completada';
        completeButton.onclick = () => toggleTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(index);

        taskItem.appendChild(taskName);

        if (!task.completed) {
            taskItem.appendChild(completeButton);
        }

        taskItem.appendChild(deleteButton);

        if (task.completed) {
            completedTaskList.appendChild(taskItem);
        } else {
            taskList.appendChild(taskItem);
        }
    });
}
