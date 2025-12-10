import { useState, useRef } from "react";

function Timer() {
    const [input, setInput ] = useState("");
    const [timeLeft, setTimeLeft ] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!input || isNaN(input))return;

        setTimeLeft(Number(input));
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev -1;
            });
        },1000);
    };
        const reset = () => {
            clearInterval(intervalRef.current);
            setTimeLeft(0);
            setInput("");
        };

        return (
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Countdown Timer</h2>

            <input
                type="number"
                className="border p-2 w-full mb-3 rounded"
                placeholder="Enter seconds"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="text-3xl font-mono mb-4">{timeLeft}s</div>

            <div className="flex justify-center gap-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={startTimer}>Start</button>

            <button className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={reset}>Reset</button>
            </div>
        </div>
        );
}

export default Timer;