import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Students from "./Students/Students";
import MenuBar from "./MenuBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from "./Tasks/Tasks";
import firebase from "../firebase";
import { currentClass } from "../time";

function App() {
    const useStyles = makeStyles({
        root: {},
        container: {
            margin: "50px auto",
            maxWidth: "1000px",
        },
    });
    const [students, setStudents] = React.useState([]);
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("students").onSnapshot((snapshot) => {
            const studentsData = [];
            snapshot.forEach((doc) =>
                studentsData.push({ ...doc.data(), id: doc.id }),
            );
            setStudents(studentsData);
        });
        return unsubscribe;
    }, []);

    React.useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection(`list-${currentClass.toLocaleDateString("pl-PL")}`)
            .onSnapshot((snapshot) => {
                const ListData = [];
                snapshot.forEach((doc) => {
                    ListData.push({ ...doc.data(), id: doc.id });
                });
                setList(ListData);
            });
        return unsubscribe;
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router>
                <Route
                    path="/"
                    render={({ location }) => (
                        <>
                            <MenuBar location={location} />
                            <div className={classes.container}>
                                <Typography variant="h2">Fizyka</Typography>
                                <Typography>
                                    super efektywna lista na ćwiczenia
                                </Typography>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        render={() => (
                                            <Tasks
                                                list={list}
                                                students={students}
                                                currentClass={currentClass}
                                            />
                                        )}
                                    />
                                    <Route
                                        path="/uczestnicy"
                                        render={() => (
                                            <Students students={students} />
                                        )}
                                    />
                                </Switch>
                            </div>
                        </>
                    )}
                />
            </Router>
        </div>
    );
}

export default App;
