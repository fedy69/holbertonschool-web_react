// Define the interface for a Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create instances of the Student interface
let student1: Student = {
    firstName: 'fedi',
    lastName: 'chiahoui',
    age: 24,
    location: 'Tunis',  // Corrected capitalization
};

let student2: Student = {
    firstName: 'fedio',
    lastName: '',
    age: 23,
    location: 'France',
};

// Store the students in an array
let studentsList: Array<Student> = [student1, student2];

// Access the body element of the HTML document
let body: HTMLBodyElement = document.getElementsByTagName('body')[0];

// Create a table element
let table: HTMLTableElement = document.createElement("table");

// Create table header and body sections
let header: HTMLTableSectionElement = table.createTHead();
let tbody: HTMLTableSectionElement = table.createTBody();

// Create header row and cells
const header_row: HTMLTableRowElement = header.insertRow(0);
let col_1: HTMLTableCellElement = header_row.insertCell(0);
let col_2: HTMLTableCellElement = header_row.insertCell(1);
col_1.innerHTML = "First Name";  // Corrected spelling
col_2.innerHTML = "Location";

// Append header to the table
table.append(header);

// Iterate over student records to render them in the table
studentsList.forEach(student => {
    let row: HTMLTableRowElement = tbody.insertRow(-1);
    let name_cell: HTMLTableCellElement = row.insertCell(0);
    let location_cell: HTMLTableCellElement = row.insertCell(1);
    name_cell.innerHTML = student.firstName;
    location_cell.innerHTML = student.location;
});

// Append tbody to the table
table.append(tbody);

// Append the table to the body of the HTML document
body.append(table);
