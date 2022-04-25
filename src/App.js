import React from 'react'
import './App.css';
import MainComponent from './components/Maincomponent';
import { BrowserRouter } from 'react-router-dom'
import MyStore from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={MyStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>


      </Provider>


    </div>
  );
}

export default App;
