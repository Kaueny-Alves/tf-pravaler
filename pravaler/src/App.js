/* eslint-disable react/jsx-no-undef */
import { login } from './pages/Login';
import { simulator } from './pages/simulator';
/*import logo from './logo.svg';*/
import './App.css';

/*function*/ export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={login} />
      <Route path='/simulator' component={simulator} />
    </Switch>
  </BrowserRouter>

  )
};
  
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/ 

export default App;
