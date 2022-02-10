import logo from './logo.svg';
import './App.css';
import {VotingTool} from "./features/ballot/VotingTool";
import {RegistrationTool} from "./features/voter/RegistrationTool";
import {ElectionTool} from "./features/election/ElectionTool";

function App() {
  return (
    <div>
      <VotingTool/>
      <RegistrationTool/>
      <ElectionTool/>
    </div>
  );
}

export default App;
