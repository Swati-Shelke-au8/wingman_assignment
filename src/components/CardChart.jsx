import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { CardData } from "../data/mockData";
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


function CardChart() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {CardData.map((data, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Item>
                                <Typography gutterBottom className='DataName' style={{ display: 'inline-flex', alignItems: 'center' }}>
                                   <span>{data.icon}</span> {data.name}
                                </Typography>
                                <br /><br/>
                                <Typography variant='h4' gutterBottom className='DataCount'>
                                    {data.count}
                                </Typography>
                                <br />
                                <Typography gutterBottom className='DataActivity' style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <span style={{ color: data.activity === "increase" ? "green" : "red" }}>{data.image}15%</span>{data.activity}
                                </Typography>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default CardChart;
