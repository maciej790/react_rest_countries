import styles from "./style/App.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
