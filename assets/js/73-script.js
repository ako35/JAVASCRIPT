import { students } from "../data/students.js";

document.getElementById('btnShowLowScores').addEventListener('click',()=>{
    setColorForLowScores();
})

const setColorForLowScores = () => {
    const studentRows = document.querySelectorAll('#tblStudents tbody tr');
  
    const isBelowPassing = (score) => score < 60;
  
    const addDangerClass = (row) => row.classList.add('table-danger');
  
    studentRows.forEach((row) => {
      const score = row.querySelector('td:last-child').innerText;
      if (isBelowPassing(score)) {
        addDangerClass(row);
      }
    });
  };

const updateTable = () => {
    const tableRows = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.point}</td>
        </tr>
    `);
  
    const tableBody = document.querySelector("#tblStudents tbody");
    tableBody.innerHTML = tableRows.join('');
  };
  

updateTable();
