import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";
import firebase from "../firebase";
import { now } from "../time";

function TaskTableRow({ task }) {
    const [student, setStudent] = React.useState({});
    const created = task.created
        ? {
              date: task.created.toDate().toLocaleDateString("pl-PL", {
                  day: "numeric",
                  month: "numeric",
              }),
              time: task.created.toDate().toLocaleTimeString("pl-PL", {
                  hour: "2-digit",
                  minute: "2-digit",
              }),
          }
        : {
              date: new Date().toLocaleDateString("pl-PL", {
                  day: "numeric",
                  month: "numeric",
              }),
              time: new Date().toLocaleTimeString("pl-PL", {
                  hour: "2-digit",
                  minute: "2-digit",
              }),
          };

    React.useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = task.student.onSnapshot((doc) => {
            setStudent(doc.data());
        });
        return unsubscribe;
    }, []);

    return (
        <TableRow>
            <TableCell>{`${student.name} ${student.surname}`}</TableCell>
            <TableCell align="right">{task.task}</TableCell>
            <TableCell align="right">{task.section}</TableCell>
            <TableCell align="right">
                {`${created.time} ${created.date}`}
            </TableCell>
            <TableCell align="right">{student.pluses}</TableCell>
        </TableRow>
    );
}

export default TaskTableRow;
