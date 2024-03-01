import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Those <span className="text-blue-400">Gainz!</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        “I hated every minute of training, but I said,{" "}
        <span className="text-blue-400 font-medium">Don&apos;t quit.</span>{" "}
        Suffer now and live the rest of your life as a{" "}
        <span className="text-blue-400 font-medium">Champion.</span>”
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Grind On!"}
      ></Button>
    </div>
  );
}
