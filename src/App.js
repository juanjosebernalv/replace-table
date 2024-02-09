import logo from './logo.svg';
import './App.css';
import { Collapse } from './components/Collapse';
import { Timeline } from './components/Timeline';

function App() {
  return (
    <>
    <Collapse />
     <div style={{padding: '40px'}}>
      <Timeline />
    </div>
    </>
  );
}

export default App;
