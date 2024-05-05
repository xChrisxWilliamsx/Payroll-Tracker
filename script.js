// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  
  let setConfirm = true;
  let employeesArray = [];
    while (setConfirm === true) {
      const firstName = prompt("Enter First Name:");
      const lastName = prompt("Enter Last Name:");
      let salary = NaN;
      while (isNaN (salary)) {
        salary = parseFloat(prompt("Enter Salary:"));
      }
      setConfirm = confirm("Would you like to add another employee?");
      employeesArray.push({firstName:firstName, lastName:lastName, salary:salary});
    }
    return employeesArray;

  }

// Display the average salary // TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {

  let avgSalary = 0;
  
  for (const singleEmp of employeesArray) {
    avgSalary += singleEmp.salary;
  }

  avgSalary /= employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${avgSalary.toFixed(2)}`);

}

// Select a random employee // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {

  const randEmp = Math.floor(Math.random() * employeesArray.length);
  const employee = employeesArray[randEmp]
  console.log(`Congrats to ${employee.firstName} ${employee.lastName}, our random drawling winner!`); 

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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
