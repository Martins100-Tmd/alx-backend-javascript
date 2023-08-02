const table = document.createElement("table") as HTMLTableElement;

interface Student {
  firstName: string;
  lastName: string;
  location: string;
  age: number;
}

//array header element
let headName: string[] = ["firstName", "lastName", "location", "age"];

let studentA: Student = {
  firstName: "Martins",
  lastName: "Olumide",
  location: "Lagos",
  age: 20,
};

let studentB: Student = {
  firstName: "Esther",
  lastName: "Okolie",
  location: "Anambra",
  age: 18,
};

//Array of our two students
let bothStudents: Student[] = [student1, student2];

function setTable() {
  //Loop to set our students value into the row cells
  for (let i = 0; i < bothStudents.length; i++) {
    let bodyRow = TABLE.insertRow(i);
    bodyRow.insertCell(0).innerHTML = bothStudents[i].firstName;
    bodyRow.insertCell(1).innerHTML = bothStudents[i].lastName;
    bodyRow.insertCell(2).innerHTML = bothStudents[i].location;
    bodyRow.insertCell(3).innerHTML = `${bothStudents[i].age}`;
  }

  //creating a table head
  let header = TABLE.createTHead();

  //getting the first row in the created table head
  let headerRow = header.insertRow(0);

  //looping to set the headers elements into the table head cells
  for (let i = 0; i < headers.length; i++) {
    headerRow.insertCell(i).innerHTML = `${headers[i]}`;
  }

  TABLE.tHead.id = "thead";

  //appending to the document body
  document.body.appendChild(TABLE);
}

//CSS3 styling for table element;
let cssStyle = `thead {
            background-color: rgb(233, 233, 233);
            padding: 10px;
            border-radius: 4px;
        }

        thead tr {
            background-color: #aaa;
            border-radius: 4px;
            border: 2px solid gray
        }

        thead tr td {
            padding: 5px;
            text-align: center;
            border-left: 2px solid gray;
        }

        table {
            width: 50%;
            margin: auto;
            box-shadow: 2px 2px 2px rgb(230, 230, 230);
            border-collapse: collapse;
            height: 100px;
            border-radius: 4px;
        }

        tbody {
            width: 100%;
            padding: 4px;
            border: 2px solid gray;
        }

        tbody tr:nth-child(even) {
            background-color: #eee;
        }

        tbody tr td {
            border: 2px solid gray;
            text-align: center;
        }

        tbody tr td:hover{
          background-color: #bbb;
        }
`;

setTable();

//creating a style tag
const styleElementTag = document.createElement("style");

styleElement.innerHTML = cssStyle;

//Inserting before the end of the head tag in html
document.head.insertAdjacentElement("beforeend", styleElementTag);

//Inserting to body
console.log(document.getElementById("thead"));

