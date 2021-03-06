import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TaskTableRow from "./TaskTableRow";

const useStyles = makeStyles({});

export default function TaskList({ className, tasks, students }) {
    const classes = useStyles();

    // const sortFunc =

    tasks.sort((a, b) => {
        if (a.s.pluses < b.s.pluses) return -1;
        if (a.s.pluses > b.s.pluses) return 1;
        if (a.created && b.created) {
            if (a.created.toDate() < b.created.toDate()) return -1;
            if (a.created.toDate() > b.created.toDate()) return 0;
        }
    });

    return (
        <TableContainer component={Paper} elevation={3} className={className}>
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Imię i Nazwisko</TableCell>
                        <TableCell align="right">Zadanie</TableCell>
                        <TableCell align="right">Dział</TableCell>
                        <TableCell align="right">data dodania</TableCell>
                        <TableCell align="right">Liczba plusów</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => {
                        console.log(
                            students.find(
                                (student) => student.id == task.studentID,
                            ),
                        );
                        return <TaskTableRow task={task} key={task.id} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
