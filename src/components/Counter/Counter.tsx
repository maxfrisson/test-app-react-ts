import { useEffect, useState } from "react";
import style from "./Counter.module.css";

export const Counter = () => {
  const [tempCount, setTempCount] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCount(tempCount);
    setTempCount("");
    console.log(count);
  };

  const onChange = (e: any) => {
    setTempCount(e.target.value);
  };

  return (
    <form className={style.counterBody} onSubmit={onSubmit}>
      <div className={style.counterOutput}>You entered {count}...</div>
      <div className={style.counterInput}>
        <input type="text" onChange={onChange} value={tempCount} />
        <button className={style.counterButton}>ENTER</button>
      </div>
    </form>
  );
};
