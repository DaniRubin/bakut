import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(time, event, explain) {
	return { time, event, explain };
}

const rows = [
	createData('00:12:00 15.7.2020', "Sat is great", "Sat is great yoh"),
	createData('00:12:00 15.7.2020', "Sat is great all over again", "Sat is great yoh 22222"),
];


export default function DenseTable() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell width="160px" className="SmallCell">Event time</TableCell>
						<TableCell>Calories</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.time}>
							<TableCell scope="row">
								{row.time}
							</TableCell>
							<TableCell>

								{/* <Tooltip disableFocusListener disableTouchListener title={row.explain}> */}
								{/* <div aria-describedby={id} type="button" onClick={handleClick}>
									{row.event}
								</div>
								<Popper id={id} open={open} anchorEl={anchorEl}>
									<div className="PopupContent">{row.explain}</div>
								</Popper> */}


								{/* popup   */}
								<span class="popup" onclick="myPopup(this)">
									{row.event}
									<span class="popuptext" id="myPopup">
										{row.explain}
									</span>
								</span>


								{/* </Tooltip> */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}