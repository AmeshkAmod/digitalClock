import { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (running) return;
    setRunning(true);

    const startTime = Date.now() - time;
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000);
    const min = Math.floor(sec / 60);
    const hrs = Math.floor(min / 60);
    return `${hrs}:${min % 60}:${sec % 60}.${Math.floor((ms % 1000) / 10)}`;
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center ">
      <h2 className="text-xl font-semibold mb-2">Stopwatch</h2>

      <div className="text-3xl font-mono mb-4">{formatTime(time)}</div>

      <div className="flex justify-center gap-3">
        <button className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={start}>Start</button>

        <button className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={stop}>Stop</button>

        <button className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
