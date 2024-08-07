import { useState, useEffect } from "react";

export default function TimerClean() {
  console.log("Timer Clean");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TC call back");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    return () => {
      console.log("clean up");
      clearInterval(interval);
    };
  }, []);
  return <div>Count: {count}</div>;
}
