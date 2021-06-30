import { useEffect, useState } from "react";
import style from "./Incremenator.module.css";

export const Incremenator = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={style.incremenatorBody}>
      <p>
        You clicked <br /> {count} <br /> times
      </p>
      <button className={style.incrementButton} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
