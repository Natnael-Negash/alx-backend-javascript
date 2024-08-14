interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: "nati"
	lastName: "negash"
	age: 21
	location: "Addis Ababa"
};

const student2: Student = {
	firstName: "Amanuel"
	lastName: "Negash"
	age: 23
	location: "Arsi"
};

const studentsList: Array<Student> = [student1, student2];

// Get the table element
const table = document.createElement("table");

// Loop through the studentsList array
studentsList.forEach((student) => {
  // Create a new row
  const row = document.createElement("tr");

  // Create a cell for the first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Create a cell for the location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
