import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

function createData(name, taskNr, section, plusCount) {
    return { name, taskNr, section, plusCount };
}

const rows = [
    createData("Mikhail Ermolaev", 159, 5, 0),
    createData("Miłosz Hańczyk", 237, 5, 0),
    createData("Rafał Ciupek", 262, 5, 2),
    createData("Tymur Babenko", 305, 5, 0),
    createData("Bartosz Gil", 356, 5, 1),
];

export default function StyledTable({ th, data }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {th.map((th) => (
                            <TableCell key={th}>{th}</TableCell>
                        ))}
                        <TableCell> </TableCell>
                        {/* <TableCell>Imię i Nazwisko</TableCell>
                        <TableCell>Numer zadania</TableCell>
                        <TableCell>Dział</TableCell>
                        <TableCell>Plusy</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row[0]}>
                            {row.slice(1).map((data, i) => (
                                <TableCell key={i}>{data}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
