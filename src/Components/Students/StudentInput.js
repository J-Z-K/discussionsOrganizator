import { Button, TextField } from "@material-ui/core";
import React from "react";
import firebase from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    textFields: {
        margin: "20px 0 10px",
        display: "flex",
        "& .MuiFormControl-root": {
            marginRight: 20,
        },
    },
});

function StudentInput({ className }) {
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [pluses, setPluses] = React.useState(0);
    const handleSubmit = (event) => {
        //Make a network call somewhere
        event.preventDefault();

        const db = firebase.firestore();
        db.collection("students").add({
            name: name,
            surname: surname,
            pluses: parseInt(pluses),
        });
    };

    const classes = useStyles();

    return (
        <div className={className}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.textFields}>
                    <TextField
                        required
                        id="name"
                        label="Imię"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="surname"
                        label="Nazwisko"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <TextField
                        required
                        id="pluses"
                        label="Ilość plusów"
                        type="number"
                        value={pluses}
                        onChange={(e) => setPluses(e.target.value)}
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

export default StudentInput;
