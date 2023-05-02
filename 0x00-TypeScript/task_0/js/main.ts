interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jarad",
  lastName: "Anthony",
  age: 24,
  location: "Chicago",
};

const student2: Student = {
  firstName: "Gustav",
  lastName: "Elijah",
  age: 29,
  location: "Sweden",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
// Create the header row with "Name" and "City" columns
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.innerHTML = "<b>First Name</b>";
const headerCell2 = headerRow.insertCell();
headerCell2.innerHTML = "<b>Location</b>";
// Loop over each student and create a row with name and city cells
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.innerHTML = student.firstName;
  const cell2 = row.insertCell();
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
