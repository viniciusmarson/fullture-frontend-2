import logo from './logo.svg';
import { Input } from 'fullture-components';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input type="text" value={text} onChangeText={setText} />
      </header>
    </div>
  );
}

export default App;
