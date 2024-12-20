import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Forecast() {
  return (
    <Card sx={{ minWidth: 275, background: "#15B79F", color: "#FFFFFF", height:'310px' }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }} className="ForecastChart" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085" />
          </svg></span>FORECASTS
        </Typography>
        <Typography variant="h5" component="div" className='TypoDiv'>
          +15%
        </Typography>
        <Typography variant="body2" className='TypoBody'>
          forecasted increase in your sales closed by the end of the current month
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" component="div" className='TypoDiv'>
          +20%
        </Typography>
        <Typography variant="body2" className='TypoBody'>
          forecasted increase in your sales closed by the end of the current month
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Forecast;