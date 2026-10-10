"use client";

import { useEffect, useState } from "react";

function utcTime() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())} UTC`;
}

export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState("00:00:00 UTC");

  useEffect(() => {
    const tick = () => setTime(utcTime());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time}
    </span>
  );
}
