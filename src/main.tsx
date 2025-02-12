import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstCaseSummaryStats from './FirstCaseSummaryStats.tsx'
import App from './App.tsx'
import PercentFCOS from './PercentFCOS.tsx'
import LateStartCaseCounts from './LateStartCaseCounts.tsx'
import HoursLostLateStarts from './HoursLostLateStarts.tsx'
import { ServiceWeekdayFirstCaseStatsTable } from './ServiceWeekdayFirstCaseStatistics.tsx'
import { ServiceWeekdayFirstCaseStatsChart } from './ServiceWeekdayFirstCaseStatistics.tsx'

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
      <ServiceWeekdayFirstCaseStatsChart />
      <App />
    </div>
  </StrictMode>,
)
