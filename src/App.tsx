import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavigationBar />
        </header>
        <Routes>
          {routes?.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
