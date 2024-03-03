import React, { useState, useEffect, useId } from "react";
import "./strokes.css";

export default function Body() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    };
    getMemes();
  }, []);

  const getMemeImage = () => {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    return setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomIndex].url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    return setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="w-full px-8 py-12">
      <section>
        <div className="flex justify-between">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            aria-label="Top text"
            placeholder="Shut up"
            className="w-60 h-10 border border-[#D5D4D8] rounded px-4 outline-none"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            aria-label="Bottom Text"
            placeholder="and take my money"
            className="w-60 h-10 border border-[#D5D4D8] rounded px-4 outline-none"
          />
        </div>
        <button
          className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-full mt-5 rounded text-[#ffffff] font-bold text-lg py-2.5"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </section>
      <section className="mt-8 rounded w-full relative overflow-hidden">
        <img
          src={meme.randomImage}
          alt="A random meme image"
          className="w-full"
        />
        <h3 className="absolute left-1/2 transform -translate-x-1/2 top-8 text-[#ffffff] font-Impact text-4xl text-stroke">
          {meme.topText}
        </h3>
        <h3 className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-[#ffffff] font-Impact text-4xl text-stroke">
          {meme.bottomText}
        </h3>
      </section>
    </main>
  );
}
