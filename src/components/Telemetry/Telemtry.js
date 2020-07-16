import '../../App.css'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from './select';
import TlmTable from './TlmTable'
export default function Telemetry() {
    const [value, setValue] = useState(0);

    const onChange = (event) => {
        setValue(event.target.value)
    }
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const handleShow = () => {
        alert("Sat - " + state.age + " pass - " + value)
    }
    const handleRefresh = () => {
        console.log("Refresh!")
    }

    return (
        <div>
            <Select handleChange={handleChange} age={state.age} />
            <TextField id="standard-basic" label="Standard" type="number" value={value} onChange={onChange} />

            <Button variant="contained" className="refreshButton" onClick={handleRefresh}>
                <i className="material-icons">&#xe5d5;</i>
            </Button>

            <Button variant="contained" color="primary" className="ButtonShowTlm" onClick={handleShow}>Show</Button>

            <br />
            <br />
            <br />
            <div className="TlmTable">
                <TlmTable className="" />
            </div>
        </div>
    )
}