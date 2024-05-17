import './App.css';
import Layout from "./components/containers/Layout";
import { Route, Routes } from "react-router";
import HomePage from "./components/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes >
  );
}

export default App;
