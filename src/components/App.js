import '../index.css';

import Header from './Header';
import Grid from './Grid';
import Input from './Input';
import Attempt from './Attempt';
import Toast from './Toast';
import Guess from './Guess';
// import characterArray from '../utils/charactersArray';
// import { api } from '../utils/Api';

function App() {
  return (
    <div className="app">
      <Toast/>
      <Header/>
      <Grid/>
      <Input/>
      <Guess/>
      <Attempt/>
    </div>
  );
}

export default App;
