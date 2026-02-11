import { useEffect, useState } from "react";

const DiscountTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25; // 25 days countdown

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((difference / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
      });
    };

    // Initialize immediately
    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // no dependencies, safe

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-2xl font-semibold my-6">
      <TimeBlock label="Days" value={timeLeft.days} />
      <TimeBlock label="Hrs" value={timeLeft.hours} />
      <TimeBlock label="Min" value={timeLeft.minutes} />
      <TimeBlock label="Sec" value={timeLeft.seconds} />
    </div>
  );
};

// Small reusable component for timer block
const TimeBlock = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl text-pink-500">{value}</span>
    <span className="text-sm uppercase text-gray-700">{label}</span>
  </div>
);

export default DiscountTimer;