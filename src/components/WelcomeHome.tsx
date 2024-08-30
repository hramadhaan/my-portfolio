"use client";

import { ReactTyped } from "react-typed";

export default function WelcomeHome() {
  return (
    <div className="w-full my-32 flex flex-col gap-y-14">
      <div>
        <p className="uppercase font-black text-[120px] leading-none">
          <ReactTyped
            loop
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            startDelay={1000}
            strings={[
              "Hi there, I'm",
              "Halo, Saya",
              "Hola, yo soy",
              "Olá, eu sou",
              "Hallo, ich bin",
            ]}
          />
          <br />
          Hanif Ramadhan
        </p>
      </div>
      <div className="w-7/12 self-center">
        <p className="font-medium text-xl text-center text-zinc-500">
          As a seasoned Mobile App Developer with 5 year experience, coupled
          with 3 years of expertise in ecommerce industry.
        </p>
      </div>
    </div>
  );
}
