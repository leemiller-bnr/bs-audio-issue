import './App.css';
import Emitter, {AudioPlayer} from "./AudioPlayer";

function App() {
  return (
    <div className="App">
        <AudioPlayer/>
      <header className="App-header">
        <button className="button1" onClick={()=>{Emitter.emit('button:click')}}>Play sound (method 1)</button>
          <button className="button2" onClick={()=>{Emitter.emit('button:click:alt')}}>Play sound (method 2)</button>
        <button className="button3" onClick={()=>{Emitter.emit('button:click:alt:alt')}}>Play sound (method 3)</button>
      </header>
    </div>
  );
}

export default App;
