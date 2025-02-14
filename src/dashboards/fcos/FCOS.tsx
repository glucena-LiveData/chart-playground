
import React from 'react';
import '../../index.css'
import { SummaryDataTable, DistributionFirstCasesTable, TimeLostToLateStartsTable } from './FirstCaseSummaryStats.tsx'
import PercentFCOS from './PercentFCOS.tsx'
import LateStartCaseCounts from './LateStartCaseCounts.tsx'
import HoursLostLateStarts from './HoursLostLateStarts.tsx'
import ServiceWeekdayFirstCaseStatsTable from './ServiceWeekdayFirstCaseStatistics.tsx'
import FirstCaseDelayReasonsTable from './FirstCaseDelayReasons.tsx'

const FCOS = () => {
  return (
    <div className="m-10">
      <h1>First Case On-Time Starts</h1>
      <h2><em>Notes: the 0 minutes late/delay in the titles changes to the number selected in grace period</em></h2>
      <div className="visualization-row">
        <SummaryDataTable />
        <DistributionFirstCasesTable />
        <TimeLostToLateStartsTable />
      </div>
      <div className="visualization-row">
        <PercentFCOS />
        <LateStartCaseCounts />
        <HoursLostLateStarts />
      </div>
      <div className="visualization-row">
        <ServiceWeekdayFirstCaseStatsTable />
        <FirstCaseDelayReasonsTable />
      </div>
    </div>
  );
};

export default FCOS;
