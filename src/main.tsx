import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HoursLostLateStarts } from "./components/charts/HoursLostLateStarts.tsx"
import { LateStartCaseCounts } from "./components/charts/LateStartCaseCounts.tsx"
import { PercentFCOS } from "./components/charts/PercentFCOS.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <div className="flex flex-row gap-6">
        <PercentFCOS />
        <LateStartCaseCounts />
        <HoursLostLateStarts />
      </div>
      {/* <div className="flex flex-row gap-6">
        <ServiceWeekdayFirstCaseStatsTable />
        <FirstCaseDelayReasonsTable />
      </div> */}
    </div>
  </StrictMode>
)
