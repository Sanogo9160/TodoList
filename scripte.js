$(document).ready(function(){
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to display tasks
    function displayTasks() {
        $('#taskList').empty();
        tasks.forEach(function(task){
            $('#taskList').append(`
                <li>
                    <strong>${task.description}</strong><br>
                    Due Date: ${task.dueDate}<br>
                    Priority: ${task.priority}<br>
                    Status: ${task.status}
                </li>
            `);
        });
    }

    // Display existing tasks
    displayTasks();

    // Add Task button click event
    $('#addTaskBtn').click(function(){
        // Get task details
        let description = $('#taskInput').val();
        let dueDate = $('#dueDateInput').val();
        let priority = $('#priorityInput').val();
        let status = $('#statusInput').val();

        // Create task object
        let task = {
            description: description,
            dueDate: dueDate,
            priority: priority,
            status: status
        };

        // Add task to array
        tasks.push(task);

        // Update local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Display tasks
        displayTasks();

        // Clear input fields
        $('#taskInput').val('');
        $('#dueDateInput').val('');
        $('#priorityInput').val('');
        $('#statusInput').val('');
    });
});
