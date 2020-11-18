import React from "react";
import StudentInput from "./StudentInput";
import TaskList from "./TaskList";
import StyledTable from "./StyledTable";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TaskInput from "./TaskInput";

const useStyles = makeStyles({
    root: {
        margin: "50px 0 0 0",
    },
    table: {
        width: 1000,
        margin: "30px 0 60px",
    },
    input: {
        marginBottom: 60,
    },
});

function Tasks({ list, students }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Lista Zadań:</Typography>
            <TaskInput className={classes.studentInput} students={students} />
            <TaskList data={list} className={classes.table} />
        </div>
    );
}

export default Tasks;
