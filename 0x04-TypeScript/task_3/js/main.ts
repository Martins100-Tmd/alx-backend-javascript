/// <reference path="crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

let row: RowElement = {
  firstName: "Guillame",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.insertRow(updatedRow);

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(23);

