// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Initializing an array tp store the employee objects.
let employeeData = {
  employees: [],
  getAverageSalary: function () {
    let totalSalary = 0;
    let employeeCount = this.employees.length;
    console.log("Iterate through the employees array to calculate total salary and employee count");
    for (const employee of this.employees) {
      totalSalary += employee.salary
    }
    console.log(`Got back total employee count as: ${employeeCount} and total salary as: ${totalSalary}`);
    let avgSalary = 0;
    if (employeeCount != 0) {
      avgSalary = (totalSalary / employeeCount).toFixed(2);
      console.log(`Got back avgSalary as: ${avgSalary}`);
    }
    console.log(`The average employee salary between our ${employeeCount} employee(s) is $${avgSalary}!`);
  }
};

console.log("Employee data object template: ");
console.log(employeeData);

// Collect employee data
const collectEmployees = function () {
  // Initializing an object to record employee data.

  let play = 1;
  while (play) {
    let employeeRecordObject = {
      firstName: "",
      lastName: "",
      salary: 0
    };
    // TODO: Get user input to create and return an array of employee objects
    console.log("Gather first name");
    let firstName = prompt("Enter first name!");
    employeeRecordObject.firstName = firstName;

    console.log("Gather last name");
    let lastName = prompt("Enter last name!");
    employeeRecordObject.lastName = lastName;

    console.log("Gather salary");
    let salary = prompt("Enter employee salary!");
    console.log("Converting salary from string to number");
    salary = Number(salary);
    employeeRecordObject.salary = salary;

    console.log("---Collected employee record data---");
    console.log(employeeRecordObject);
    console.log("Adding the employee record to the employeeData object.");
    employeeData.employees.push(employeeRecordObject);

    console.log("---Employee data object so far!---");
    console.log(employeeData.employees);

    if (!window.confirm("Do you want to add another employee?")) {
      play = 0;
    }
  }
  return employeeData.employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  employeeData.getAverageSalary();
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomInt = Math.floor(Math.random() * employeesArray.length);
  let chosenEmployee = employeesArray[randomInt];
  console.log("===========");
  console.log(`Congratulation to ${chosenEmployee.firstName} ${chosenEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
