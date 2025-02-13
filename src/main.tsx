import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import FirstCaseDelayReasonsTable from "./components/charts/FirstCaseDelayReasons.tsx"
import FirstCaseSummaryStats from "./components/charts/FirstCaseSummaryStats.tsx"
import HoursLostLateStarts from "./components/charts/HoursLostLateStarts.tsx"
import LateStartCaseCounts from "./components/charts/LateStartCaseCounts.tsx"
import PercentFCOS from "./components/charts/PercentFCOS.tsx"
import ServiceWeekdayFirstCaseStatsTable from "./components/charts/ServiceWeekdayFirstCaseStatistics.tsx"

import "./index.css"

createRoot(document.getElementById("root")!).render(
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
