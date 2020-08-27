import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AdbIcon from '@material-ui/icons/Adb';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import Accordion from './Accordion';

import dani1 from '../../configuration/Dani1.json';
import dani2 from '../../configuration/Dani2.json';
import yard1 from '../../configuration/yard1.json';
import yard2 from '../../configuration/yard2.json';
import dani3 from '../../configuration/Dani3.json';
import dani_N1 from '../../configuration/Dani_N1.json';
import dani_N2 from '../../configuration/Dani_N2.json';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(null);
  const [satName, setSatName] = React.useState('');
  const [config, setConfig] = React.useState({});

  const handleChecklistChange = (event, newValue) => {
    setSatName(list[newValue]);
    setValue(newValue);
    if (newValue === 0) setConfig(dani1);
    else if (newValue === 1) setConfig(dani2);
    else if (newValue === 2) setConfig(dani3);
    else if (newValue === 3) setConfig(dani_N1);
    else if (newValue === 4) setConfig(dani_N2);
    else if (newValue === 5) setConfig(yard1);
    else if (newValue === 6) setConfig(yard2);
    else setConfig({});
  }
  const list = ["דני 1", "דני 2", "דני 3", "דני חדש", "דני חדשדש", "ירד 1", "ירד 2"];
  const handleCloseSat = () => {
    setValue(null);
    setSatName(null);
    setConfig({});
  }
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChecklistChange}
        showLabels
      >
        {list.map(label => {
          let icon
          if (label.includes("דני")) icon = <GitHubIcon />
          if (label.includes("דש")) icon = <TwitterIcon />
          if (label.includes("ירד")) icon = <AndroidIcon />

          return <BottomNavigationAction label={label} icon={icon} />
        })}

      </BottomNavigation>
      <br />
      {satName && <div className="exitButton" onClick={handleCloseSat}>X</div>}
      {satName && <center><h1>{satName}</h1></center>}
      <Accordion config={config} />
    </div>
  );
}
