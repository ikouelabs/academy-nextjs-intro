'use client'
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        Bringing<br />
        the computer<br />
        to life
      </h1>

      <Counter />
    </div>
  );
}


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="pt-10">
      <button className="mr-3 bg-gray-200 px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>+</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => setCount(count - 1)}>-</button>
      <div className="mt-4 text-4xl font-semibold">{count}</div>
    </div>
  )
};
