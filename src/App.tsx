import style from "./App.module.css";
import { Counter } from "./components/Counter/Counter";

const App = () => {
  return (
    <div className={style.appBody}>
      <Counter />
    </div>
  );
};

export default App;
