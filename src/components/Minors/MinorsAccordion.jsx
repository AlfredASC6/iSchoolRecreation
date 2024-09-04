import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../../../src/App.css';

export default function MinorsAccordion(props){
    return(
        <div className='accordion'>
            <Accordion className = 'acc'>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header">
                    <Typography className = "uppercase toBeBolded">{props.name}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    {/* <Typography className='toBeBolded'>{props.title}</Typography> */}
                    <h4>{props.title}</h4>
                    <Typography>{props.description}</Typography>

                    <ul>
                        {props.courses && props.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                        ))}
                    </ul>

                    <Typography>Note: {props.note}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}