import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function ProductDataTable() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} loading={loading} />
    </div>
  );
}

export default ProductDataTable;