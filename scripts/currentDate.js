
// Current Date and Week Day show

function showCurrentDate() {
    const today = new Date();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekdayName = weekdays[today.getDay()];

    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    document.getElementById("weekday").innerText = weekdayName;
    document.getElementById("full-date").innerText = formattedDate;
}

showCurrentDate();



// Current Date show on cards

function showNextDate() {
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    const dateElements = document.getElementsByClassName("card-date");
    for (let element of dateElements) {
        element.innerText = formattedDate;
    }
}

showNextDate();
