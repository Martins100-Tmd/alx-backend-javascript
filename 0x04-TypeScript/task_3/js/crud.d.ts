import { RowElement, RowID } from "./interface";
type row = number;

type deleteRow = (rowId: RowID) => void;

type insertRow = (rowId: RowElement) => void;

type updateRow = (rowId: RowID, row: RowElement) => void;

