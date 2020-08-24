import '../../App.css'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '../utils/select';
import TlmTable from './TlmTable'
import Card from '@material-ui/core/Card';
import ParamsTable from './ParamsTable'


import IrregularEvents from './IrregularEvents.js'
export default function Telemetry() {
    const [value, setValue] = useState(0);
    const [showTlm, setShowTlm] = useState(false);
    const [messageToShow, changeMessage] = useState(null);
    const [selectedID, changeSelection] = useState("null");


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
        setShowTlm(true);
    }
    const handleRefresh = () => {
        console.log("Refresh!");
        setShowTlm(false);
    }
    console.log(messageToShow);

    return (
        <div>
            <div className="selectionPart">
                <Select handleChange={handleChange} age={state.age} />
                <TextField id="standard-basic" label="Pass -    " type="number" value={value} onChange={onChange} />
                <Button variant="contained" className="refreshButton" onClick={handleRefresh}>
                    <i className="material-icons">&#xe5d5;</i>
                </Button>
                <Button variant="contained" color="primary" className="ButtonShowTlm" onClick={handleShow}>Show</Button>
                <Card className="card"> {selectedID !== "null" ? selectedID : null} </Card>
            </div>


            <div className="TlmTable">
                {showTlm &&
                    <TlmTable className=""
                        selectedID={selectedID}
                        changeMessage={changeMessage}
                        changeSelection={changeSelection} />}
            </div>
            <div className="leftSide">
                <div className="irregulatEventsTable ">
                    {showTlm &&
                        <IrregularEvents className=""
                            selectedID={selectedID}
                            changeMessage={changeMessage}
                            changeSelection={changeSelection} />}
                </div>
                <div className="paramsTable">
                    {showTlm && <ParamsTable className=""
                        selectedID={selectedID}
                        changeMessage={changeMessage}
                        changeSelection={changeSelection} />}
                </div>
            </div>
        </div>
    )
}