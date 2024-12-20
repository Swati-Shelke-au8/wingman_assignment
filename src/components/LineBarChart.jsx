import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import Typography from '@mui/material/Typography';

const dataset = [
  { min: -12, max: -4, precip: 79, month: 'Jan' },
  { min: -11, max: -3, precip: 66, month: 'Feb' },
  { min: -6, max: 2, precip: 76, month: 'Mar' },
  { min: 1, max: 9, precip: 106, month: 'Apr' },
  { min: 8, max: 17, precip: 105, month: 'Mai' },
  { min: 15, max: 24, precip: 114, month: 'Jun' },
  { min: 18, max: 26, precip: 106, month: 'Jul' },
  { min: 17, max: 26, precip: 105, month: 'Aug' },
  { min: 13, max: 21, precip: 100, month: 'Sept' },
  { min: 6, max: 13, precip: 116, month: 'Oct' },
  { min: 0, max: 6, precip: 93, month: 'Nov' },
  { min: -8, max: -1, precip: 93, month: 'Dec' },
];

const series = [
  { type: 'line', dataKey: 'min', color: '#577399' },
  { type: 'line', dataKey: 'max', color: '#fe5f55' },
  { type: 'bar', dataKey: 'precip', color: '#bfdbf7', yAxisId: 'rightAxis' },
];

function LineBarChart() {
  const [reverseX, setReverseX] = React.useState(false);
  const [reverseLeft, setReverseLeft] = React.useState(false);
  const [reverseRight, setReverseRight] = React.useState(false);

  return (
    <div className="w-full p-4 bg-white rounded shadow">
      <Typography gutterBottom sx={{ fontSize: 14 }} className="LineBarChart" style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085" />
    </svg></span>CONSULTATION
      </Typography>
      <Stack sx={{ width: '100%' }}>
        <Stack direction="row">
          {/* <FormControlLabel
            checked={reverseX}
            control={
              <Checkbox onChange={(event) => setReverseX(event.target.checked)} />
            }
            label="reverse x-axis"
            labelPlacement="end"
          />
          <FormControlLabel
            checked={reverseLeft}
            control={
              <Checkbox onChange={(event) => setReverseLeft(event.target.checked)} />
            }
            label="reverse left axis"
            labelPlacement="end"
          />
          <FormControlLabel
            checked={reverseRight}
            control={
              <Checkbox onChange={(event) => setReverseRight(event.target.checked)} />
            }
            label="reverse right axis"
            labelPlacement="end"
          /> */}
        </Stack>
        <Box sx={{ width: '100%' }}>
          <ResponsiveChartContainer
            series={series}
            xAxis={[
              {
                scaleType: 'band',
                dataKey: 'month',
                label: 'Month',
                reverse: reverseX,
              },
            ]}
            yAxis={[
              { id: 'leftAxis', reverse: reverseLeft },
              { id: 'rightAxis', reverse: reverseRight },
            ]}
            dataset={dataset}
            height={250}
          >
            <ChartsGrid horizontal />
            <BarPlot />
            <LinePlot />
            <ChartsXAxis />
            <ChartsYAxis axisId="leftAxis" label="CONSULTATIONS" />
            <ChartsYAxis
              axisId="rightAxis"
              position="right"
              label="EXPERTS ONLINE"
            />
            <ChartsTooltip />
          </ResponsiveChartContainer>
        </Box>
      </Stack>
    </div>
  );
}

export default LineBarChart;