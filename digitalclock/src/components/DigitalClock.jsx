import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center ">
      <h2 className="text-xl font-semibold mb-2">Digital Clock</h2>
      <div className="text-3xl font-mono">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default DigitalClock;
