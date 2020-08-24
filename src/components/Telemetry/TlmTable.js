import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(id, time, event, explain, color) {
  return { id, time, event, explain, color };
}

const rows = [
  createData(1, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(2, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(3, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(4, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(5, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(6, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightgreen"),
  createData(7, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(8, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(9, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(10, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(11, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(12, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(13, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightblue"),
  createData(14, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "yellow"),
  createData(15, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "yellow"),
  createData(16, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "yellow"),
  createData(17, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "yellow"),
  createData(18, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "coral"),
  createData(19, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "coral"),
  createData(20, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "coral"),
  createData(21, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "coral"),
  createData(22, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "coral"),
  createData(23, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "red"),
  createData(24, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightskyblue"),
  createData(25, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightskyblue"),
  createData(26, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightskyblue"),
  createData(27, '00:12:00 15.7.2020', "Sat is great", "Sat is great yoh", "lightskyblue"),
  createData(28, '00:12:00 15.7.2020', "Sat is great all over again", "Sat is great yoh 22222", "lightskyblue"),
];


export default function DenseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell width="20px">num</TableCell>
            <TableCell width="160px" className="SmallCell">Event time</TableCell>
            <TableCell>Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}
              onClick={() => {
                props.changeSelection("tlmEvents_" + row.id);
                props.changeMessage(row.explain + row.id);
              }}
              style={{ backgroundColor: row.color }}
              className={row.id == props.selectedID.split('_')[1] &&
                props.selectedID.includes("tlmEvents") ? "ChoosenLine" : null}>
              <TableCell scope="row">
                {row.id}
              </TableCell>
              <TableCell scope="row">
                {row.time}
              </TableCell>
              <TableCell>
                {row.event}2
							</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}