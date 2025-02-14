import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstCaseSummaryStats from './FirstCaseSummaryStats.tsx'
import PercentFCOS from './PercentFCOS.tsx'
import LateStartCaseCounts from './LateStartCaseCounts.tsx'
import HoursLostLateStarts from './HoursLostLateStarts.tsx'
import ServiceWeekdayFirstCaseStatsTable from './ServiceWeekdayFirstCaseStatistics.tsx'
import FirstCaseDelayReasonsTable from './FirstCaseDelayReasons.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="visualization-row">
      <FirstCaseSummaryStats />
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
  </StrictMode>
)
