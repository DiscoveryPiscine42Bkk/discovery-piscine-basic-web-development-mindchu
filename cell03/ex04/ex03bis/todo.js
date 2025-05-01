$(document).ready(function() {
    var task = [];
    getCookies();

    $('#new').click(function() {
        let new_task = prompt("Add new to-do:");
        if (new_task == null || new_task.trim() === "") {
            alert("New to-do cannot be empty!");
            return;
        }

        addTaskToUI(new_task);
        task.push(new_task);
        saveTasksToCookies();
    });

    function addTaskToUI(taskText) {
        var $taskItem = $('<div>').text(taskText);
        $taskItem.click(function() {
            removeTask(taskText, $taskItem);
        });
        $('#ft_list').prepend($taskItem);
    }

    function removeTask(taskText, $taskElement) {
        var remove_task = confirm("Are you sure you want to remove this to-do?");
        if (remove_task) {
            const index = task.indexOf(taskText);
            if (index > -1) {
                task.splice(index, 1);
                saveTasksToCookies();
            }
            $taskElement.remove();
        }
    }

    function getCookies() {
        const theCookie = document.cookie;
        if (theCookie) {
            const cookies = theCookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.startsWith("tasks=")) {
                    const taskValues = cookie.substring("tasks=".length).split(',');
                    if(taskValues[0] !== ""){
                        task = taskValues;
                        task.forEach(addTaskToUI);
                    }
                    break;
                }
            }
        }
    }

    function saveTasksToCookies() {
        document.cookie = "tasks=" + task.join(',') + "; path=/";
    }
});