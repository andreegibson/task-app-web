import './App.css';
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewTask/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
