import './App.css';
import Receipt from './components/Receipt';
import receipt from './models/receipt';

// -------------- All Imports
// -------------- 1. Establish State
const state = {
  receipt,
};

function App() {
  return (
    <div className='App'>
      {/* 2. Insert state to each component using props */}
      <Receipt ticketInfo={state.receipt[0]} />
      <Receipt ticketInfo={state.receipt[1]} />
      <Receipt ticketInfo={state.receipt[2]} />
    </div>
  );
}

export default App;
