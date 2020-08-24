import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DnsIcon from '@material-ui/icons/Dns';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);
	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
		>
			<BottomNavigationAction label="סדרה" icon={<DnsIcon />} />
			<BottomNavigationAction label="תחילת סדרה" icon={<AlarmOnIcon />} />
			<BottomNavigationAction label=" סוף סדרה" icon={<WhatshotIcon />} />
			<BottomNavigationAction label="שחרור קבצים" icon={<TrendingUpIcon />} />
			<BottomNavigationAction label="שחרור קבצים" icon={<AssignmentTurnedInIcon />} />


		</BottomNavigation>
	);
}
