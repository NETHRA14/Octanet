document.getElementById('add-task').addEventListener('click', function() {
    let taskText = document.getElementById('new-task').value;
    if (taskText === '') return;
    
    let taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
    
    taskItem.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(taskItem);
    
    document.getElementById('new-task').value = '';
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});