import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoffeeIcon from '@mui/icons-material/Coffee'; // Import the coffee icon

const FAQ: React.FC = () => {
    return (
        <Box sx={{ padding: '100px', backgroundColor: '#FFFCF4', marginTop:'-105px' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#388E3C', marginBottom: '20px' }}>
                FAQ
            </Typography>
            <Box display="flex" flexDirection="column" gap={4}>
                {/* General Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', marginBottom: '10px' }}>
                        General
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>What’s a Hackathon?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A hackathon is an event where people come together to solve problems by creating software projects, usually over a short period like 24-48 hours.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>I have a question?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Please reach out to our support team for any specific questions you might have.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>I have a question?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Please reach out to our support team for any specific questions you might have.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Registration Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', marginBottom: '10px' }}>
                        Registration
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Can I apply?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, applications are open to everyone interested in participating.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>How do I apply?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can apply by filling out the registration form on our website.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Can I pick my team?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can choose your team members during the application process or be assigned to a team.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Logistics Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', marginBottom: '10px' }}>
                        Logistics
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Will food be provided?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, all meals and snacks will be provided throughout the event.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Where is the Hackathon?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The hackathon will be held at Cornell University in Ithaca, New York.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Are there overnight accommodations?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we provide overnight accommodations for participants who need them.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>I have a question?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Please reach out to our support team for any specific questions you might have.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
