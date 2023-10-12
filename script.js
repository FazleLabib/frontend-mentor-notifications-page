const sections = document.querySelectorAll("#sections .section-item");
const counter = document.getElementById("counter");
const markAll = document.getElementById("mark-all");

let unreadCount = 0;

sections.forEach(section => {
    if (section.classList.contains("unread")) {
        unreadCount++;
    }
});

function removeUnreadClasses(section) {
    if (section.classList.contains("unread")) {
        section.classList.remove("unread");
        const heading = section.querySelector(".heading");
        heading.classList.remove("unread-heading");
        unreadCount--;
    }
}

function clearNotifications() {
    sections.forEach(removeUnreadClasses);
    setCounter();
}

function setCounter() {
    counter.innerHTML = unreadCount;
}

markAll.addEventListener("click", clearNotifications);

sections.forEach(section => {
    section.addEventListener("click", function () {
        removeUnreadClasses(section);
        setCounter();
    });
});
