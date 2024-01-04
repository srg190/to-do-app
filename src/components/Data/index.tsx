import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "@redux/store";
import Popup from "@components/Option";

function createData(
  Id: string,
  Todo: string,
  Status: string,
  assignDate?: Date,
  modifydate?: Date
) {
  return { Id, Todo, Status, assignDate, modifydate };
}
interface TaskData {
  Id: string;
  Todo: string;
  Status: string;
  assignDate?: Date;
  modifydate?: Date;
}

export default function TaskManager() {
  const { tasks } = useAppSelector((state) => state.task);
  const rows: TaskData[] = [];
  Object.keys(tasks).forEach((v) => {
    return rows.push(
      createData(
        v,
        tasks[v].task,
        tasks[v].status,
        tasks[v].assignDate,
        tasks[v].modifydate
      )
    );
  });
  return (
    <TableContainer component={Paper}>
      <Popup />
      <Table
        sx={{ bgcolor: "background.default" }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead sx={{ bgcolor: "secondary.light" }}>
          <TableRow>
            <TableCell align="center">Todo</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Assign Date</TableCell>
            <TableCell align="center">Modify Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("Id", row.Id);
                  e.dataTransfer.effectAllowed = "move";
                  e.dataTransfer.dropEffect = "move";
                }}
                onDrag={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                align="center"
              >
                {row.Todo}
              </TableCell>
              <TableCell align="center">{row.Status}</TableCell>
              <TableCell align="center">
                {row.assignDate?.toLocaleString().split("T")[0] || ""}
              </TableCell>
              <TableCell align="center">
                {row.modifydate?.toLocaleString().split("T")[0] || ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
