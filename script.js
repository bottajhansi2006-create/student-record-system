let students = JSON.parse(localStorage.getItem("attendance")) || [];

// Load data
window.onload = displayStudents;

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        status: "Absent"
    });

    saveData();
    displayStudents();
}

function markPresent(index) {
    students[index].status = "Present";
    saveData();
    displayStudents();
}

function markAbsent(index) {
    students[index].status = "Absent";
    saveData();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.status}</td>
                <td>
                    <button onclick="markPresent(${index})">Present</button>
                    <button onclick="markAbsent(${index})">Absent</button>
                </td>
            </tr>
        `;
    });
}

function saveData() {
    localStorage.setItem("attendance", JSON.stringify(students));
}