import React from "react";

export default function Header() {
  return (
    <header className="flex bg-gradient-to-r from-[#672280] to-[#A626D3] h-16 items-center px-6 tracking-tight text-[#ffffff]">
      <div className="flex gap-2 items-center">
        <img
          src="/src/assets/Troll_Face.svg"
          alt="A troll face which serves as a logo for the app"
          className="h-8"
        />
        <h1 className="text-xl font-bold">Meme Generator</h1>
      </div>
      <h2 className="ml-auto text-xs">React Course - Project 3</h2>
    </header>
  );
}
