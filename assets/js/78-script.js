import { students } from "../data/students.js";

document.getElementById("btnShowLowScores").addEventListener("click", () => {
  setColorForLowScores();
});

const setColorForLowScores = () => {
  const studentRows = document.querySelectorAll("#tblStudents tbody tr");

  const isBelowPassing = (score) => score < 60;

  const addDangerClass = (row) => row.classList.add("table-danger");

  studentRows.forEach((row) => {
    const score = row.querySelector("td:nth-child(3)").innerText;
    if (isBelowPassing(score)) {
      addDangerClass(row);
    }
  });
};

const updateTable = () => {
  const tableRows = students.map(
    (student, index) => `
        <tr class='data-row'>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.point}</td>
            <td><button class='btn btn-link'><i class="btn-del bi bi-trash text-dark fs-4"></i></button></td>
        </tr>
    `
  );

  const tableBody = document.querySelector("#tblStudents tbody");
  tableBody.innerHTML = tableRows.join("");
};

document.getElementById('tblStudents').addEventListener('click',(e)=>{
  console.log(e.target)
  if(e.target.classList.contains('btn-del')){
    const name=e.target.closest('tr').children[1].innerText;
    const result=confirm(`${name} isimli kaydi silmek istiyor musunuz? `);
    if(result){
      e.target.closest('tr').remove();
    }
  }
  else if(e.target.closest('tr').classList.contains('data-row')){
    e.target.closest('tr').classList.toggle('table-info');
  }
});

updateTable();

// document.querySelectorAll(".btn-del").forEach((t) => {
//   t.addEventListener("click", () => {
//     alert("ok");
//   });
// });
