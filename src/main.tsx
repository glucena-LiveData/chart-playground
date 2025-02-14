import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FCOS from './dashboards/fcos/FCOS.tsx'
import BlockUtilization from './dashboards/block_utilization/BlockUtilization.tsx'
import SurgeonScoreCard from './dashboards/surgeon_scorecard/SurgeonScoreCard.tsx'

const App = () => {
  const [selectedOption, setSelectedOption] = useState('First Case On-Time Starts');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="First Case On-Time Starts">First Case On-Time Starts</option>
        <option value="Block Utilization">Block Utilization</option>
        <option value="Surgeon Scorecard">Surgeon Scorecard</option>
      </select>
      {selectedOption === 'First Case On-Time Starts' && <FCOS />}
      {selectedOption === 'Block Utilization' && <BlockUtilization />}
      {selectedOption === 'Surgeon Scorecard' && <SurgeonScoreCard />}
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
