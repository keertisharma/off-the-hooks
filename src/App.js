import "./App.css";
import { VotingTool } from "./features/ballot/VotingTool";
import { RegistrationTool } from "./features/voter/RegistrationTool";
import { ElectionTool } from "./features/election/ElectionTool";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="voting-tool" element={<VotingTool />} />
          <Route path="registration-tool" element={<RegistrationTool />} />
          <Route path="election-tool" element={<ElectionTool />} />
        </Route>
      </Routes>
  );
}

export default App;
