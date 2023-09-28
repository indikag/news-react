import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Header from "./components/Header";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/:id" Component={Description}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
