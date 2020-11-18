import React from "react";
import StyledTable from "./StyledTable";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Students from "./Students";
import MenuBar from "./MenuBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from "./Tasks";
import firebase from "../firebase";

function App() {
    const useStyles = makeStyles({
        root: {},
        container: {
            margin: "50px auto",
            maxWidth: "1000px",
        },
    });
    const [students, setStudents] = React.useState([]);

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
                                                list={{}}
                                                students={students}
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
