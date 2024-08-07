import { useState, useEffect } from "react";

export default function TimerDirty() {
  console.log("Timer Dirty Component");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("TD use effect callback");
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);
  return <div>Count: {count}</div>;
}
