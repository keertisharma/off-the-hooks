import "./App.css";
import { VotingTool } from "./features/ballot/VotingTool";
import { RegistrationTool } from "./features/voter/RegistrationTool";
import { ElectionTool } from "./features/election/ElectionTool";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="voting-tool" element={<VotingTool />} />
          <Route path="registration-tool" element={<RegistrationTool />} />
          <Route path="election-tool" element={<ElectionTool />} />
        </Route>
      </Routes>
  );
}

export default App;
