import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(id, paramName, value, softMin, softMax, hardMin, hardMax) {
    return { id, paramName, value, softMin, softMax, hardMin, hardMax };
}

const rows = [
    createData(1, 'A10', 10, 1, 2, 0, 50),
    createData(2, 'A10', 10, 1, 2, 0, 50),
    createData(3, 'A10', 10, 1, 2, 0, 50),
    createData(4, 'A10', 10, 1, 2, 0, 50),
    createData(5, 'A10', 10, 1, 2, 0, 50),
    createData(6, 'A10', 10, 1, 2, 0, 50),
    createData(7, 'A10', 10, 1, 2, 0, 50),
    createData(8, 'A10', 10, 1, 2, 0, 50),
    createData(9, 'A10', 10, 1, 2, 0, 50),
];


export default function DenseTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell width="20px">num</TableCell>
                        <TableCell className="SmallCell">Param name</TableCell>
                        <TableCell>value</TableCell>
                        <TableCell>soft min</TableCell>
                        <TableCell>soft max</TableCell>
                        <TableCell>hard min</TableCell>
                        <TableCell>hard max</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}
                            onClick={() => {
                                props.changeSelection("params_" + row.id);
                                props.changeMessage(row.explain + row.id);
                            }}
                            className={row.id == props.selectedID.split('_')[1] &&
                                props.selectedID.includes("params") ? "ChoosenLine" : null}>                            <TableCell scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell scope="row">
                                {row.paramName}
                            </TableCell>
                            <TableCell>
                                {row.value}
                            </TableCell>
                            <TableCell>
                                {row.softMin}
                            </TableCell>
                            <TableCell>
                                {row.softMax}
                            </TableCell>
                            <TableCell>
                                {row.hardMin}
                            </TableCell>
                            <TableCell>
                                {row.hardMax}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}