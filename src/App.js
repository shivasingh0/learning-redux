
import './App.css';
import User from './component/User';

function App() {
  return (
    <div className="App">
      <h1>Lets start the code</h1>
      <User data = {{ name : 'Shiva', age: '23' }} />
    </div>
  );
}

export default App;
