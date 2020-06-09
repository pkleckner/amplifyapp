import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Following the <a className="App-link" href="https://aws.amazon.com/getting-started/hands-on/deploy-react-app-cicd-amplify/?e=gs2020&p=frontend" target="_blank" rel="noopener">Deploy and host a ReactJS app with AWS Amplify Console tutorial</a>.</p>
        <small><em>This project is nothing ground-breaking. It's literally just create-react-app, and AWS tracks your changes on GitHub.</em></small>
      </header>
    </div>
  );
}

export default App;
