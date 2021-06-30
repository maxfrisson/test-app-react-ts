import { useEffect, useState } from "react";
import style from "./Decremenator.module.css";

export const Decremenator: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={style.decremenatorBody}>
      <p>
        You clicked <br /> {count} <br /> times
      </p>
      <button className={style.decrementButton} onClick={() => setCount(count - 1)}>
        DECREMENT
      </button>
    </div>
  );
};
