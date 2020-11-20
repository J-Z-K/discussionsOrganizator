import React from "react";
import StudentInput from "./StudentInput";
import StudentsTable from "./StudentsTable";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: "50px 0 0 0",
    },
    table: {
        width: 650,
        margin: "30px 0 60px",
    },
    input: {
        marginBottom: 60,
    },
});

function Students({ students }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Lista uczestników:</Typography>
            <StudentInput className={classes.input} />
            <StudentsTable data={students} className={classes.table} />
        </div>
    );
}

export default Students;
