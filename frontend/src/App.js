import './App.css';
import Card from './components/card/card';
import Input from './components/input/input';
import axios from "axios";
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Card/>
      <Input/>
      <Card/>
    </div>
  );
}

export default App;
