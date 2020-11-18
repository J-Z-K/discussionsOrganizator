import { Button, TextField } from "@material-ui/core";
import React from "react";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
    textFields: {
        margin: "20px 0 10px",
        display: "flex",
        gap: 20,
    },
});

function TaskInput({ className, students }) {
    const [task, setTask] = React.useState(0);
    const [section, setSection] = React.useState(0);
    const [student, setStudent] = React.useState({});
    const handleSubmit = (event) => {
        //Make a network call somewhere
        event.preventDefault();
        console.log(student);
        // const db = firebase.firestore();
        // db.collection("students").add({
        //     name: name,
        //     surname: surname,
        //     pluses: parseInt(pluses),
        // });
    };

    const classes = useStyles();

    return (
        <div className={className}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.textFields}>
                    <Autocomplete
                        id="name_and_surname"
                        options={students}
                        onChange={(e, val) => setStudent(val)}
                        getOptionLabel={(option) =>
                            `${option.name} ${option.surname}`
                        }
                        style={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Imię i nazwisko"
                                required
                            />
                        )}
                    />
                    <TextField
                        required
                        id="task_num"
                        label="Numer zadania"
                        type="number"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <TextField
                        required
                        id="task_num"
                        label="Numer działu"
                        type="number"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                </div>
                <Button
                    label="Submit"
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Dodaj
                </Button>
            </form>
        </div>
    );
}

export default TaskInput;
