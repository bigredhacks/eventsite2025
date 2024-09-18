import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoffeeIcon from '@mui/icons-material/Coffee';

const FAQ: React.FC = () => {
    return (
        <Box id="FAQ" sx={{ padding: '100px', backgroundColor: '#FFFCF4' }}>
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
                            <Typography>What’s a hackathon?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A hackathon is a weekend-long event where hundreds of students from around the globe come together to attend seminars and work on creative software and hardware projects based on a chosen theme.                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>How can I ask a question? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can ask a question by emailing bigredhacks@cornell.edu or by filling in the form on the Contact Us page.
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
                            <Typography>Who can participate in the hackathon?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Everyone (over 18), regardless of their education level, is invited to participate in our hackathons!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>How can I sign up?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can sign up through the form on our registration page!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Can I pick my team?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can enter the competition with a team of at most 4 members.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Can I sign up without a team?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can sign up without a team! Before and during the event, we will provide opportunities for you to meet people with matching interests to build a project with.                            </Typography>
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
                            <Typography>Where and when is the hackathon?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This fall, hackathon will take place October 4th-6th at the Physical Sciences Building on Cornell University’s Ithaca Campus.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <CoffeeIcon sx={{ marginRight: '10px', color: '#000' }} />
                            <Typography>Will food be provided?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, breakfast, lunch, and dinner will be provided throughout the whole event!
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
                                Yes, overnight accommodations will be provided at the event site.
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
