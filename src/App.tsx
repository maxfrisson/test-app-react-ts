import style from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Decremenator } from "./components/Decremenator/Decremenator";
import { Incremenator } from "./components/Incremenator/Incremenator";

const App = () => {
  return (
    <div className={style.appBody}>
      <Counter />
      <Incremenator />
      <Decremenator />
    </div>
  );
};

export default App;
