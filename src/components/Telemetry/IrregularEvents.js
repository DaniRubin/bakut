import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(id, time, event, explain) {
    return { id, time, event, explain };
}

const rows = [
    createData(1, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(2, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(3, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(4, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(5, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(6, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(7, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(8, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(9, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(10, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(11, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(12, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(13, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(14, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(15, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(16, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(17, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(18, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(19, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(20, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(21, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(22, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(23, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(24, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(25, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(26, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(27, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
    createData(28, '00:12:00 15.7.2020', "Sat is great all over again", "Sat is great yoh 22222"),
];


export default function DenseTable(props) {
    // const [selectedID, changeSelection] = useState("null");
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell width="20px" className="SmallCell">num</TableCell>
                        <TableCell width="160px" className="SmallCell">Event time</TableCell>
                        <TableCell>Event</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}
                            onClick={() => {
                                props.changeSelection("irregularEvents_" + row.id);
                                props.changeMessage(row.explain + row.id);
                            }}
                            className={row.id == props.selectedID.split('_')[1] &&
                                props.selectedID.includes("irregularEvents") ? "ChoosenLine" : null}>
                            <TableCell size="small">
                                {row.id}
                            </TableCell>
                            <TableCell scope="row">
                                {row.time}
                            </TableCell>
                            <TableCell>
                                {row.event}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}