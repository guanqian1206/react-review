import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div className="logs">
        <div className="item">
          <div className="date">
            <div className="month">
              三月
            </div>
            <div className="day">
              8
            </div>
          </div>
          <div className="content">
            <h2 className="desc">学习react</h2>
            <div className="time">40分钟</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
