import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

function MenuBar({ location }) {
    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper>
                <Tabs
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="Lista" value="/" component={Link} to="/" />
                    <Tab
                        label="Lista Studentów"
                        value="/uczestnicy"
                        component={Link}
                        to="/uczestnicy"
                    />
                </Tabs>
            </Paper>
        </div>
    );
}

export default MenuBar;
