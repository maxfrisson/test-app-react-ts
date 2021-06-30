import style from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Incremenator } from "./components/Incremenator/Incremenator";

const App = () => {
  return (
    <div className={style.appBody}>
      <Counter />
      <Incremenator />
    </div>
  );
};

export default App;
