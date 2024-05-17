
let a = document.getElementById('tasks');

window.onload = function() {
    // Get the tasks from localStorage
    let tasks = localStorage.getItem('tasks');

    // Parse the tasks into an array
    tasks = tasks ? JSON.parse(tasks) : [];

    // Get the parent element
    let a = document.getElementById('tasks');

    // Recreate each task
    tasks.forEach(function(task, index) {
        createTaskElement(task, index);
    });

    // Add event listener for Enter key on the input field
    document.getElementById('taskInput').addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            myfun();
        }
    });
}

function myfun() {
    // Get the value of the input
    let input = document.getElementById('taskInput').value;

    if (input.trim() === "") return; // Prevent adding empty tasks

    // Get the old tasks from localStorage
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];

    // Add the new task to the array
    tasks.push(input);

    // Store the updated tasks in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Create a new task element
    createTaskElement(input, tasks.length - 1);

    // Clear the input value
    document.getElementById('taskInput').value = '';
}

function createTaskElement(task, index) {
    // Create a new element
    let x = document.createElement('div');
    x.classList.add('taskContent');
    a.appendChild(x);

    let y = document.createElement('i');
    y.classList.add('fa', 'fa-circle');
    y.onclick = function() { toggleTaskCompletion(p, y); }; // Add toggle functionality to y
    x.appendChild(y);

    let p = document.createElement('span');
    p.id = 'tasktext' + index; // Add a unique ID to each task
    p.innerHTML = task;
    x.appendChild(p);

    let z = document.createElement('i');
    z.classList.add('fa', 'fa-trash', 'icont');
    z.onclick = function() { deleteTask(index); };
    x.appendChild(z);

    let h  = document.createElement('hr');
    x.appendChild(h);
}

function deleteTask(index) {
    // Get the tasks from localStorage
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];

    // Remove the task at the specified index
    tasks.splice(index, 1);

    // Store the updated tasks in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Refresh the task list
    a.innerHTML = '';
    tasks.forEach(function(task, index) {
        createTaskElement(task, index);
    });
}

function toggleTaskCompletion(taskElement, iconElement) {
    // Toggle the line-through decoration on the task text
    taskElement.classList.toggle('completed');
    // Toggle the icon class between fa-circle and fa-check
    if (iconElement.classList.contains('fa-circle')) {
        iconElement.classList.remove('fa-circle');
        iconElement.classList.add('fa-check');
    } else {
        iconElement.classList.remove('fa-check');
        iconElement.classList.add('fa-circle');
    }
}







var button = document.getElementById("mybtn");
var originalColor = button.style.backgroundColor; // Store the original color

button.addEventListener("click", function() {
    var targetColor = "#75E6DA"; // Change this to your desired specific color
    
    // Change the background color of the button
    button.style.backgroundColor = targetColor;

    // After a delay (in this example, 1 second), revert back to the original color
    setTimeout(function() {
        button.style.backgroundColor = originalColor;
    }, 250); // Adjust the duration as needed
});












