import React from 'react';
import { } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let content = <div class="ChecklistPart"><center>No data</center></div>
  if (props.config.Sections) content = <div class="ChecklistPart">
    {props.config.Sections.map(section => {
      return <Accordion key={section} expanded={expanded === section} onChange={handleChange(section)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{section}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.config[section].map(checklist =>
              <div><FormControlLabel
                value={checklist}
                control={<Checkbox color="primary" />}
                label={checklist}
                labelPlacement="end"
              /></div>
              // <p>{checklist}</p>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    })}
  </div>
  return content

}