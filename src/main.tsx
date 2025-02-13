import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FirstCaseSummaryStats from "./components/charts/FirstCaseSummaryStats.tsx";
import PercentFCOS from "./components/charts/PercentFCOS.tsx";
import LateStartCaseCounts from "./components/charts/LateStartCaseCounts.tsx";
import HoursLostLateStarts from "./components/charts/HoursLostLateStarts.tsx";
import ServiceWeekdayFirstCaseStatsTable from "./components/charts/ServiceWeekdayFirstCaseStatistics.tsx";
import FirstCaseDelayReasonsTable from "./components/charts/FirstCaseDelayReasons.tsx";

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
);
