import React from 'react';

import { 
  BlockCaseCountsColumnsTable, 
  BlockUtilizationTable, 
  ScheduledElectiveCaseSummaryTable, 
  AddonCaseSummaryTable 
} from './BlockUtilSummary.tsx'
import { BlockUtilByBlockGroupTable } from './BlockUtilByBlockGroup.tsx'

const BlockUtilization = () => {
  return (
    <div className="m-10">
      <h1>Block Utilization</h1>
      <h2>Calculates utilization of blocks. Utilization is calculated from patient in room to patient out PLUS turnover time.</h2>
        <div className="visualization-row">
          <BlockCaseCountsColumnsTable />
          <BlockUtilizationTable />
          <ScheduledElectiveCaseSummaryTable />
          <AddonCaseSummaryTable />
        </div>
        <div className="visualization-row">
          <BlockUtilByBlockGroupTable />
        </div>
    </div>
  );
};

export default BlockUtilization;