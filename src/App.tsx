import style from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Decremenator } from "./components/Decremenator/Decremenator";
import { Greetings } from "./components/Greetings/Greetings";
import { Incremenator } from "./components/Incremenator/Incremenator";

const App: React.FC = () => {
  return (
    <div className={style.appBody}>
      <div className={style.appGreetings}>
        <Greetings />
      </div>
      <div className={style.appList}>
        <Counter />
        <Incremenator />
        <Decremenator />
      </div>
    </div>
  );
};

export default App;
