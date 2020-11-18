import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StudentTableRow from "./StudentTableRow";

const useStyles = makeStyles({});

export default function StyledTable({ className }) {
    const classes = useStyles();
    const data = [{}];
    return (
        <TableContainer component={Paper} elevation={3} className={className}>
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Imię i Nazwisko</TableCell>
                        <TableCell align="right">Numer zadania</TableCell>
                        <TableCell align="right">data dodania</TableCell>
                        <TableCell align="right">Liczba plusów</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {data.map((student) => (
                        <StudentTableRow student={student} key={student.id} />
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
