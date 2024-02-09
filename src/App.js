import './App.css';
import { Collapse } from './components/Collapse';
import { Timeline } from './components/Timeline';
import UglyCard from './components/UglyCard';

function App() {
  return (
    <>
      <Collapse />
      <div style={{ padding: '40px' }}>
        <Timeline />
      </div>
      <UglyCard />
    </>
  );
}

export default App;
