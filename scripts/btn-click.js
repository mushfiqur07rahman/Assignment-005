const buttons = document.querySelectorAll(".completed-btn");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Board Updated Successfully")

        button.disabled = true;

        decreaseTotalTask();

        increaseTotalCompletedTask();

        checkIfAllTasksCompleted();


        const cardTitle = button.parentElement.parentElement.querySelector('h1').innerText;

        activityLog(cardTitle);

    })
})


// Function to decrease the total task value
function decreaseTotalTask() {
    let totalTaskElement = document.getElementById("total-task");
    let totalTask = parseInt(totalTaskElement.innerText, 10) || 0;

    if (totalTask > 0) {
        totalTaskElement.innerText = totalTask - 1;
    }
}


// Function to increase the total completed task value
function increaseTotalCompletedTask() {
    let totalTaskElement = document.getElementById("completed-tasks");
    let totalTask = parseInt(totalTaskElement.innerText, 10) || 0;

    if (totalTask > 0) {
        totalTaskElement.innerText = totalTask + 1;
    }
}

// Function to set innerHTML inside activity section
function activityLog(taskTitle) {
    const logsContainer = document.getElementById("activity-logs");
    const currentTime = new Date().toLocaleTimeString('en-US');

    const newP = document.createElement("p");
    newP.textContent = `You have Complete The Task "${taskTitle}" at ${currentTime}`;

    logsContainer.appendChild(newP);
}




// Clear history btn function
document.getElementById("clear-history-btn")
    .addEventListener("click", function () {
        const logsContainer = document.getElementById("activity-logs");

        const paragraphs = logsContainer.querySelectorAll('p');
        paragraphs.forEach(function (p) {
            p.remove();
        });
    });




// Final Alert
function checkIfAllTasksCompleted() {

    const totalTaskCount = document.getElementById("total-task");
    if (totalTaskCount.innerText === "0") {
        alert("Congrats!!! You have completed all the task.")
    }
}