import React from "react";
import TaskList from "./TaskTable";
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
    important: {
        fontWeight: "bolder",
    },
});

function Tasks({ list, students, currentClass }) {
    const classes = useStyles();

    // console.log(dates);

    return (
        <div className={classes.root}>
            <Typography variant="h4">
                {" "}
                Lista na dzień:{" "}
                <span className={classes.important}>
                    {currentClass.toLocaleDateString("pl-PL")}
                </span>
            </Typography>
            <TaskInput
                className={classes.input}
                students={students}
                currentClass={currentClass}
            />

            <TaskList
                tasks={list.map((task) => ({
                    ...task,
                    s: students.find((student) => student.id == task.studentID),
                }))}
                students={students}
                className={classes.table}
            />
        </div>
    );
}

export default Tasks;
