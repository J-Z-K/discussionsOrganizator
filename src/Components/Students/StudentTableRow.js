import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import firebase from "../../firebase";

function StudentTableRow({ student }) {
    const onChange = (val) => {
        const db = firebase.firestore();
        const pluses = student.pluses + val;
        db.collection("students")
            .doc(student.id)
            .set({ ...student, pluses });
    };

    return (
        <TableRow>
            <TableCell>{`${student.name} ${student.surname}`}</TableCell>
            <TableCell align="right">
                {student.pluses}
                <IconButton
                    size="small"
                    aria-label="up"
                    onClick={() => onChange(1)}
                >
                    <ArrowUpwardIcon />
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="down"
                    onClick={() => onChange(-1)}
                >
                    <ArrowDownwardIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default StudentTableRow;
