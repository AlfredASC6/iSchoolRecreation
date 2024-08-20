import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../../../src/App.css';
export default function DegreesAccordion(props){

    return(
        <div>
            <Accordion className='acc'>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header">
                    <Typography className = "uppercase toBeBolded">{props.degreeName}</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        {/* <Typography>{props.title}</Typography> */}
                        <h4>{props.title}</h4>
                        <Typography>{props.description}</Typography>
                        {props.concentrations && <h4>Concentrations: </h4>}
                        <ul>
                            {props.concentrations && props.concentrations.map((concentration, index) => (
                                <li key={index}>{concentration}</li>
                            ))}
                        </ul>
                        {props.availableCertificates && <Typography>Available Certificates</Typography>
                        }
                        <ul>
                            {props.availableCertificates && props.availableCertificates.map((certs, index) =>(
                                <li key = {index}>{certs}</li>
                            ))}
                        </ul>
                    </AccordionDetails>
            </Accordion>
        </div>
    )   
}