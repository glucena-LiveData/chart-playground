import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { LateStartCaseCounts } from "./components/charts/LateStartCaseCounts.tsx"
// import FirstCaseDelayReasonsTable from "./components/charts/FirstCaseDelayReasons.tsx"
// import ServiceWeekdayFirstCaseStatsTable from "./components/charts/ServiceWeekdayFirstCaseStatistics.tsx"
// import FirstCaseSummaryStats from "./components/charts/FirstCaseSummaryStats.tsx"
// import HoursLostLateStarts from "./components/charts/HoursLostLateStarts.tsx"
// import LateStartCaseCounts from "./components/charts/LateStartCaseCounts.tsx"
import { PercentFCOS } from "./components/charts/PercentFCOS.tsx"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <div className="flex flex-row gap-6">
        <PercentFCOS />
        <LateStartCaseCounts />
        {/* <LateStartCaseCounts />
      <HoursLostLateStarts /> */}
      </div>
      {/* <div className="flex flex-row gap-6">
        <ServiceWeekdayFirstCaseStatsTable />
        <FirstCaseDelayReasonsTable />
      </div> */}
    </div>
  </StrictMode>
)
