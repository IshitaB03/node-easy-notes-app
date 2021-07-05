import logo from './logo.svg';
import './App.css';
import Notes from './components/notes';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Display from './components/Display';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Notes}/>
          <Route exact path='/display' component={Display}/>
          <Route path='/edit' component={Edit}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
